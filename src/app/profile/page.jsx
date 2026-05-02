"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const MyprofilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <p>Loading...</p>;
  }


  if (!session) {
    return <p>Please login first</p>;
  }

  const user = session.user;
  console.log(user)
  return (
    <div className="mx-auto text-center bg-white mt-4 border p-4 rounded-xl shadow">
      <h1 className="text-2xl mt-4 font-bold">Your Profile</h1>

      <Image 
        src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
        className="w-35 h-35 rounded-full mx-auto mt-2 border-4 border-blue-700"
       alt="imaeg" width={200} height={200} loading="eager"/>

      <p className="uppercase font-bold text-xl mt-2">{user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default MyprofilePage;