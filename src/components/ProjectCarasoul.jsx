import React from "react";
import { Carousel } from "primereact/carousel";

export default function ProjectCarasoul({ projects }) {
  console.log("images ::: ", projects);
  projects = projects?.imgUrl;

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (imgUrl) => {
    return (
      <div className="w-full border-1 surface-border border-round m-2 text-center px-2">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-md shadow-lg">
          <img
            src={imgUrl}
            alt="project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card w-full mb-0 pb-0">
      <Carousel
        value={projects}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="!w-full"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
