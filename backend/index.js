const express = require('express')
const cors = require('cors')
const app = express();
const connectDb = require('./db/db.js')
const zod = require("zod")
require('dotenv').config();

app.use(express.json())
app.use(cors())


const emailSchema = zod.string().email();


app.post("/email", async (req, res) => {
    const email = req.body.email;

    try {

        await emailSchema.parseAsync(email);
        const response = await fetch(process.env.SHEETS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.text();


        if (result === "Success") {
            res.status(200).send("Email added successfully");
        } else {
            res.status(500).send("Error adding email to the sheet");
        }
    } catch (error) {
        if (error instanceof zod.ZodError) {

            console.error('Validation error:', error.errors);
            res.status(400).send("Invalid email format.");
        } else {

            console.error('Error sending data:', error);
            res.status(500).send("Error submitting request.");
        }
    }
});

app.get("/", (req, res) => {
    res.send("hi");
})

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);

})

