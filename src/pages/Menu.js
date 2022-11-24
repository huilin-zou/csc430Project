import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css"


export default function Menu() {


    return (
        <div>
            <div>
                <NavLink className="checkCart"


                         to="/cart"
                >
                    Checkout Cart

                </NavLink>
            </div>
            <div className="menu">

            <h1 class="menuheader" align="center">FULL MENU</h1>

            <div class="container2">
                <div class="menu">
                    <h2 class="menu-group-heading">
                        Soups
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Miso Soup</span>
                                    <span class="menu-item-price">   $1.75</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Clam Soup</span>
                                    <span class="menu-item-price">$4.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Made using little neck clams, mushrooms, and mixed vegetables
                            </p>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Shumau Soup</span>
                                    <span class="menu-item-price">$5.50</span>
                                </h3>

                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Salads
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Green Salad</span>
                                    <span class="menu-item-price">$2.50</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Avocado Salad</span>
                                    <span class="menu-item-price">$5.50</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Seaweed Salad</span>
                                    <span class="menu-item-price">$4.95</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Kani Salad</span>
                                    <span class="menu-item-price">$4.75</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Made of crab, caviar, cucumber, and sesame seeds, mixed with Mayonnaise
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Kitchen Appetizers
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Edamame</span>
                                    <span class="menu-item-price">$4.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Gyoza</span>
                                    <span class="menu-item-price">$4.50</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Shumai</span>
                                    <span class="menu-item-price">$4.50</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Beef Negimake</span>
                                    <span class="menu-item-price">$7.25</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Thinly sliced beef rolled with scallions
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Sushi Appetizers
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Sushi</span>
                                    <span class="menu-item-price">$7.00</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Assorted slices of raw fish on rice, 5 pieces
                            </p>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Sashimi</span>
                                    <span class="menu-item-price">$8.00</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                A selection of various raw fish fillets, 6 pieces
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Fish Fillets
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Tuna Pizza</span>
                                    <span class="menu-item-price">$9.25</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Made from a tortilla topped with tuna, kani, and avocado
                            </p>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Yellowtail Jalapeno</span>
                                    <span class="menu-item-price">$9.95</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2 class="menu-group-heading">
                        Signature Rolls
                    </h2>
                    <div class="menu-group">
                        <div class="menu-item">
                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Bumble Bee Roll</span>
                                    <span class="menu-item-price">$13.95</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Made of soft shell crab, cucumber, and shrimp tempura on the inside. <br>Eel, avocado and a honey drizzle on the outside
                            </p>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name"> Naruto Roll</span>
                                    <span class="menu-item-price">$9.95</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Paradise Roll</span>
                                    <span class="menu-item-price">$125</span>
                                </h3>

                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                A cucumber roll wrapped without rice. The inside is made of avocado. <br> A choice if available of tuna, salmon, or yellowtail on the outside
                            </p>
                        </div>
                        <div class="menu-item">

                            <div class="menu-item-text">
                                <h3 class="menu-item-heading">
                                    <span class="menu-item-name">Kani Salad</span>
                                    <span class="menu-item-price">$4.75</span>
                                </h3>
                            </div>
                        </div>
                        <div class="menu-item-description">
                            <p>
                                Made of spice kani, crunch, and avocado on the inside. <br>Tuna and fresh sliced mango with mango sauce on the outside
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>

                <br></br>
                <br></br>
    <p className="wordBubble2">We try to show you all the variety of Japanese cuisine and its current
        trends.</p>
                <br></br>
                <br></br>

            </div>
</div>
)
};
