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
 * create a carousel component needs the following COMPLETED 12/10/24
 * images that keep state - will need to use useState to keep track of state COMPLETED 12/10/24
 * TODO: images that autoplay - will need to use useEffect to autoplay ... 3 second intervals ...
 * images have a title and subtitle (or summary) COMPLETED 12/10/24
 * carousel has buttons on left and right with click event to change active image index up or down COMPLETED 12/10/24
 *
 * REFERENCES:
 * https://blog.bitsrc.io/simple-carousel-in-react-2aac73887243
 * https://browsee.io/blog/creating-a-carousel-in-reactjs/
 * https://iamdyroz.medium.com/create-a-responsive-react-carousel-image-slider-component-from-scratch-using-react-hooks-eefdcfd42d79
 * https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
 *
 */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Breathtaking views',
            subtitle: 'Relaxation in the Bay of Belfalas',
            // imageUrl: 'http://placehold.it/1920x605',
            imageUrl: '#', //use this for now until proper images are found as its a cleaner look
        },
        {
            title: 'The simple life',
            subtitle: 'Lush gardens in Mordor',
            // imageUrl: 'http://placehold.it/1920x605',
            imageUrl: '#', //use this for now until proper images are found as its a cleaner look
        },
    ];

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-item"
                style={{
                    backgroundImage: `url(${slides[currentSlide].imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    position: 'relative',
                }}
            >
                <div
                    className="has-text-centered"
                    style={{
                        /* position Slide Text vertically center */
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                    }}
                >
                    <h1 className="title is-1 ">{slides[currentSlide].title}</h1>
                    <p className="subtitle is-3">{slides[currentSlide].subtitle}</p>
                    <button className="button is-primary">Learn More</button>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="button is-white"
                onClick={handlePrevClick}
                style={{
                    /* position chevron button vertically center */
                    position: 'absolute',
                    top: '40%',
                    left: '15px',
                    transform: 'translateY(-50%)',
                }}
            >
        <span className="icon is-large">
          <i className="faChevronLeft"><FontAwesomeIcon icon={faChevronLeft} /></i>
        </span>
            </button>
            <button
                className="button is-white"
                onClick={handleNextClick}
                style={{
                    /* position chevron button vertically center */
                    position: 'absolute',
                    top: '40%',
                    right: '15px',
                    transform: 'translateY(-25%)',
                }}
            >
        <span className="icon is-large">
          <i className="faChevronRight"><FontAwesomeIcon icon={faChevronRight} /></i>
        </span>
            </button>
        </div>
    );
};

export default Carousel;