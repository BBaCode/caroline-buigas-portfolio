"use client";

import React from "react";
import Image from "next/image";

function contact() {
  return (
    <div className="container flex items-center justify-center outer mx-auto">
      <div className="bg-zinc-100 container shadow-xl shadow-slate-400 flex flex-col md:flex-row max-w-xs md:max-w-3xl rounded-lg">
        <div>
          <Image
            src="/images/CRLN.jpg"
            alt="Caroline Buigas"
            width={600}
            height={600}
            className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
          ></Image>
        </div>
        <div className="ml-4 w-96">
          <h1 className="text-xl md:text-3xl font-bold text-blue-600 pb-4 md:pb-8 mt-4">
            Let's Chat
          </h1>
          <p className="text-base leading-8">
            If you'd like to get in touch, email me at{" "}
            <a
              className="hover:border-b-2 border-transparent hover:border-black"
              href="mailto:carolinejbuigas@gmail.com"
            >
              carolinejbuigas@gmail.com
            </a>{" "}
            or feel free to head over to my{" "}
            <a
              className="hover:border-b-2 border-transparent hover:border-blue-600 text-blue-600"
              href="https://www.linkedin.com/in/cjb21/"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default contact;
