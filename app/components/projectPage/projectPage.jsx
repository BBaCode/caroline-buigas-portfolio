"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import content from "../../content/content.json";

function ProjectPage() {
  // const pathname = usePathname();
  // const pageData = content[pathname.slice(11)];

  return (
    <div className="container px-4 sm:px-8 max-w-4xl mx-auto">
      <img src="" alt="header" />
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        The Project
      </h2>
      <p className="pb-4">
        SweetBud is an innovative bouquet ordering app designed to provide users
        with a personalized experience for ordering flowers to their exact
        specifications. Our app caters to a diverse target audience, including
        individuals who have a passion for flowers and professionals such as
        event planners for weddings and TV productions.
      </p>
      <p>
        <span className="font-bold">Duration: </span>6 months
      </p>
      <p>
        <span className="font-bold">Methods: </span>
        Affinity Mapping, Wireframes, Prototyping{" "}
      </p>
      <p className="pb-4">
        <span className="font-bold">Tools: </span>
        Figma and Mural
      </p>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Context
      </h2>
      <p className="pb-2">
        Floral arrangements can serve many purposes from gifting to self
        expression. Flowers are easy to love due their spectacular colors and
        variety. There is something for everyone when it comes to bouquets.
      </p>
      <p className="pb-2">
        I wanted to provide flower enthusiasts with the a platform that is
        seamless to use and provides the user with an element of creativity so
        that they can feel immersed in each step of the experience.
      </p>
      <p className="pb-4">
        SweetBud makes this dream a reality with a simple interface and custom
        ordering options.
      </p>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-6">
        The Process
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 w-full mx-auto sm:flex sm:justify-between pb-4">
        <div className="text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
          <p>Emphasize</p>
        </div>
        <div className="text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
          <p>Define</p>
        </div>
        <div className="text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
          <p>Ideate</p>
        </div>
        <div className="text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
          <p>Prototype</p>
        </div>
        <div className="text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
          <p>Test</p>
        </div>
      </div>

      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Empathize
      </h2>
      <p className="text-xl border-b-2 border-black w-auto inline-block mb-2">
        Competitive Audit
      </p>
      <p className="font-bold pb-2">Companies Included:</p>
      <ul>
        <li className="ms-4 list-disc">Bouqs</li>
        <li className="ms-4 list-disc">Floward</li>
        <li className="ms-4 list-disc">1800Flowers</li>
        <li className="ms-4 list-disc pb-2">Costco</li>
      </ul>
      <p className="text-xl border-b-2 border-black w-auto inline-block mb-2">
        Findings
      </p>
      <ul className="pb-2">
        <li>
          Because Costco and Floward service different markets and general
          products, they would be indirect competitors SweetBud which would be
          serving users within the USA and also providing only floral
          arrangements and not any other gifts such as snack baskets. Bouqs is a
          higher cost option for floral arrangments within this market. Finally,
          1800Flowers' website is not seamless to use and has a very broad
          selection range. Thus, a gap in the market is a service that offers
          users the ability to easily customize bulk floral arrangements at a
          mid range cost.
        </li>
      </ul>
      <p className="text-xl border-b-2 border-black w-auto inline-block mb-2">
        User Persona
      </p>
      <div className="w-full aspect-video relative">
        <Image
          src="/images/userPersona1.png"
          alt="userPErsona"
          fill
          className="block"
        />
      </div>

      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">Define</h2>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">Ideate</h2>
      <p className="font-bold pb-2">Low Fidelity Wireframe</p>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full pb-4">
        <Image
          src="/images/sweetBudFrame1.png"
          alt="Image 1"
          className="max-w-1/5 mx-auto"
          width="200"
          height="200"
        />
        <Image
          src="/images/sweetBudFrame2.png"
          alt="Image 2"
          className="max-w-1/5 mx-auto"
          width="200"
          height="200"
        />
        <Image
          src="/images/sweetBudFrame3.png"
          alt="Image 3"
          className="max-w-1/5 mx-auto"
          width="200"
          height="200"
        />
        <Image
          src="/images/sweetBudFrame4.png"
          alt="Image 4"
          className="max-w-1/5 mx-auto"
          width="200"
          height="200"
        />
        <Image
          src="/images/sweetBudFrame5.png"
          alt="Image 5"
          className="max-w-1/5 mx-auto"
          width="200"
          height="200"
        />
      </div>
      <p className="font-bold pb-2">Feedback</p>
      <div className="w-full aspect-video relative mb-4">
        <Image
          src="/images/feedbackStickies.png"
          alt="feedback"
          className="mx-auto"
          fill="true"
        />
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Accessibility
      </h2>
      <div className="w-full relative">
        <Image
          src="/images/plantsInApp.png"
          alt="plants"
          className="mx-auto"
          width={250}
          height={400}
        />
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Sticker Sheet
      </h2>
      <div className="w-full h-auto aspect-video relative mb-4">
        <Image
          src="/images/stickerSheet.png"
          alt="sticketSheet"
          className="mx-auto"
          fill="true"
        />
      </div>
      <p className="pb-4">
        Click{" "}
        <a
          className="font-bold hover:text-blue-600 hover:border-blue-600"
          href="https://www.figma.com/proto/LYTwdn1gQIUKxL5mD7zg0A/Florals-app?type=design&node-id=430-131&t=0Oe9wh8cllVKDZLL-1&scaling=scale-down&page-id=297%3A761&starting-point-node-id=430%3A131&mode=design"
        >
          here
        </a>{" "}
        to view the final prototype.
      </p>
    </div>
  );
}

export default ProjectPage;
