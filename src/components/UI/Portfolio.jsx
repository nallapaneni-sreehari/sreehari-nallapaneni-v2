import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Tag } from 'primereact/tag';
function Portfolio() {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);

  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => setNextItems((prev) => prev + 3);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  const handleFilter = (filter) => {
    if (filter === "all") {
      setPortfolios(data);
      return;
    }
    const filtered = data.filter((p) => p.category === filter);
    setPortfolios(filtered);
  };

  const activeItem = portfolios.find((p) => p.id === activeId);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent Ptojects
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button onClick={() => handleFilter("all")} label="All" severity="secondary" size="small" />
            <Button onClick={() => handleFilter("mean")} label="MEAN Stack" severity="secondary" size="small" />
            <Button onClick={() => handleFilter("mern")} label="MERN Stack" severity="secondary" size="small" />
            <Button onClick={() => handleFilter("rest")} label="RESTful APIs" severity="secondary" size="small" />
            <Button onClick={() => handleFilter("chrome_ext")} label="Chrome Extensions" severity="secondary" size="small" />
            <Button onClick={() => handleFilter("others")} label="Others" severity="secondary" size="small" />
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 !mt-10">
          {portfolios.slice(0, nextItems)?.map((p, idx) => (
            <div
              key={idx}
              className="w-full md:!w-[350px] !group !relative !z-[1] !cursor-pointer"
              onClick={() => showModalHandler(p.id)}
            >
              <figure className="hover:scale-105 ease-in-out duration-300">
                <img className="rounded-[8px] w-full" src={p.imgUrl} alt={p.title} />
              </figure>

              <div className="rounded-[8px] !hidden group-hover:!flex w-full h-full bg-[var(--surface-ground)] bg-opacity-40 absolute top-0 left-0 z-[5] items-center justify-center">
                <Button
                  label="See Details"
                  className="text-white bg-headingColor hover:!bg-[var(--surface-ground)] px-4 py-2 rounded-[8px] font-[500] transition"
                />
              </div>

              <div className="!absolute group-hover:!hidden w-full h-full bg-opacity-90 top-0 z-[5]">
                <div className="rounded-t-[8px] !absolute w-full h-1/4 bg-[var(--surface-ground)] bg-opacity-70 bottom-0">
                  <div className="flex flex-col px-2">
                    <h2 className="py-1 text-xl text-[12px] font-[400]">{p.title}</h2>
                    <p className="text-xs text-gray-200">
                      {p.description.slice(0, 50)}...
                      <span className="underline text-indigo-400"> More</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {data.length > 6 && (
            <Button
              severity="secondary"
              label="Load More"
              onClick={loadMoreHandler}
              disabled={nextItems >= portfolios.length}
              className="text-white bg-primaryColor hover:bg-smallTextColor px-4 py-2 rounded-[8px] font-[500] transition"
            />
          )}
        </div>

        {/* PrimeReact Dialog */}
        <Dialog
          header={activeItem?.title}
          visible={showModal}
          onHide={() => setShowModal(false)}
          style={{ width: "50vw" }}
          className="p-fluid"
        >
          {activeItem && (
            <>
              <div className="flex flex-col gap-5">
                <div className="hidden md:block">
                  <img
                    src={activeItem?.imgUrl}
                    alt={activeItem?.title}
                    className="rounded-lg w-full h-[250px] object-cover"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-7">{activeItem?.description}</p>
                <div>
                  <h4 className="font-semibold text-[18px] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeItem?.technologies?.map((tech, idx) => (
                      <Tag key={idx} value={tech} className="text-md" severity="info" />
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-6 flex flex-col gap-1 md:flex-row md:gap-5'>
                <a href={activeItem.siteUrl} target="_blank">
                  <Button icon="pi pi-external-link" label="Live Website" size="small"/>
                </a>
                <a href={activeItem.gitUrl} target="_blank">
                  <Button icon="pi pi-github" label="GitHub Link" size="small" severity="secondary" />
                </a>
              </div>
            </>

          )}
        </Dialog>
      </div>
    </section>
  );
}

export default Portfolio;
