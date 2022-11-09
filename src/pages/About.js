import React from "react";
import {NavLink} from "react-router-dom";

export default function About() {

    return (
        <div>

            <div className="about">
                <h1>About Us!</h1>
                <NavLink className="orderButton1"

                         to="/order"
                >
                    Order Now
                </NavLink>
            </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div>
                <p className="wordBubble">We try to show you all the variety of Japanese cuisine and its current
                    trends.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <NavLink className="choiceButton"

                         to="/dinein"
                >
                    DINE IN
                </NavLink>

                <NavLink className="choiceButton"

                         to="/takeout"
                >
                    TAKE OUT
                </NavLink>
            </div>
        </div>


    )

};
