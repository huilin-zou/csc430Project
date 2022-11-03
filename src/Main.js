import React from "react"

import logo from "./sushi.png"

export default function Main() {

    return (
        <main>
            <div className="container">
                <h1 className="logo">Bumble</h1>
                <h1 className="logo2">Bee</h1>
            </div>
            <div id="wrapper">
                <p>
                    <a href='orderNow.html' class="orderButton">ORDER NOW</a>
                </p>
            </div>
            <div>
                <img className="s-image" src={logo}></img>
                <p class="bigBubble">Japanese</p>
                <p class="bigBubble2"> Restaurant</p>
            </div>
            <div>
                <p className="wordBubble">We try to show you all the variety of Japanese cuisine and its current trends.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a href='dineIn.html' class="choiceButton">DINE IN</a>
                <a href='takeOut.html' class="choiceButton">TAKE OUT</a>
            </div>

        </main>
    )
}