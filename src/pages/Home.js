import React from "react"
import logo from "./sushi.png"
import { NavLink } from "react-router-dom"
import "./style.css"

export default function Home() {

    return (
        <div>
            <div id = "container">

                <h1 className="logo">Bumble</h1>
                <h1 className="logo2">Bee</h1>

            <div id="wrapper">
                <NavLink className="orderButton4"

                    to="/order"
                    >
                    Order Delivery
            </NavLink>

            </div>
            <div>
                <img className="s-image"  src={logo} alt="sushi"></img>
                <p className="bigBubble">Japanese</p>
                <p className="bigBubble2"> Restaurant</p>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p className="wordBubble">We try to show you all the variety of Japanese cuisine and its current trends.</p>
                <div>

                </div>
            </div>
            </div>
        </div>

    )
}