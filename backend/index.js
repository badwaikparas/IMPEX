const express = require("express");
const cors = require("cors");
const zod = require("zod");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");
const sendMail = require("./email");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// In-memory storage for sessions and QR code data
const allSessionsObject = {};
let qrCodeData = "";

// Test endpoint
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Endpoint to handle email submissions
app.post("/email", async (req, res) => {
    const body = req.body;
    await sendMail(body.name, body.email, body.phoneNo, body.message)
    res.send("Email sent successfully")
});

// QR code endpoint
app.get("/qr", (req, res) => {
    qrcode.generate(qr, { small: true });
    if (qrCodeData) {
        res.json({ qrCode: qrCodeData });
    } else {
        res.status(404).send("QR code not generated yet. Please try again shortly.");
    }
});


// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// WhatsApp client setup
const client = new Client({
    puppeteer: {
        headless: true, // Set to true for production
    },
    authStrategy: new LocalAuth({
        clientId: process.env.CLIENT_ID || "YOUR_CLIENT_ID",
    }),
});

// WhatsApp events
client.once("ready", () => {
    console.log("WhatsApp client is ready!");
});

client.on("qr", (qr) => {
    console.log("QR code received!");
    qrcode.toDataURL(qr, (err, url) => {
        if (err) {
            console.error("Error generating QR code:", err);
        } else {
            qrCodeData = url; // Save the base64 QR code
        }
    });
});

client.on("message_create", async (message) => {
    if (message.body === "What are my shipment details?") {
        await message.reply(`
Hello! 👋 Here's an update on your shipment details:
            
Order Number: #123456789
Shipping Address: 123 Maple Street, Springfield, IL, 62701
Current Status: In Transit 🚚
Estimated Delivery Date: December 16, 2024`
        );
    }
});

client.initialize();