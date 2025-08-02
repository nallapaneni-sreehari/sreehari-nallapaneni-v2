import React from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import hackerRankImg from '../../assets/images/hackerrank.png';
import { social } from '../../assets/data/socialAccounts';

export default function Footer() {
  return (
    <footer className="card !bg-[var(--surface-ground)] pt-8 pb-5">
      <div className="container mx-auto px-4">
        <div className="sm:flex items-center justify-between gap-8">
          {/* Left Section */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Wanna build something interesting?
            </h1>
            <a href="#contact">
              <Button
                label="Hire Me"
                icon="pi pi-envelope"
                size='small'
              />
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7">
              You can also follow me on my social media channels, let's catch up there!
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-5">
              <span className="text-gray-300 font-semibold text-sm">Follow Me:</span>

              {/* Social Icons */}
              {[
                { icon: 'pi pi-github', link: social.github, title: 'GitHub' },
                { icon: 'pi pi-linkedin', link: social.linkedIn, title: 'LinkedIn' },
                { icon: 'pi pi-facebook', link: social.facebook, title: 'Facebook' },
                { icon: 'pi pi-instagram', link: social.instagram, title: 'Instagram' }
              ].map(({ icon, link, title }) => (
                <a
                  key={title}
                  href={link}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[35px] h-[35px] bg-[var(--surface-ground)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
                >
                  <i className={`${icon} text-gray-400 text-lg`} />
                </a>
              ))}

              {/* HackerRank Icon as Image */}
              <a
                href={social.hackerRank}
                title="HackerRank"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] bg-[var(--surface-ground)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors"
              >
                <img src={hackerRankImg} alt="HackerRank" className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
