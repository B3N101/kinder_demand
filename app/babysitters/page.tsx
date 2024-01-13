"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function BabysitterApplication() {
	const [formData, setFormData] = useState({
    name: '',
    description: '',
    zipCode: '',
    age: '',
    price: '',
	contact: '',
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const router = useRouter(); //router instance

  const handleSubmitAlert = event => {
		event.preventDefault();
		// Here you would normally handle the form submission to a server
		console.log(formData);

		// Alert for successful submission
		alert("Application submitted successfully!");
    router.push("/parents");
	};

	// Function to handle all this motion
	const handleSelectChange = event => {
		const value = event.target.value;
		if (value === "babysitters") {
			router.push("/babysitters"); //shoutout kwame
		}
		if (value === "parents") {
			router.push("/parents");
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
							<option value="babysitters">
								<Link href="\babysitters">Babysitters</Link>
							</option>
							<option value="home">
								<Link href="\">Home</Link>
							</option>
							<option value="parents">
								<Link href="/parents">Parents</Link>
							</option>
							{/* more? */}
						</select>
					</div>
				</div>
			</nav>
			<h1 className="text-center text-lg font-bold mb-4">
				Babysitter Application Form
			</h1>
			<form onSubmit={handleSubmit} className="max-w-md mx-auto">
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<textarea
					name="description"
					placeholder="Description"
					value={formData.description}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<input
					type="text"
					name="zipCode"
					placeholder="Zip Code"
					value={formData.zipCode}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<input
					type="number"
					name="age"
					placeholder="Age"
					value={formData.age}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<input
					type="text"
					name="price"
					placeholder="Price per hour"
					value={formData.price}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<input
					type="text"
					name="contact"
					placeholder="Contact information"
					value={formData.contact}
					onChange={handleChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>
				<input
					type="file"
					name="image"
					onChange={handleImageChange}
					className="p-2 border-2 border-gray-300 mb-2 w-full"
				/>


				<form onSubmit={handleSubmitAlert} className="max-w-md mx-auto">
					{/* ... form inputs ... */}
					<button type="submit" className="p-2 bg-blue-500 text-white w-full">
						Submit Application
					</button>
				</form>
			</form>
		</div>
	);
}
