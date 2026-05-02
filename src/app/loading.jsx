export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      
      <div className="text-center">

        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>

        <p className="mt-4 text-gray-600 font-medium">
          Loading your page...
        </p>

      </div>

    </div>
  );
}