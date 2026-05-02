"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { signOut } from "better-auth/api";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user; // ✅ safe
const handelsingOut = async() =>{
 await authClient.signOut();
 window.location.href ='/'
}
  return (
    <div className="bg-white shadow-md">
      <nav className="w-full px-6 py-3 flex items-center justify-between container mx-auto">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">BookLence</Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/books" className="hover:text-blue-500">All Books</Link>
          <Link href="/profile" className="hover:text-blue-500">My Profile</Link>
        </div>

        {/* Right Side */}
        <div>
          {isPending ? (
            <p>Loading...</p>
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* <Image 
                      src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                      className="w-10 h-10 rounded-full mx-auto mt-2 "
                     alt="imaeg" width={200} height={200}/> */}
              <Button onClick={handelsingOut}>Log Out</Button>
            </div>
          ) : (
            <Link href="/login" className="text-blue-500">
              <Button>Login</Button>
            </Link>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;