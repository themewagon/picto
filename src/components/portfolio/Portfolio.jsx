import React from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const Portfolio = () => {
  const projectData = [
    {
      id: 1,
      image: card1,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
      link: "#!",
    },
    {
      id: 2,
      image: card2,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
      link: "#!",
    },
    {
      id: 3,
      image: card3,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Developed a modern admin panel with a focus on usability and seamless navigation for end users.",
      link: "#!",
    },
    {
      id: 4,
      image: card4,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes.",
      link: "#!",
    },
    {
      id: 5,
      image: card5,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
      link: "#!",
    },
    {
      id: 6,
      image: card6,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Enhanced user experience by streamlining workflows and optimizing interface components.",
      link: "#!",
    },
  ];

  return (
    <div /* h-368 */ className="content mt-25 mb-25" id="portfolio">
      <div /* h-293.5 */ className="">
        <div className="h-32 mb-17.5">
          <div className="min-sm:w-144.25 max-sm:px-2 text-center mx-auto">
            <p className="section-title max-sm:text-xl">Portfolio</p>
            <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <div className="grid min-xl:grid-cols-3 min-[868px]:grid-cols-2 max-[868px]:grid-cols-1 gap-4">
            {/* flex flex-wrap justify-between gap-6 mx-auto */}
            {projectData.map((data, index) => (
              <Projects data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary w-37.25 h-12 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
