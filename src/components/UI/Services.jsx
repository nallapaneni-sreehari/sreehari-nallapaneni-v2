import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { FaCode, FaServer, FaRocket } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CustomTimeline() {
    React.useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const events = [
        {
            title: 'Frontend Development',
            description: 'Design and Implement complex UI designs using Angular, React Js, HTML, CSS, Tailwind Css and Bootstrap.',
            icon: <FaCode className="text-primary text-xl" />,
        },
        {
            title: 'Backend Development',
            description: 'Design and develop most secure, scalable, robust and efficient RESTful APIs using Express Js, Node Js and Mongo DB.',
            icon: <FaServer className="text-primary text-xl" />,
        },
        {
            title: 'Deployment',
            description: 'Architect a deployment framework that guarantees the utmost reliability and performance of application servers, ensuring a rock-solid 100% availability for your application.',
            icon: <FaRocket className="text-primary text-xl" />,
        },
    ];

    const customizedMarker = (item) => (
        <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full shadow-md">
            {item.icon}
        </span>
    );

    const customizedContent = (item, index) => {
        const isLeft = index % 2 === 0;

        return (
            <div
                className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                data-aos="fade-up"
            >
                <Card className={`
                        w-[280px] md:w-[320px] text-sm shadow-lg bg-[var(--surface-ground)] border border-[var(--primary-color)]
                        hover:!bg-[var(--primary-color)] hover:!text-white transition-all ease-in-out duration-500 cursor-pointer
                        ${isLeft ? 'mr-auto' : 'ml-auto'}
                    `}>
                    <div className="text-2xl font-semibold text-primary mb-2">{item.title}</div>
                    <p className="text-md text-color-secondary">{item.description}</p>
                </Card>
            </div>
        );
    }

    return (
        <>
            <div className="container lg:pt-5">
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-xl mb-5'>
                        What I can do
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 text-center'>
                        Create full-stack applications that seamlessly integrate front-end and back-end technologies. Have expertise to design and implement data-driven, high-performance web applications using MongoDB, ExpressJS, Angular, or React, and NodeJS.
                    </p>
                </div>
            </div>
            <div className="flex justify-center pt-10 pb-20">
                <Timeline
                    value={events}
                    align="alternate"
                    className="w-full max-w-4xl"
                    marker={(item) => customizedMarker(item)}
                    content={(item, index) => customizedContent(item, index)}
                />
            </div>
        </>
    );
}
