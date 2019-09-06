import React, {useContext, useEffect} from 'react';
import Explorer from "../../images/explorer.jpg";
import Telecaster from '../../images/telecaster.jpg';
import Ibanez from '../../images/ibanez.jpg';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    
    return (
        <div className="row">
        <section className="product_area section-padding">
            <div className="padding_right main_single_product">
                <div className="single_product">
                    <div className="product_img">
                        <img className='w-100' src={Explorer} alt=""/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>GIBSON</h1>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product">
                <div className="single_product single_product_two">
                    <div className="product_img">
                        <img className='w-100' src={Explorer} alt=""/>
                    </div>
                    <div className="product_text_two product_text">
                        <h1>Explorer</h1>
                        <p>Neck material: Mahogany</p>
                        <p>Body material: Mahogany</p>
                        <p>Neck Profile: Slim Taper</p>
                        <p>Number of Frets: 22</p>
                        <p>Finish: Gloss Nitrocellulose Lacquer</p>
                        <p>PRICE: $2099</p>
                        <a className="shop_now_btn" href="http://localhost:3000/store/product/5d6ff8b4d21f2830d827db03">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="padding_right main_single_product section-padding-top">
                <div className="single_product single_product_two">
                    <div className="product_img tre_shirt_2">
                        <img className='w-100' src={Telecaster} alt=""/>
                    </div>
                    <div className="product_text_two tre_shirt_2_text product_text">
                        <h1>FENDER</h1>
                        <p>Neck material: Maple</p>
                        <p>Body material: Alder</p>
                        <p>Neck Profile: "Thin C"</p>
                        <p>Number of Frets: 22</p>
                        <p>Finish: Gloss Tobaco Burst</p>
                        <p>PRICE: $1599</p>
                        <a className="shop_now_btn" href="/store">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product section-padding-top">
                <div className="single_product">
                    <div className="product_img tre_shirt_2">
                        <img className='w-100' src={Telecaster} alt=""/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>TELECASTER</h1>
                    </div>
                </div>
            </div>
            <div className="padding_right main_single_product section-padding-top">
                <div className="single_product">
                    <div className="product_img tre_shirt_3">
                        <img className='w-100' src={Ibanez} alt=""/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>IBANEZ</h1>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product section-padding-top">
                <div className="single_product single_product_two">
                    <div className="product_img tre_shirt_3">
                        <img className='w-100' src={Ibanez} alt=""/>
                    </div>
                    <div className="product_text_two product_text">
                        <h1>JEM 777</h1>
                        <p>Neck material: Maple</p>
                        <p>Body material: American Basswood</p>
                        <p>Neck Profile: "JEM"</p>
                        <p>Number of Frets: 24</p>
                        <p>Finish: Flowers & Shit</p>
                        <p>PRICE: $2599</p>
                        <a className="shop_now_btn" href="/store">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Home;