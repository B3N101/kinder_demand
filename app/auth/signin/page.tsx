// // import React from "react";
// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { SessionProvider } from "next-auth/react";

// export default function Page() {
// 	const { data: session, status } = useSession();
// 	const userEmail = session?.user?.email;

// 	if (status === "loading") {
// 		return <p>Hang on there...</p>;
// 	}

// 	if (status === "authenticated") {
// 		return (
// 			<>
// 				<p>Signed in as {userEmail}</p>
// 				<button onClick={() => signOut()}>Sign out</button>
// 				<img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
// 			</>
// 		);
// 	}

// 	return (
// 		<>
// 			<p>Not signed in.</p>
// 			<button onClick={() => signIn("github")}>Sign in</button>
// 		</>
// 	);
// }
// // import { providers, signIn, getSession, csrfToken } from "next-auth/client";

// // async function getData() {
// // 	const res = await fetch("https://api.example.com/...");
// // 	// The return value is *not* serialized
// // 	// You can return Date, Map, Set, etc.
// // 	return res.json();
// // }

// // export default function signin() {
// //     multi_providers = await providers();
// //     return (
// // 			<div>
// // 				{Object.values(providers).map(provider => {
// // 					return (
// // 						<div key={provider.name}>
// // 							<button onClick={() => signIn(provider.id)}>
// // 								Sign in with {provider.name}
// // 							</button>
// // 						</div>
// // 					);
// // 				})}
// // 			</div>
// // 	);
// // }