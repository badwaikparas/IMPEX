const express = require("express");
const cors = require("cors");
const zod = require("zod");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");
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

// QR code endpoint
app.get("/qr", (req, res) => {
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
            // console.log(`url: ${url}`);

        }
    });
});

client.on("message_create", async (message) => {
    if (message.body.startsWith("!")) {
        const command = message.body.slice(1).split(" ")[0];
        const args = message.body.slice(1).split(" ").slice(1);

        switch (command) {
            case "start":
                await message.reply("Hello! How can I assist you today?");
                break;
            case "info":
                await message.reply("This is a bot made by Paras Badwaik.");
                break;
            default:
                await message.reply("Unrecognized command. Try !start or !info.");
        }
    }
});

// Initialize WhatsApp client
client.initialize();
