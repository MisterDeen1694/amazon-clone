import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"
                    alt="Hero"
                    className="home__image"
                />
                <div className="home__row">
                    <Product
                        id={1}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={11.96}
                        image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
                        rating={2}
                    />
                    <Product
                        id={2}
                        title="Littletude ABDL Cotton Romper Onesie Pajamas Bodysuit, Cosplay Magical Onesie Skirt Set, Tie Dye Hearts"
                        price={24.99}
                        image="https://m.media-amazon.com/images/I/71tU6flqYFL._MCnd_AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={3}
                        title='Pokemon Pikachu 8" Plush - Officially Licensed and Stuffed Animal Material'
                        price={24.99}
                        image="https://m.media-amazon.com/images/I/71qeNzidkkL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={4}
                        title="MGWYE Wood Climbing Tree Cat Jumping Toy Fun Scratching Posts Solid Cats Climb Frame Pet Supplies Products"
                        price="1,109.70"
                        image="https://m.media-amazon.com/images/I/61D6picKTrL._AC_SL1500_.jpg"
                        rating={3}
                    />
                    <Product
                        id={5}
                        title="OUSFOT Led Strip Lights 16.4 Feet with 44-Keys Remote Control 5050 SMD Timing 6 Modes Color Changing RGB led Lights for Bedroom Tv Backlight Kitchen Bar Home Decoration (Multi-Colored)"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/61pUl+NMEpL._AC_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={6}
                        title='Rearz - Critter Caboose Brief Adult Printed Diapers - 12 Pack - 7600ml (Large (33"- 42"))'
                        price={54.99}
                        image="https://m.media-amazon.com/images/I/41LD7WSbKhL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
