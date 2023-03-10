import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import React from "react";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Link } from "@react-email/link";

interface EmailInterface {
	name: string;
}

const Email: React.FC<Readonly<EmailInterface>> = ({ name }) => {
	return (
		<Html>
			<Head />
			<Preview>Testing sending</Preview>
			<Section
				style={{
					backgroundColor: "#fff",
				}}
			>
				<Container
					style={{
						maxWidth: "700px",
						margin: "20px auto",
						border: "1px solid #444",
					}}
				>
					<Text
						style={{
							padding: "20px",
						}}
					>
						Testing sending email to : {name}
					</Text>
					<Link
						style={{
							textDecoration: "none",
							color: "#ff0f00",
						}}
						href="https://nextjs.org"
					>
						GO to Nextjs page
					</Link>
				</Container>
			</Section>
		</Html>
	);
};

export default Email;
