"use client";
import babysittersData from "../babysitters";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// export default function Page({ babysittersInfo }) : {params: {slug: string} }) {
//     // get babysitter data from babysitters.tsx from slug which is the name
//     const sitter = babysittersData.find((sitter) => sitter.name === params.slug);
// Get babysitter data from babysitters.tsx from slug which is the name

export default function Page() {
    const sitter = babysittersData[0];
    const router = useRouter(); //router instance

    const handleSelectChange = event => {
			const value = event.target.value;
            if (value === "home") {
                router.push("/");
            }
			if (value === "babysitters") {
				router.push("/babysitters"); //shoutout kwame
			}
			if (value === "parents") {
				router.push("/parents");
			}
			//ethan is goated
		};
    

    return (
			<div>
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
								<option value="home">Home</option>
								<option value="babysitters">
									<Link href="babysitters">Babysitters</Link>
								</option>
								{/* more? */}
							</select>
						</div>
					</div>
				</nav>
				<h1>Babysitters</h1>
				<div className="border p-4 mb-4 flex">
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
				</div>
				{/* // Form with time and date and button to confirm booking */}
				<form>
					<label>
						Date:
						<input type="date" name="date" />
					</label>
					<label>
						Time:
						<input type="time" name="time" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
};
