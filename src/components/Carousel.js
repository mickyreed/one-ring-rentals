/**
 * Carousel
 *
 * Carousel class component for home page
 *
 * FILE NAME:   Carousel.js
 * Location:    /src/
 * Created:     7/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a carousel component needs the following
 * TODO: images that keep state - will need to use useState to keep track of state
 * TODO: images that autoplay - will need to use useEffect to autoplay
 * TODO: images have a title and subtitle (or summary)
 * TODO: carousel has buttons on left and right with click event to change active image index up or down
 */
import React from 'react';

const Carousel = () => {
    return (
        <section className="carousel">
            <div className="carouse-item">
                <img className='carousel-image' src='https://placehold.co/600x400' alt="placeholder-image"/>
                <div className="carousel-text">
                    <h1 className="title">Title</h1>
                    <p className="subtitle">Title</p>
                </div>
            </div>
            <button>Button L</button>
            <button>Button R</button>
        </section>
    );
};

export default Carousel;