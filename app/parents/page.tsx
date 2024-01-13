"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import babysittersData from "./babysitters";

// Mock babysitters data
// const babysittersData = [
// 	// ... other babysitters ...
// 	{ name: 'Alice Johnson', description: 'Experienced and caring babysitter.', age: 28, price: '$15/hr', zipCode: '01742', imageUrl: '/images/babysitter1.jpeg' },
// 	{ name: 'Bob Smith', description: 'Fun and responsible babysitter.', age: 22, price: '$12/hr', zipCode: '01742', imageUrl: '/images/babysitter2.jpeg' },
// 	// ... add imageUrl for each babysitter ...
// ];
babysittersData.push({ name: 'Alice Johnson', description: 'Experienced and caring babysitter.', age: 28, price: '$15/hr', zipCode: '01742', imageUrl: '/images/babysitter1.jpeg', id:3 });
babysittersData.push({ name: 'Clara Brown', description: 'Certified babysitter with first aid training.', age: 26, price: '$18/hr', zipCode: '01742', imageUrl: '/images/babysitter2.jpeg', id:4 });



export default function Page() {
	const [zipCode, setZipCode] = useState("");
	const [filteredSitters, setFilteredSitters] = useState([]);

	const handleSearch = event => {
		event.preventDefault();
		const searchResult = babysittersData.filter(
			sitter => sitter.zipCode === zipCode
		);
		setFilteredSitters(searchResult);
	};

	const router = useRouter(); //router instance

	// Function to handle all this motion
	const handleSelectChange = event => {
		const value = event.target.value;
		if (value === "babysitters") {
			router.push("/babysitters"); //shoutout kwame
		}
		if (value === "home") {
			router.push("/");
		}
		//ethan is goated
	};

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="bg-gray-800 p-4">
				<div className="flex items-center justify-between">
					<h1 className="text-white">KinderDemand</h1>
					<div>
						<label className="text-white mr-2">Explore:</label>
						<select
							className="p-2 bg-gray-600 text-white"
							onChange={handleSelectChange}
						>
							<option value="parents">
								<Link href="/parents">Parents</Link>
							</option>
							<option value="home">
								<Link href="/">Home</Link>
							</option>
							<option value="babysitters">
								<Link href="/babysitters">Babysitters</Link>
							</option>
						</select>
					</div>
				</div>
			</nav>
			<div className="flex flex-col items-center justify-center p-24 flex-grow">
				<h1>Find Babysitters in Your Area</h1>
				<form onSubmit={handleSearch} className="mt-4">
					<input
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={e => setZipCode(e.target.value)}
						className="p-2 border-2 border-gray-300 mr-2"
					/>
					<button type="submit" className="p-2 bg-blue-500 text-white">
						Search
					</button>
				</form>
				<div className="mt-6">
					{filteredSitters.map((sitter, index) => (
						<div key={index} className="border p-4 mb-4 flex">
							<Link href={`/parents/${sitter.id}`}>
								<Image
									src={sitter.imageUrl}
									alt={sitter.name}
									width={100}
									height={100}
									className="rounded-full"
								/>
								<div className="ml-4">
									<h2>{sitter.name}</h2>
									<p>{sitter.description}</p>
									<p>Age: {sitter.age}</p>
									<p>Rate: {sitter.price}</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
			<footer className="bg-gray-800 p-4 text-white mt-auto">
				{/* Footer content, similar to Home page */}
			</footer>
		</div>
	);
};
