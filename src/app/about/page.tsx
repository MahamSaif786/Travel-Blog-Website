import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src="/images/Traveling-the-World.jpg" // Replace with your actual image path
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-8 sm:pt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">
            Learn more about MA Travelers and our mission to inspire exploration
            and discovery.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
              MA Travelers started with a passion for discovering hidden gems
              around the world. We believe travel is not just about visiting new
              places but about experiencing cultures, connecting with people,
              and creating memories that last a lifetime.
            </p>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Our mission is to inspire fellow travelers by sharing our
              adventures, tips, and insights. Whether youre a seasoned explorer
              or planning your first trip, we aim to provide valuable
              information and motivation to make your journey unforgettable.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <Image
              src="/images/travel-guy.webp" // Replace with your actual image path
              alt="About us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-12 lg:mt-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 lg:mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Mission
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                To inspire and empower individuals to explore the beauty of the
                world, fostering a sense of curiosity and a deeper understanding
                of diverse cultures.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Vision
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                To become a trusted platform for travel enthusiasts worldwide,
                sharing stories and resources that promote sustainable and
                meaningful travel experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
