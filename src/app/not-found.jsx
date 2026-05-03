import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-white">

      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <p className="text-xl text-gray-500 mt-2">
        Oops! Page Not Found
      </p>

      <p className="text-gray-400 mt-2">
        The page you are looking for doesn’t exist.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-gray-800">
          Go Home
        </button>
      </Link>

    </div>
  );
}