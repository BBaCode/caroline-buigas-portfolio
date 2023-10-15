import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 mx-auto mt-6">
      <h1 className="text-5xl md:text-6xl lg:text-8xl text-blue-600 pb-16">
        Caroline Buigas <br />
        UX Designer
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-around">
        <Link className="relative group block pb-6 md:pb-0" href="/page1">
          
            <Image
              src="/images/stock1.jpg" // Replace with the actual path to your first image
              alt="First Image"
              width={500}
              height={500}
              className="block"
            />

            {/* Dark overlay and text */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-3xl font-bold">SweetBud</p>
              </div>
            </div>
        </Link>

        <Link className="relative group block pb-6 md:pb-0" href="/page2">
            <Image
              src="/images/stock2.jpg" // Replace with the actual path to your first image
              alt="First Image"
              width={500}
              height={500}
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
