const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/register', (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        const mailOption = {
            from: `${email}`,
            to: 'g.anas786@gmail.com',
            // to: `${email}`,
            subject: 'Contacting for detailed information',
            html: ` <div>
            <p>${name}</p>
            <p>${email}</p>
            <p>${phone}</p>
            <p>${message}</p>
            </div>
            `
        }

        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log('Error', error);
            } else {
                console.log('Email sent', info.response);
                res.status(201).json({ status: 201, info })
            }
        })
    } catch (error) {
        res.status(201).json({ status: 400, error })
    }
})

module.exports = router;