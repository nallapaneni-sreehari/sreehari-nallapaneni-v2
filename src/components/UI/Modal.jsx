import React from 'react'
import portfolios from '../../assets/data/portfolioData'

function Modal({ activeId, setShowModal }) {
    const portfolio = portfolios.find(p => p.id === activeId);
    return (
        <div className='card w-full h-full fixed top-0 left-0 z-[999] bg-headingColor bg-opacity-40'>
            <div className='absolute max-w-[600px] top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
                <div className='hidden md:block'>
                    <figure>
                        <img className='h-[250px] w-full rounded-[8px]' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>
                <div className=''>
                    <h2 className="my-5 font-[700] text-2xl text-headingColor">
                        {portfolio.title}
                    </h2>
                    <p className='leading-7 text-smallTextColor'>
                        {portfolio.description}
                    </p>
                </div>
                <div className='mt-5 flex items-center gap-3 flex-wrap'>
                    <h4 className='text-headingColor font-[700] text-[18px]'>
                        Technologies:
                    </h4>
                    <div className='flex gap-2'>
                    {
                        portfolio.technologies.map((item, idx) => (
                            <span
                                key={idx}
                                className="leading-0 text-[14px] border border-solid border-smallTextColor px-2 py-1 rounded-[5px] text-black"
                            >
                                {item}
                            </span>
                        ))
                    }
                    </div>
                </div>
                <div className='mt-2 flex flex-col gap-1 md:flex-row md:gap-5'>
                    <a href={portfolio.siteUrl} target="_blank">
                        <button className='my-5 text-white bg-primaryColor px-4 py-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>
                            Live Website
                        </button>
                    </a>
                    <a href={portfolio.gitUrl} target="_blank">
                        <button className='my-5 text-white bg-primaryColor px-4 py-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>
                            GitHub Link
                        </button>
                    </a>
                </div>
                <button
                    onClick={() => {
                        setShowModal(false)
                    }}
                    className="w-[1.8rem] h-[1.8rem] flex justify-center items-center px-4 py-2 bg-white absolute top-[1.7rem] right-[1.7rem] rounded-[3px]">
                    <i className="ri-close-line"></i>
                </button>
            </div>
        </div>
    )
}

export default Modal