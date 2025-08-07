import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import mailTrack from "../images/mail-track.png";
import taskManager from "../images/task-manager.png";
import superM from "../images/superm.jpg";
import alertDev from "../images/alert-dev.jpg";
import umsImg from "../images/ums.jpg";
import notify from "../images/notify.jpg";
import urlShort from "../images/urlShort.jpg";
import todor from "../images/todor.jpg";
import reportsForge3 from "../images/reports-forge-3.png";
import reportsForge2 from "../images/reports-forge-2.png";
import reportsForge from "../images/reports-forge.png";

// mts
import mts1 from "../images/mts-1.png";
import mts2 from "../images/mts-2.png";
import mts3 from "../images/mts-3.png";

const portfolios = [
  {
    id: "11",
    imgUrl: [reportsForge3, reportsForge, reportsForge2],
    category: "mean",
    title: "ReportsForge",
    description:
      "ReportsForge is a powerful report automation platform that integrates with Nextcloud to design dynamic templates and generate professional reports. Built using the PEAN stack and deployed via Docker & Nginx, it streamlines complex data into sleek, customizable documents with ease.",
    technologies: [
      "Angular",
      "PrimeNg",
      "Tailwind CSS",
      "Node Js",
      "Postgres",
      "BullMQ",
      "Docker",
    ],
    siteUrl: "https://reportsforge.iamsreehari.in/",
    gitUrl: "#",
  },
  {
    id: "04",
    imgUrl: [mts1, mts2, mts3],
    category: "chrome_ext",
    title: "Mail Tracking System",
    description:
      "Stay in control of your email communications with Mail Tracking System, the ultimate Free Chrome extension for email tracking and analytics. With real-time status updates on sent, delivered, and read emails. Plus, gain deep insights into your email performance with our intuitive dashboard.",
    technologies: ["HTML", "Bootstrap", "Node Js", "MongoDB", "Inbox SDK"],
    siteUrl: "https://free-mail-tracker.softr.app/",
    gitUrl: "#",
  },
  {
    id: "10",
    imgUrl: todor,
    category: "MERN",
    title: "Todor",
    description:
      "A task management application to create and manage you daily tasks, with authentication system, and dark theme features",
    technologies: [
      "React.JS",
      "Tailwind css",
      "Node.js",
      "Mockapi",
      "Clerk Authentication",
      "Daisy UI",
    ],
    siteUrl: "https://todo-app-indol-rho.vercel.app/",
    gitUrl: "#",
  },
  {
    id: "01",
    imgUrl: taskManager,
    category: "mean",
    title: "Simple Task Manager",
    description: "A simple task manager to create and manage tasks/todos.",
    technologies: [
      "Angular",
      "Angular Material",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    siteUrl: "https://nallapaneni-sreehari.github.io/task-manager-pages",
    gitUrl: "#",
  },
  {
    id: "05",
    imgUrl: notify,
    category: "others",
    title: "Notify",
    description:
      "A push notification tool to send the customized push notification to the registered/subscribed devices (Mobile/Desktop).",
    technologies: ["HTML", "Bootstrap css", "Node.js", "MongoDB"],
    siteUrl: "https://push-notifications-iota.vercel.app/",
    gitUrl: "#",
  },
  {
    id: "07",
    imgUrl: urlShort,
    category: "others",
    title: "URL Shortner",
    description:
      "Shortens your lenghty URL and provides a trackable short URL.",
    technologies: ["HTML", "Bootstrap css", "Node.js", "MongoDB"],
    siteUrl: "https://url-shortner-steel-omega.vercel.app/",
    gitUrl: "#",
  },
  {
    id: "03",
    imgUrl: alertDev,
    category: "chrome_ext",
    title: "Alert Dev",
    description:
      "The Chrome extension that fosters seamless collaboration among developers and testers. Using Alert Dev say goodbye to unintentional bugs and flow breaks. Alert Dev sends instant alerts to your team when someone is working on the same website or feature, ensuring everyone stays in the loop.",
    technologies: ["HTML", "Bootstrap CSS", "Node Js", "MongoDB"],
    siteUrl: "#",
    gitUrl: "#",
  },
  {
    id: "02",
    imgUrl: superM,
    category: "mern",
    title: "SuperM",
    description:
      "Your All-in-One Shopping Solution. Browse, search, and shop for a wide range of products from groceries to electronics, all in one convenient app.",
    technologies: ["React Js", "Tailwind CSS"],
    siteUrl: "https://nallapaneni-sreehari.github.io/super-m/",
    gitUrl: "#",
  },
  {
    id: "06",
    imgUrl: umsImg,
    category: "others",
    title: "User Management System",
    description:
      "User management system to create and manage the users, and users can communicate with each other using the messaging feature.",
    technologies: ["Angular", "Angular Material", ".NET Core", "Bootstrap"],
    siteUrl: "#",
    gitUrl: "#",
  },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Ux",
  //   title: "Video Conference Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "10",
  //   imgUrl: portfolioImg03,
  //   category: "Ux",
  //   title: "File Sharing Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "11",
  //   imgUrl: portfolioImg04,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;
