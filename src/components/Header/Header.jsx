import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { useMediaQuery } from "react-responsive";
import ThemeSwitcher from "../ThemeSwitcher";

const googleDriveFileUrl =
  "https://drive.google.com/file/d/1B7hbjGc5wOs3v5enJhdnMeWTSAzt2xwp";
const myEmail = "sreehari.nallapaneni@gmail.com";

function Header() {
  const headerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const handleDarkMode = (mode) => {
    console.log("mode :: ", mode);
    setDarkMode(mode);
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  useEffect(() => {
    let theme = localStorage.getItem("theme") ?? "lara-light-green";
    theme = darkMode
      ? theme.replace("light", "dark")
      : theme.replace("dark", "light");
    console.log("theme ", theme);

    const existingLink = document.getElementById("theme-css");
    if (existingLink) {
      // Create a new link to avoid reusing same DOM element
      const newLink = existingLink.cloneNode();
      newLink.href = `themes/${theme}/theme.css`;
      document.head.appendChild(newLink);
    } else {
      const link = document.createElement("link");
      link.id = "theme-css";
      link.rel = "stylesheet";
      link.href = `themes/${theme}/theme.css`;
      document.head.appendChild(link);
    }
  }, [darkMode]);

  const leftContent = (
    <div className="flex items-center gap-2">
      <Avatar
        label="NS"
        size="large"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--text-color)",
        }}
        shape="circle"
        className="font-bold text-xl hidden md:flex"
      />
      <div className="hidden md:flex flex-col justify-center">
        <a title="send email" href={`mailto:${myEmail}`} className="ml-2">
          <h2 className="text-xl font-bold leading-tight">
            <p>Sreehari</p>
            <p className="text-sm font-normal">{myEmail}</p>
          </h2>
        </a>
      </div>
      {isMobile && (
        <Button
          icon="pi pi-bars"
          onClick={() => setSidebarVisible(true)}
          className="sm:hidden"
        />
      )}
    </div>
  );

  const centerContent = (
    <ul className="hidden sm:flex gap-4">
      <li>
        <a
          className="hover:font-bold border-b-2 border-transparent hover:border-indigo-800"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold border-b-2 border-transparent hover:border-indigo-800"
          href="#services"
        >
          Services
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold border-b-2 border-transparent hover:border-indigo-800"
          href="#portfolio"
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold border-b-2 border-transparent hover:border-indigo-800"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );

  const rightContent = (
    <div className="flex items-center gap-2">
      <a
        href="/files/Sreehari_Nallapaneni_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Sreehari_Nallapaneni_CV.pdf"
      >
        <Button icon="pi pi-download" label="Resume" size="small" />
      </a>
      {/* <ToggleButton
        checked={darkMode}
        onChange={() => handleDarkMode(!darkMode)}
        onLabel=""
        offLabel=""
        onIcon="pi pi-moon"
        offIcon="pi pi-sun"
        size='small'
      /> */}
      <Button
        onClick={() => handleDarkMode(!darkMode)}
        icon={darkMode ? "pi pi-sun" : "pi pi-moon"}
        outlined
        size="small"
      />

      <ThemeSwitcher />
    </div>
  );

  return (
    <header ref={headerRef} id="header" className="w-full">
      <div className="w-full px-0 card py-0">
        <Toolbar
          start={leftContent}
          center={centerContent}
          end={rightContent}
          className="flex-wrap gap-2 md:gap-4 backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 dark:border-white/10 shadow-md rounded-lg transition-colors"
        />

        <Sidebar
          visible={sidebarVisible}
          position="right"
          onHide={() => setSidebarVisible(false)}
        >
          <ul className="flex flex-col">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Sidebar>
      </div>
    </header>
  );
}

export default Header;
