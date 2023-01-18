import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import React from "react";
import Email from "emails/testingEmail";
import { render } from "@react-email/render";

const transporter = nodemailer.createTransport({
	service: process.env.MAIL_HOST,
	auth: {
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
	},
});

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, name } = req.body;

	const emailHtml = render(<Email name={name} />);

	const mailOptions = {
		from: process.env.MAIL_USERNAME,
		to: email as string,
		subject: "Message from contact form",
		html: emailHtml,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "Message sent successfully!" });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong!" });
	}
};

export default sendMail;
