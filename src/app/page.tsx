"use client";
import { useState } from "react";

const HomePage = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        console.log(data);
		try {
			const res = await fetch("/api/sendMail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const json = await res.json();

			if (!res.ok) throw Error(json.message);

            alert("Email sent successfully!"); 

			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form
                onSubmit={handleSubmit}
				style={{
					maxWidth: "500px",
					margin: "auto",
				}}
			>
				<div className="">
					<label htmlFor="name">
						Name
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Name"
							onChange={handleChange}
							value={data.name}
							required
						/>
					</label>
				</div>

				<label htmlFor="email">Email address</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email address"
					onChange={handleChange}
					value={data.email}
					required
				/>
				<small>
					We&apos;ll never share your email with anyone else.
				</small>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default HomePage;
