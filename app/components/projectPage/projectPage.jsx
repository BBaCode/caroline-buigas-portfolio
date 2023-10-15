"use client";

import { usePathname } from "next/navigation";
import React from "react";
import content from "../../content/content.json";

function ProjectPage() {
  const pathname = usePathname();

  const pageData = content[pathname.slice(11)];

  return (
    <div className="container px-4 sm:px-8 max-w-4xl mx-auto">
      <img src="" alt="header" />
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">The Project</h2>
      <p>{pageData.project.intro}</p>
      <p>
        <span className="font-bold">Duration: </span>
        {pageData.project.duration}
      </p>
      <p>
        <span className="font-bold">Methods: </span>
        {pageData.project.methods}
      </p>
      <p>
        <span className="font-bold">Tools: </span>
        {pageData.project.tools}
      </p>
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">Context</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        neque rem. Itaque error natus ducimus corporis temporibus deleniti omnis
        ratione voluptas expedita, minima repellendus aperiam veritatis,
        laborum, libero nisi quod.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sed
        assumenda blanditiis culpa quo natus, sint quos unde atque ipsum aperiam
        eaque ullam quam inventore illo quasi maiores fugiat! Totam!
      </p>
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">The Process</h2>
      <img src="" alt="Process photo" />
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">Empathize</h2>
      <p>Competitor Analysis</p>
      <p>User</p>
      <img src="" alt="UserProfile" />
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">Define</h2>
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">Ideate</h2>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">
        Accessibility
      </h2>
      <img src="" alt="Sticky Notes" />
      <h2 className="font text-2xl font-semibold pb-4 md:pb-8">
        Sticker Sheet
      </h2>
      <img src="" alt="Sticker Sheet" />
      <p>
        Click{" "}
        <a href="https://www.figma.com/proto/LYTwdn1gQIUKxL5mD7zg0A/Florals-app?type=design&node-id=430-131&t=0Oe9wh8cllVKDZLL-1&scaling=scale-down&page-id=297%3A761&starting-point-node-id=430%3A131&mode=design">
          here
        </a>{" "}
        to view the final prototype.
      </p>
    </div>
  );
}

export default ProjectPage;
