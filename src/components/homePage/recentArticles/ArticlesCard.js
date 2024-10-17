/**
 * Articles Card
 *
 * Articles Card class component for home page FeaturedProperties section
 *
 * FILE NAME:   ArticlesCard.js
 * Location:    /src/components
 * Created:     15/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Articles Card component needs the following: COMPLETE
 *  props for title, summary, date, tags, image, link, mediaType COMPLETE
 * TODO: do i need to use PropTypes?? https://www.geeksforgeeks.org/how-to-use-proptypes-for-type-checking-in-react-components/
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../../ArticlesCard.css';

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const ArticlesCard =({ title, summary, date, tags, image, link, mediaType, commentsCount}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className={`article-card ${isHovered ? 'hovered' : ''}`}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>

                <div className=" is-align-items-center">
                    <img src={image} alt={title} className="article-image"/>
                </div>
                <div className="tag media-type-wrap has-background-black px-5 py-5"><i className={`${mediaType}`}></i>
                    <p>dfdf</p>
                    <p>dfdf</p>
                    <p>dfdf</p>
                </div>
                <div className="tag media-type has-background-black px-5 py-5"><i className={`${mediaType}`}></i>

                </div>
                <div className="overlay is-display-flex is-align-items-center has-text-centered">
                    <a href={link} className="button has-background-transparent is-bordered has-text-warning mx-6 my-6">
                        <button className="has-text black is-small has-text-centered"><i
                            className={`${mediaType}`}></i> READ MORE
                        </button>
                    </a>
                </div>
            </div>
            <div>
                <div className="info-blog">
                    <div className="top-info is-display-flex px-6">
                        <div><i className="fa fa-calendar"></i> {date}</div>
                        <div><i className="fa fa-comments-o"></i> {commentsCount}</div>
                    </div>
                    <div>
                        <div>
                            <i className="fa fa-tags"></i> {tags}
                        </div>
                    </div>
                    <div className="double-underline has-text-center pl-0 pr-0"></div>

                    <h4><a href={link} className="title is-4 has-text-black">{title}</a></h4>
                    <p>{summary}</p>
                </div>
            </div>

        </div>
    )
}

export default ArticlesCard;