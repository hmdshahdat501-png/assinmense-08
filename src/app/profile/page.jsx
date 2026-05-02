"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const MyprofilePage = () => {
const {data:session, isPending} = authClient.useSession();
 
console.log(session.user)

  return (
   <div>dfjd</div>
  );

};

export default MyprofilePage;