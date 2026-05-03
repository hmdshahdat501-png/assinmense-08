"use client";

import { Updetprofile } from "@/Component/Updetprofile";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { GoMail } from "react-icons/go";

const MyprofilePage = () => {
const logoutbnt = async() => {
     await authClient.signOut();
     window.location.href = '/'
}
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
    <div className="mx-auto text-center bg-white mt-4 border p-4 rounded-xl shadow animate__animated animate__backInDown ">
      <h1 className="text-2xl mt-4 font-bold">Your Profile</h1>

      <Image 
        src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
        className="w-35 h-35 rounded-full mx-auto mt-2 border-4 border-blue-700"
       alt="imaeg" width={200} height={200} loading="eager"/>

      <p className="uppercase font-bold text-xl mt-2">{user?.name}</p>
      <p className="flex items-center gap-2"><GoMail></GoMail>{user?.email}</p>
      <div className="flex gap-4 mt-4">
        <Updetprofile></Updetprofile>
        <Button onClick={logoutbnt} variant="secondary">Log Out</Button>
      </div>
    </div>
  );
};

export default MyprofilePage;