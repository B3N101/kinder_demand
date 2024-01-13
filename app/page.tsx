"use client";
import Image from "next/image";
import kinderLogo from "./kinder.png";
import Link from "next/link";

import { useRouter } from "next/navigation"; //max remember to paste

const Home = () => {
	const router = useRouter(); //router instance

	// Function to handle all this motion
	const handleSelectChange = event => {
		const value = event.target.value;
		if (value === "babysitters") {
			router.push("/babysitters"); //shoutout kwame
		}
		if (value === "parents") {
			router.push("/parents");
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
							<option value="home">Home</option>
							<option value="babysitters">
								<Link href="babysitters">Babysitters</Link>
							</option>
							<option value="parents">
								<Link href="/parents">Parents</Link>
							</option>
							{/* more? */}
						</select>
					</div>
				</div>
			</nav>
			<div className="flex flex-col items-center justify-stretch p-6 flex-grow">
				<Image src={kinderLogo} alt="Your Image" width={300} height={300} />
			</div>
			<div className="flex flex-col justify-items-stretch justify-center p-24 flex-grow">
				<h1>Welcome to KinderDemand brought to you by Ben Feuer</h1>
				<p>
					A website connecting parents, babysitters, and other loving care
					givers
				</p>
			</div>
			<footer className="bg-gray-800 p-4 text-white mt-auto">
				<h2>CONTACT INFORMATION</h2>
				<p>Email: kfaddison@mxschool.edu</p>
				<p>Phone: (224) 808-8040</p>
				{/* call me baby */}
			</footer>
		</div>
	);
};

export default Home;
