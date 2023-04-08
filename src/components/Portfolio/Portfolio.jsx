import React, { useState } from 'react';
import "./Portfolio.css";
import Data from "./Data.js";

const Portfolio = () => {

    const [items, setItems] = useState(Data);

    const filterItem = (categItem) => {
        const updatedItems = Data.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent Work!</span>

            <>
                <div className="button__skills">
                    <button className="btn" onClick={() => setItems(Data)}>All</button>
                    <button className="btn" onClick={() => filterItem('web')}>Web</button>
                    <button className="btn" onClick={() => filterItem('app')}>App</button>
                    <button className="btn" onClick={() => filterItem('design')}>Design</button>
                </div>
                <div className="portfolio__container container grid">

                    {
                        items.map((elem) => {
                            const { id, name, image, link } = elem;

                            return (
                                <>
                                    <div className="portfolio__content">
                                        <img src={image} className="img__portfolio" />
                                        <h2 className="title__portfolio">{name}</h2>
                                        <a href={link} target="_blank" className="link__portfolio">Demo<i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        </section>
    )
}

export default Portfolio