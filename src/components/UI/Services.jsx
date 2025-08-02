import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import "./Services.css";
import { Tag } from "primereact/tag";

export default function Services() {
  const events = [
    {
      title: "Frontend Development",
      description: `Build responsive and interactive web interfaces using modern frameworks like Angular or React.
        Implement pixel-perfect UI designs with Tailwind or CSS.
        Integrate REST APIs and handle complex user workflows.
        Optimize performance and ensure cross-browser compatibility.`,
      icon: "pi pi-desktop text-xl p-2",
      subTitle: ["Angular", "React.JS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      description: `Design and develop scalable RESTful APIs using Node.js and Express.
        Work with relational and NoSQL databases like PostgreSQL and MongoDB.
        Implement authentication, authorization, and secure data handling.
        Optimize server performance and manage cloud or container deployments.`,
      icon: "pi pi-server text-xl p-2",
      subTitle: ["Node.JS", "Express.JS", "Flask API", "MongoDB", "Postgres"],
    },
    {
      title: "Deployment",
      description: `Automate build and deployment workflows using CI/CD pipelines.
        Deploy applications to cloud platforms like AWS, Hetzner, Vercel, or DigitalOcean.
        Configure web servers, SSL, domains, and environment variables.
        Monitor app health, handle rollbacks, and ensure high availability.`,
      icon: "pi pi-cloud-upload text-xl p-2",
      subTitle: [
        "AWS",
        "Serverless",
        "Lambda",
        "EC2",
        "Hetzner",
        "S3 Object Storage",
      ],
    },
  ];
  const [primary, setPrimary] = useState("rgba(139, 92, 246, 1)");
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const updatePrimaryColor = () => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-color")
      .trim();
    console.log("primary :: ", value);

    if (value) setPrimary(value);
  };

  useEffect(() => {
    // initial value
    updatePrimaryColor();

    // listen to themeChanged event
    window.addEventListener("themeChanged", updatePrimaryColor);

    return () => {
      window.removeEventListener("themeChanged", updatePrimaryColor);
    };
  }, []);

  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: primary }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item, index) => {
    const isLeft = index % 2 === 0;
    return (
      <div
        className={`flex ${isLeft ? "justify-end" : "justify-start"}`}
        data-aos="fade-up"
      >
        <Card
          title={item.title}
          className={`w-[280px] md:w-[450px] mt-5 md:mt-2 text-sm shadow-lg bg-[var(--surface-ground)] border border-[var(--primary-color)]transition-all ease-in-out duration-500 cursor-pointer ${
            isLeft ? "mr-auto" : "ml-auto"
          }`}
        >
          <div className="flex flex-col gap-3 ml-auto mr-auto">
            <div
              className={`grid grid-cols-12 gap-2 flex-row  ${
                isLeft ? "mr-auto" : "ml-auto"
              }`}
            >
              {item?.subTitle?.map((tag) => {
                return <Tag severity={"secondary"} out value={tag} />;
              })}
            </div>

            <p>{item?.description}</p>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="container lg:pt-5 mb-6">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-2xl mb-5">
            What I can do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 text-center">
            Create full-stack applications that seamlessly integrate front-end
            and back-end technologies. Have expertise to design and implement
            data-driven, high-performance web applications using MongoDB,
            ExpressJS, Angular, or React, and NodeJS.
          </p>
        </div>
      </div>
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}
