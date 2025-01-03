import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/travel-guy.webp" // Corrected path
          alt="Background Image"
          className="object-cover w-full h-full"
          layout="fill"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          EXPLORE. DREAM. DISCOVER.
        </h1>
        <p className="text-sm md:text-lg max-w-2xl mb-6">
          This is a world travel blog featuring beautiful destinations, new
          experiences, and hidden places around the globe.
        </p>
        <a
          href="../../articles"
          className="w-full sm:w-auto px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-zinc-300 hover:text-black transition mt-6 text-center sm:px-8 sm:py-4"
        >
          Read Our Latest Blogs
        </a>
      </div>
    </div>
  );
};

export default HeroSection; 