import React, { useEffect, useState } from "react";

import heroImg from "../../assets/images/portfolio-removebg.png";
import CountUp from "react-countup";
import hackerRankImg from "../../assets/images/hackerrank.png";
import { social } from "../../assets/data/socialAccounts";
import { Button } from "primereact/button";


function Hero() {


  const [primary, setPrimary] = useState('rgba(139, 92, 246, 1)');

  const updatePrimaryColor = () => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim();
    console.log('primary :: ', value);

    if (value) setPrimary(value);
  };

  useEffect(() => {
    // initial value
    updatePrimaryColor();

    // listen to themeChanged event
    window.addEventListener('themeChanged', updatePrimaryColor);

    return () => {
      window.removeEventListener('themeChanged', updatePrimaryColor);
    };
  }, []);

  const svgPath = () => {
    return (
      <>
        <path
          fill="url(#sw-gradient)"
          stroke="url(#sw-gradient)"
          strokeWidth="0"
          d="M25.8-31.4c5.8 5.5 7.3 15.4 8.4 24.9 1 9.4 1.6 18.5-1.9 25.7-3.5 7.3-11.1 12.8-19.8 16.4-8.6 3.7-18.4 5.5-26.1 2.5C-21.3 35-27 26.9-32.4 18.4-37.7 9.8-42.6.7-41.3-7.4c1.2-8.2 8.7-15.3 16.6-20.4 8-5.1 16.3-8.1 25.5-9.1s19.2 0 25 5.5z"
          transform="translate(50 50)"
          style={{
            WebkitTransition: "all 0.3s ease 0s",
            transition: "all 0.3s ease 0s",
          }}
        ></path>
        ;
      </>
    );
  };

  return (
    <section className="card pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between flex-col md:flex-row">
          {/* Left Content Start */}
          <div className="w-full md:basis-1/2">
            <h5
              className="text-headingColor font-[600] text-[16px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello, Welcome
            </h5>

            <h1
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              I'm Sreehari, <br />
              Fullstack Developer
            </h1>

            <div
              className="flex items-center gap-4 mt-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
            >
              <a href="#contact">
                <Button icon="pi pi-briefcase" label="Hire Me" size="small" />
              </a>
              <a
                href="#portfolio"
                className="!text-smallTextColor font-[600] text-[16px] border-b-2 border-solid !border-[var(--primary-color)]"
              >
                See portfolio
              </a>
            </div>

            <div className="mt-5">
              <p
                className="gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 md:p-0"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="800"
              >
                Welcome to my portfolio! With 3+ years of experience as a
                Software Engineer, I've built robust, user-friendly applications
                using MongoDB, ExpressJS, Angular, and NodeJS. Explore
                <a
                  className="font-[800] !border-b-2 !border-[var(--primary-color)]"
                  href="#portfolio"
                >
                  {" "}
                  my work{" "}
                </a>
                and let's collaborate on your next project.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <span className="text-smallTextColor text-normal font-[600] text-[var(--primary-color)]">
                Follow Me on:
              </span>

              <a
                title="Github"
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="!text-gray-700 dark:!text-gray-100 text-xl font-[400]"
              >
                <i className="pi pi-github"></i>
              </a>

              <a
                title="LinkedIn"
                href={social.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="!text-blue-600 text-xl font-[400]"
              >
                <i className="pi pi-linkedin"></i>
              </a>

              <a
                title="Facebook"
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="!text-blue-500 text-xl font-[400]"
              >
                <i className="pi pi-facebook !text-xl"></i>
              </a>

              <a
                title="Instagram"
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="!text-rose-500 text-xl font-[400]"
              >
                <i className="pi pi-instagram"></i>
              </a>

              <a
                title="HackerRank"
                href={social.hackerRank}
                target="_blank"
                rel="noreferrer"
                className="!text-green-500 text-xl font-[400]"
              >
                <img
                  className="w-[22px] h-[22px]"
                  src={hackerRankImg}
                  alt="hackerrank"
                />
              </a>
            </div>

          </div>
          {/* Left Content End */}

          {/* Hero Image Start */}
          <div
            className="basis-1/3 mt-10 sm:mt-0"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            {/* <figure className="shadow shadow-black bg-gradient-to-tl from-stone-600 via-purple-600 to-gray-800 text-transparent space-y-5 pt-5 rounded-[25%] object-cover w-[85%] flex justify-center items-center">
              <img
                className="opacity-90 hover:scale-105 ease-out duration-500 rounded-[25%]"
                src={heroImg}
                alt="my-image"
              />
            </figure> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-96 h-96"
              >
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0%" stopColor={primary}></stop>
                    <stop
                      offset="100%"
                      stopColor={primary}
                    ></stop>
                  </linearGradient>
                </defs>

                <mask id="heroImg" mask-type="alpha">
                  {svgPath()}
                </mask>
                <g
                  mask="url(#heroImg)"
                  className="flex justify-center items-center"
                >
                  {svgPath()}
                  <image
                    x="9"
                    y="18"
                    width="75px"
                    // height="70"
                    href={heroImg}
                    alt="my-image"
                    className="hover:scale-95 ease-in duration-300"
                  />
                </g>
              </svg>
            </div>
          </div>
          {/* Hero Image End */}

          {/* Hero Content Right Start */}
          <div className="basis-1/4 justify-center items-center mt-10 flex-wrap gap-2 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-5">
              <h2 className="text-headingColor font-[700] text-xl">
                <CountUp start={0} end={4} duration={2} suffix="" />
              </h2>
              <h4 className="text-headingColor font-[700] text-xl">
                Years of experience
              </h4>
            </div>
            <div className="mb-5">
              <h2 className="text-headingColor font-[700] text-xl">
                <CountUp start={0} end={4} duration={1} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-xl">
                Programming Languages Knowledge
              </h4>
            </div>

            <div className="mb-5">
              <h2 className="text-headingColor font-[700] text-xl">
                <CountUp start={0} end={8} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-xl">
                Realtime Projects Experience
              </h4>
            </div>

            <div className="mb-5">
              <h4 className="text-headingColor font-[700] text-xl">
                Rated Top Performer
              </h4>
              <h2 className="text-headingColor font-[700] text-xl">
                <CountUp
                  start={0}
                  end={5}
                  duration={1}
                  suffix="/5 Rating"
                  prefix="with "
                />
              </h2>
            </div>
            <div className="mb-5">
              {/* <h2 className="text-headingColor font-[700] text-xl">
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={1}
                                    suffix="%"
                                />
                            </h2> */}
              <h4 className="text-headingColor font-[700] text-xl">
                Key Team Contributor
              </h4>
              <h2 className="text-headingColor font-[700] text-xl">
                <CountUp
                  start={0}
                  end={5}
                  duration={1}
                  suffix="+ Projects"
                  prefix="in "
                />
              </h2>
            </div>
          </div>
          {/* Hero Content Right End */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
