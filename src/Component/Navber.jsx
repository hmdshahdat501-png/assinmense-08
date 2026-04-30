"use client";
import Link from "next/link";

const Navbar = ({ user }) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between container mx-auto">
      

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
        {
          user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Hi, {user.name}</span>
              <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
          )
        }
      </div>

    </nav>
  );
};

export default Navbar;