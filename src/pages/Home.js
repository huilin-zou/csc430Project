import React from "react"
import logo from "./sushi.png"
import { NavLink, withRouter } from "react-router-dom"

export default function Home() {

    return (
        <main data-testid="main-container">
            <div className="container">
                <h1 className="logo">Bumble</h1>
                <h1 className="logo2">Bee</h1>
            </div>
            <div id="wrapper">
                <NavLink className="orderButton"

                    to="/order"
                    >
                    Order Now
            </NavLink>

            </div>
            <div>
                <img className="s-image" src={logo} alt="sushi"></img>
                <p className="bigBubble">Japanese</p>
                <p className="bigBubble2"> Restaurant</p>
            </div>
            <div>
                <p className="wordBubble">We try to show you all the variety of Japanese cuisine and its current trends.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>



                <a href='dineIn.html' className="choiceButton">DINE IN</a>
                <a href='takeOut.html' className="choiceButton">TAKE OUT</a>
            </div>

        </main>
    )
}