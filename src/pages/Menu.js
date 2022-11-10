import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css"


export default function Menu () {


    return (
        <div>

            <div className="menu">
                <h1>Menu</h1>

                <NavLink className="orderButton3"


                         to="/order"
                >
                    Order Delivery

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
