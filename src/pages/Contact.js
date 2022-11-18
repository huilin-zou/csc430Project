import "./style.css"

import React from "react";
import {NavLink} from "react-router-dom";

import logo2 from "./facebook.png"
import logo3 from "./instagram.png"
import logo from "./twitter.png"

export default function Contact() {

      return (
          <div>

                <div className="contact">

                      <NavLink className="orderButton3"

      to =
          "/order" >
          Order Delivery</NavLink>

                </div>

          <div id = "divider"><p>CONTACT US</p>


              </div>
          <div id = "type"><p>Email us at:
              <a href = "mailto:bumblebeecuisine@gmail.com">bumblebeecuisine
          @gmail.com</a>
                  </p>
          </div>
              <div id="type">
                  <p>
                      Call us at: (347)-555-4294
                  </p>
          </div>
              <div id="type">
                  <p>
                      Visit our location at: <br></br>&
          ensp;
          & ensp;
          111 Mcdougal Street<br>
          </br>&ensp;&ensp;Manhattan,
                      NY<br></br>& ensp;
          & ensp;
          10012 < /p>
              </div >

          <div id = "divider"><br>
          </br>

                  <p>
                      LEAVE A REVIEW
                  </p>
          </div>
              <div id="type">
                  <form>
                      <label htmlFor="name">Name:</label>
          <input type = "text" id = "name" name = "name">
          </input>
                      <label htmlFor="email">Email:</label>
          <input type = "text" id = "email" name = "email">
          </input>
                      <label htmlFor="comment">Comment:</label>
          <input type = "text" id = "comment" name = "comment">
          </input>
                      <input type="submit" value="Submit"></input>
          </form>

              </div>

          <div id = "divider"><br></br>
                      <br></br>
          <p>FOLLOW US ON SOCIAL MEDIA<p align = "center">
          <a href = 'https://www.twitter.com/bumblebeecuisine/'>
          <img className = "style" src = {logo} alt = "twitter" /><
          /a>
                              <a href='https:/ /
              www.facebook.com /
              bumblebeecuisine /'><img  className="style" src={logo2} alt="facebook"/></a> <
                                    a href =
                                        'https://www.instagram.com/bumblebeecuisine/'>
                                <img className = "style" src = {logo3} alt =
                                     "instagram" />
                                </a>
                          </p>
                                </p>
                  </div>

                                <div><br></br>
                    <br></br><br>
                                </br>
                    <br></br>
                                <p className = "wordBubble">We try to show you
                                    all the variety of Japanese cuisine and its
                                        current
                                            trends.</p>

                </div><
          /div>

      )

};