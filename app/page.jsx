import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 mx-auto mt-6">
      <h1 className="text-5xl md:text-6xl lg:text-8xl text-blue-600 pb-16">
        Caroline Buigas <br />
        UX Designer
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center sm:justify-around">
        <Link
          className="relative group block mb-6 md:mb-0 w-80 h-56 lg:w-2/5 lg:h-80"
          href="/portfolio/sweetbud-case-study"
        >
          <Image
            src="/images/stock1.jpg" // Replace with the actual path to your first image
            alt="First Image"
            fill="true"
            className="block"
          />

          {/* Dark overlay and text */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-3xl font-bold">SweetBud</p>
            </div>
          </div>
        </Link>

        <Link
          className="relative group block w-80 h-56 lg:w-2/5 lg:h-80"
          href="/portfolio/blogly-case-study"
        >
          <Image
            src="/images/stock2.jpg" // Replace with the actual path to your first image
            alt="First Image"
            fill="true"
            className="block"
          />

          {/* Dark overlay and text */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-3xl font-bold">Blogly</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
