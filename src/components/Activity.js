/**
 * Activity
 *
 * Activity class component for home page
 *
 * FILE NAME:   Activity.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create an Activity component needs the following: COMPLETE 13/10/24
 * Column suits 1/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 2 Activity cards into 1 columns (cards are 2 columns)
 * TODO: Deal cards (will be another component props for userName, action, title, comment, dateTime ,image, articleLink
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';


const Activity = () => {
    return (
        <div>
            <column className="column ml-0 mr-0 pl-0 pr-0">
                <h3 className="title is-3 has-text-black mt-6 mb-6">Activity</h3>

                {/*add dividing lines here 2 bars*/}

                <ul className="activity ml-0 mr-0 pl-0 pr-0 ">
                    <li className="columns">
                        <column className="column is-half">
                            <a href="#"
                            ><img className="has-radius-rounded" src="http://placehold.it/70x70" alt=""
                            /></a>
                        </column>

                        <column className="info column is-half has-text-left">
                            <h6 className="has-text-black is-size-7 mb-0">
                                Sam Minnée reviewed
                                <a href="#"> The House With No Windows</a>
                            </h6>
                            <p className="is-size-7 mb-2">
                                Awesome solitary confinement, mate. Spot on. Sweet as.
                            </p>
                            <h6 className="has-text-black is-size-7 mb-1">Just now</h6>
                        </column>
                    </li>
                    <li className="columns is-flex">
                        <column className="column is-half">
                            <a href="#"
                            ><img className="has-radius-rounded" src="http://placehold.it/70x70" alt=""
                            /></a>
                        </column>
                        <column className="column is-half has-text-left">
                            <div className="info is-align-items-flex-end">
                                <h6 className="has-text-black is-size-7 mb-0">
                                    Ingo Schoomer asked a question about
                                    <a href="#"> The Mistake by the Lake</a>
                                </h6>
                                <p className="mb-2 is-size-7">Has this house been unit tested?</p>
                                <h6 className="has-text-black is-size-7 mb-0">37 minutes ago</h6>
                            </div>
                        </column>
                    </li>
                </ul>
            </column>
        </div>
    );
};
export default Activity;