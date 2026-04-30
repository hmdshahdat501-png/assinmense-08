import Image from "next/image";
import Link from "next/link";
import bnnerimge from '../../public/Gemini_Generated_Image_9epwod9epwod9epw.png'
const Hero = () => {
  return (
   <div className="mx-auto container">
     <section className="relative w-full h-[90vh] flex items-center justify-center text-center">
      
      <div className="absolute inset-0 opacity-50">
        <Image
          src={bnnerimge} 
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to BookLence
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover your favorite books anytime, anywhere 📚
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/books">
            <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
              Browse Books
            </button>
          </Link>

          <Link href="/login">
            <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>

    </section>
   </div>
  );
};

export default Hero;