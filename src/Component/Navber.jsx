"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-white shadow-md">
      <nav className="w-full px-6 py-3 flex items-center justify-between container mx-auto">
      

      <div className="text-xl font-bold text-blue-600">
        <Link href="/">BookLence</Link>
      </div>


      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/books" className="hover:text-blue-500">All Books</Link>
        <Link href="/profile" className="hover:text-blue-500">My Profile</Link>
      </div>

      {/* Right - Conditional */}
      <div>
       
      </div>

    </nav>
    </div>
  );
};

export default Navbar;