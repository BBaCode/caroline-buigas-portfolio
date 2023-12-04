"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import ProjectPage from "../../components/projectPage/projectPage";
import ImageCarousel from "@/app/components/imageCarousel/imageCarousel";

function sweetBudCaseStudy() {
  const wireFrameImages = [
    "/images/sweetBudFrame1.png",
    "/images/sweetBudFrame1.png",
    "/images/sweetBudFrame1.png",
    "/images/sweetBudFrame1.png",
    "/images/sweetBudFrame1.png",
  ];

  const loFiImages = [
    "/images/SBProto1.png",
    "/images/SBProto2.png",
    "/images/SBProto3.png",
  ];

  const prototypeImages = [
    "/images/SBProto1.png",
    "/images/SBProto2.png",
    "/images/SBProto3.png",
  ];

  return (
    <div className="container px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="mx-auto w-full py-4">
        <div className="max-w-screen-lg w-full">
          <Image
            src="/images/SweetbudHeader.png"
            alt="sweetbudheader"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

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
      <p className="pb-4 text-lg">
        AJ is a wedding planner who faces challenges in the current flower
        ordering process, as it lacks clarity and customization options,
        prompting the need for a more user-friendly system that ensures clear
        communication and reliable order fulfillment.
      </p>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">Ideate</h2>
      <p className="font-bold pb-4">Low Fidelity Wireframe</p>
      <ImageCarousel images={wireFrameImages} gapNum={5}></ImageCarousel>
      <p className="font-bold pt-6 pb-4">Low Fidelity Prototype</p>
      <ImageCarousel images={loFiImages} gapNum={3}></ImageCarousel>
      <p className="font-bold pt-6 pb-4">
        LoFi Prototype Testing and Synthesizing Results
      </p>
      <div className="w-full aspect-video relative mb-4">
        <Image
          src="/images/feedbackStickies.png"
          alt="feedback"
          className="mx-auto"
          fill="true"
        />
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Prototype
      </h2>
      <p className="pb-4">
        With the results of the unmoderated test, I was able to go back to the
        drawing board and iterate of my designs to improve the user experience
      </p>
      <ImageCarousel images={prototypeImages} gapNum={3}></ImageCarousel>

      <div className="flex flex-col items-center sm:flex-row sm:justify-center py-4">
        <div className=" sm:w-1/3 flex flex-col items-center p-2">
          <div className="my-4 text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
            <p>1</p>
          </div>
          <p className="sm:h-32">
            Particpants noted that app was not visually appealing in the lo-fi
            prototype state and also complained that they could not insert their
            own information into the check out.
          </p>
        </div>
        <div className=" sm:w-1/3 flex flex-col items-center p-2">
          <div className="my-4 text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
            <p>2</p>
          </div>
          <p className="sm:h-32">
            Participants were confused by the check out process because during
            that stage, the path would go directly from basket to checkout
            completed. As such, it needed more steps added.
          </p>
        </div>
        <div className=" sm:w-1/3 flex flex-col items-center p-2">
          <div className="my-4 text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
            <p>3</p>
          </div>
          <p className="sm:h-32">
            Participants wanted an easier way to get to the home page and
            understand what their next step in the application should be.
          </p>
        </div>
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4 pt-6">
        Accessibility
      </h2>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center pb-4">
        <div className="w-full relative">
          <Image
            src="/images/plantsInApp.png"
            alt="plants"
            className="mx-auto"
            width={250}
            height={400}
          />
        </div>
        <p className="py-4 sm:px-12">
          Text for photos of the order options that way a screen reader can let
          the user know what they have selected High contrast colors used
          throughout for those with low visiability Typography is a sans serif
          font for low resolution screens Label text in the check out screen to
          help the user to know what must be added
        </p>
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
      <h2 className="font text-2xl text-blue-600 font-semibold py-4">
        HiFi Prototype User Testing Verbatims
      </h2>
      <p className="pb-4">
        "As a wedding planner, I appreciate the seamless experience SweetBud
        provides; the simplified ordering process and improved communication
        would make my job much smoother."
      </p>
      <p className="pb-4">
        "The app's customization features are a game-changer! It allowed us to
        tailor each bouquet to perfection, and the tracking system kept us
        informed every step of the way."
      </p>
      <p className="pb-4">
        Click{" "}
        <a
          className="font-bold hover:text-blue-600 hover:border-blue-600"
          href="https://www.figma.com/proto/LYTwdn1gQIUKxL5mD7zg0A/Florals-app?type=design&node-id=430-131&t=0Oe9wh8cllVKDZLL-1&scaling=scale-down&page-id=297%3A761&starting-point-node-id=430%3A131&mode=design"
        >
          {" "}
          here{" "}
        </a>
        to view the final prototype.
      </p>
      <div className="w-full h-auto aspect-video relative mb-4">
        <Image
          src="/images/SBFinal.png"
          alt="FinalSB"
          className="mx-auto"
          fill="true"
        />
      </div>
    </div>
  );
}

export default sweetBudCaseStudy;
