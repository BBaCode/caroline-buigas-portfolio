"use client";

import React from "react";

function contact() {
  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-xl">
      <div className="h-12 md:h-24 w-full"></div>
      <h1 className="text-xl md:text-3xl font-bold text-blue-600 pb-4 md:pb-8">Let's Chat</h1>
      <p className="text-base leading-8">
        If you'd like to get in touch, email me at{" "}
        <a className="hover:border-b-2 border-transparent hover:border-black" href="mailto:carolinejbuigas@gmail.com">carolinejbuigas@gmail.com</a>{" "}
        or feel free to head over to my <a className="hover:border-b-2 border-transparent hover:border-blue-600 text-blue-600" href="https://www.linkedin.com/in/cjb21/">LinkedIn</a>.
      </p>
    </div>
  );
}

export default contact;
