"use client";
import React from "react";
import Image from "next/image";
import ImageCarousel from "../../components/imageCarousel/imageCarousel";

function blogglyCaseStudy() {
  const wireFrameImages = [
    "/images/lowFidWireBlog1.png",
    "/images/lowFidWireBlog2.png",
  ];

  const loFiImagesDesktop = [
    "/images/lowFidProtoDeskBlog1.png",
    "/images/lowFidProtoDeskBlog2.png",
  ];

  const loFiImagesMobile = [
    "/images/lowFidProtoMobileBlog1.png",
    "/images/lowFidProtoMobileBlog2.png",
  ];

  const endIdeateImages = ["/images/endIdeate1.png", "/images/endIdeate2.png"];

  const blogProtoD = [
    "/images/protoBlogD1.png",
    "/images/protoBlogD2.png",
    "/images/protoBlogD3.png",
    "/images/protoBlogD4.png",
  ];

  const blogProtoT = [
    "/images/protoBlogT1.png",
    "/images/protoBlogT2.png",
    "/images/protoBlogT3.png",
    "/images/protoBlogT4.png",
  ];

  const blogProtoM = [
    "/images/protoBlogM1.png",
    "/images/protoBlogM2.png",
    "/images/protoBlogM3.png",
    "/images/protoBlogM4.png",
  ];

  return (
    <div className="container px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="mx-auto w-full py-4">
        <div className="max-w-screen-lg w-full">
          <Image
            src="/images/blogglyHeader.png"
            alt="blogglyHeader"
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
        Bloggly is a groundbreaking blog aggregator designed to offer users a
        seamless experience in accessing a diverse range of blogs, all in one
        convenient platform. Our responsive application caters to a broad target
        audience, including avid blog readers and professionals such as content
        creators, researchers, and enthusiasts using any device.
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
        Blogs are a great way to gain new insights about endless topics. You
        might even follow a certain blog written by a celebrity or any other
        influencer that you enjoy keeping up with.
      </p>
      <p className="pb-2">
        The difficulty with blogs is that there is no one stop shop to consume
        all of the new content from your favorite writers and also write your
        own blogs!
      </p>
      <p className="pb-4">
        Bloggly takes away the headache of searching for individual blogs on a
        daily basis and provides a single, beautiful experience to read, share,
        write, and delight!
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
        <li className="ms-4 list-disc">Feedly</li>
        <li className="ms-4 list-disc">FlipBoard</li>
        <li className="ms-4 list-disc">Inoreader</li>
      </ul>
      <p className="text-xl border-b-2 border-black w-auto inline-block mb-2">
        Findings
      </p>
      <ul className="pb-2">
        <li>
          Feedly, Flipboard, and Inoreader are popular RSS (Really Simple
          Syndication) feed readers that attempt to simplify the way users
          access and consume content. Flipboard is coined as a social magazine
          and is a mobile and tablet only design. Feedly is aimed at users that
          are looking for a news specific aggregator. Finally, Inoreader aims to
          provide a feed from Facebook pages, Reddit and Google news. In
          alignment with this case, these findings helped to confirm the need
          for a blog focused aggregator platform for users that simply want to
          see all of their favorite blogs in a single application.
        </li>
      </ul>
      <p className="text-xl border-b-2 border-black w-auto inline-block mb-2">
        User Persona
      </p>
      <div className="w-full aspect-video relative">
        <Image
          src="/images/userPersonaBlog.png"
          alt="userPErsona"
          fill
          className="block"
        />
      </div>

      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">Define</h2>
      <p className="pb-4 text-lg">
        Wendy is a busy executive who has little time in her day to be able to
        consume her favorite bloggers content and she is looking for an easier
        platform to simplify access to this leisure activity that she wants to
        enjoy on a daily basis.
      </p>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">Ideate</h2>
      <p className="font-bold pb-4">Sitemap</p>
      <div className="w-full aspect-video relative">
        <Image
          src="/images/sitemapBlog.png"
          alt="sitemap"
          fill
          className="block"
        />
      </div>
      <p className="font-bold pb-4">Low Fidelity Wireframe</p>
      <ImageCarousel images={wireFrameImages} gapNum={2}></ImageCarousel>
      <p className="font-bold pt-6 pb-4">Low Fidelity Prototype</p>
      <p>Desktop</p>
      <ImageCarousel images={loFiImagesDesktop} gapNum={2}></ImageCarousel>
      <p>Mobile</p>
      <ImageCarousel images={loFiImagesMobile} gapNum={2}></ImageCarousel>
      <p className="font-bold pt-6 pb-4">
        LoFi Prototype Testing and Synthesizing Results
      </p>
      <div className="w-full aspect-video relative mb-4">
        <Image
          src="/images/lowFidTestSynthBlog.png"
          alt="synth blog"
          className="mx-auto"
          fill="true"
        />
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center py-4">
        <div className=" sm:w-1/3 flex flex-col items-center p-2">
          <div className="my-4 text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
            <p>1</p>
          </div>
          <p className="sm:h-32">
            Participants expressed desire for abiltility to interact with blogs
            posts and individual blogs by sharing, liking and saving them.
          </p>
        </div>
        <div className=" sm:w-1/3 flex flex-col items-center p-2">
          <div className="my-4 text-center w-24 h-24 px-4 br-4 rounded-full bg-green-300 flex items-center justify-center">
            <p>2</p>
          </div>
          <p className="sm:h-32">
            Participants wanted a way to be sure when they decide to publish
            their finalized blog post that it had been done
          </p>
        </div>
      </div>
      <p className="mx-auto text-lg w-72 pb-4 sm:hidden">
        Swipe to see Transformation
      </p>
      <ImageCarousel images={endIdeateImages} gapNum={2}></ImageCarousel>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Prototype
      </h2>
      <p className="pb-4">Desktop</p>
      <ImageCarousel images={blogProtoD} gapNum={4}></ImageCarousel>
      <p className="pb-4">Tablet</p>
      <ImageCarousel images={blogProtoT} gapNum={4}></ImageCarousel>
      <p className="pb-4">Mobile</p>
      <ImageCarousel images={blogProtoM} gapNum={4}></ImageCarousel>
      <p className="pb-4">Desktop Prototype Flows</p>
      <div className="o relative mb-4">
        <Image
          src="/images/blogDeskFlow.png"
          alt="sticketSheet"
          className="mx-auto"
          width={500}
          height={500}
        />
      </div>
      <p className="pb-4">Mobile Prototype Flows</p>
      <div className="o relative mb-4">
        <Image
          src="/images/blogMobileFlow.png"
          alt="sticketSheet"
          className="mx-auto"
          width={500}
          height={500}
        />
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold pb-4 pt-6">
        Accessibility
      </h2>
      <ul className="pb-4 list-disc ml-1">
        <li>
          Landmarks are crucial for accessibility as they provide users with
          screen readers clear navigation points, allowing them to easily
          navigate through different sections of a website or application
        </li>
        <li>
          Color contrast is essential for accessibility because it enables users
          with visual impairments to perceive and distinguish content, such as
          text or buttons, more easily
        </li>
        <li>
          Indicators for the search bars are important for accessibility as it
          helps users, particularly those with visual impairments, to quickly
          identify when search functionality is in use
        </li>
        <li>
          Text hierarchy is a key accessibility aspect as it organizes content
          in a visually structured manner, aiding users with different abilities
          to comprehend and navigate information effectively
        </li>
        <li>
          Call-to-action buttons provides users, including those with motor or
          cognitive impairments, a clear visual cue for important actions,
          enhancing usability
        </li>
      </ul>

      <h2 className="font text-2xl text-blue-600 font-semibold pb-4">
        Sticker Sheet
      </h2>
      <div className=" relative mb-4">
        <Image
          src="/images/stickerSheetBlog.png"
          alt="sticketSheet"
          className="mx-auto"
          width={1200}
          height={800}
        />
      </div>
      <h2 className="font text-2xl text-blue-600 font-semibold py-4">
        Findings
      </h2>
      <p className="pb-4 text-lg">User-Centric Design is Paramount:</p>
      <p className="pb-4">
        Through the Bloggly UX case study, a crucial finding emerged — the
        paramount importance of user-centric design. By prioritizing the
        understanding of user needs and addressing pain points, Bloggly not only
        enhances user satisfaction but also ensures the app's widespread
        adoption. Incorporating features that cater to the preferences and
        expectations of the users has proven instrumental in establishing
        Bloggly as a user-friendly and engaging blog aggregator.
      </p>
      <p className="pb-4 text-lg">Efficiency through Component-Based Design:</p>
      <p className="pb-4">
        A significant learning from the case study involves the implementation
        of components into design to create efficiency. By adopting a
        component-based design approach in Bloggly, the development process
        becomes more streamlined and scalable. Components, such as modular UI
        elements and reusable design patterns, not only expedite the design
        process but also facilitate consistent and cohesive user interfaces.
        This finding underscores the practicality and efficiency gained by
        breaking down the design into reusable components, ensuring a more agile
        and adaptable development cycle for Bloggly.
      </p>
      <p className="pb-4 text-lg">
        Iterative Refinement for Continuous Improvement:
      </p>
      <p className="pb-4">
        Another key finding from the Bloggly UX case study is the importance of
        iterative design for continuous improvement. Understanding that the
        initial design is not static, but a starting point for enhancement, has
        been crucial for refining Bloggly based on user feedback and evolving
        requirements. The iterative approach ensures that Bloggly remains
        dynamic, adaptive, and consistently aligned with user expectations. This
        finding emphasizes the ongoing commitment to refining and optimizing the
        user experience to keep Bloggly at the forefront of user satisfaction.
      </p>
      <p className="pb-4">
        Click{" "}
        <a
          className="font-bold hover:text-blue-600 hover:border-blue-600"
          href="https://www.figma.com/proto/JJkdTRLaL2QD1OTuzcZUpH/BLOGGLY?type=design&node-id=182-378&t=P7Z7zLSE4aTHInl1-1&scaling=min-zoom&page-id=7%3A63&starting-point-node-id=182%3A378&show-proto-sidebar=1&mode=design"
        >
          {" "}
          here{" "}
        </a>
        to view the final prototype.
      </p>
      <div className="relative mb-4 pb-10">
        <Image
          src="/images/blogglyFooter.png"
          alt="blogglyfooter"
          className="mx-auto"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
}

export default blogglyCaseStudy;
