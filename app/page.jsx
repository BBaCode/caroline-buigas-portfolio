import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 mx-auto mt-6">
      <h1 className="text-5xl md:text-6xl lg:text-8xl text-blue-600 pb-16 ">
        <span className="title">Caroline Buigas</span> <br />
        UX Designer
      </h1>
      <div className="container mx-auto flex-col sm:justify-around flex items-center justify-center">
        <Link
          className="relative group block mb-6 md:mb-0 w-full"
          href="/portfolio/sweetbud-case-study"
        >
          <Image
            src="/images/SweetbudHeader.png" // Replace with the actual path to your first image
            alt="Sweetbud Case Study"
            width={800}
            height={300}
            className="block mx-auto mb-5 hover:opacity-70 hover:shadow-xl"
          />
        </Link>

        <Link
          className="relative group block mb-6 md:mb-0 w-full"
          href="/portfolio/blogly-case-study"
        >
          <Image
            src="/images/blogglyPortfolioPage.png" // Replace with the actual path to your first image
            alt="Bloggly Case Study"
            width={800}
            height={250}
            className="block mx-auto hover:opacity-70 hover:shadow-xl mb-10"
          />
        </Link>
      </div>
    </div>
  );
}
