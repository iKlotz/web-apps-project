import React, {useContext, useEffect} from 'react';
import Explorer from "../../images/explorer.jpg";
import Telecaster from '../../images/telecaster.jpg';
import Ibanez from '../../images/ibanez.jpg';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    // const authContext = useContext(AuthContext);
    //
    // useEffect(() => {
    //     authContext.loadUser();
    //
    //     //eslint-disable-next-line
    // }, []);
    
    return (
        <section className="product_area section-padding">
            <div className="padding_right main_single_product">
                <div className="single_product">
                    <div className="product_img">
                        <img src={Explorer} alt="EXPLORER IMAGE"/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>GIBSON</h1>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product">
                <div className="single_product single_product_two">
                    <div className="product_img">
                        <img src={Explorer} alt="DARK BLUE IMAGE"/>
                    </div>
                    <div className="product_text_two product_text">
                        <h1>Explorer</h1>
                        <p>100% COMBED COTTON</p>
                        <p>COLOR: DARK BLUE</p>
                        <p>ROUND NECK & HALF SLEEVES</p>
                        <p>Classic fit, slightly long</p>
                        <p>GSM: 180</p>
                        <p>PRICE: $ 2100.99</p>
                        <a className="shop_now_btn" href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="padding_right main_single_product section-padding-top">
                <div className="single_product single_product_two">
                    <div className="product_img tre_shirt_2">
                        <img src={Telecaster} alt="DARK BLUE IMAGE"/>
                    </div>
                    <div className="product_text_two tre_shirt_2_text product_text">
                        <h1>FENDER</h1>
                        <p>100% COMBED COTTON</p>
                        <p>COLOR: WHITE & BLACK</p>
                        <p>ROUND NECK & HALF SLEEVES</p>
                        <p>Classic fit, slightly long</p>
                        <p>GSM: 180</p>
                        <p>PRICE: $ 21.99</p>
                        <a className="shop_now_btn" href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product section-padding-top">
                <div className="single_product">
                    <div className="product_img tre_shirt_2">
                        <img src={Telecaster} alt="DARK BLUE IMAGE"/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>TELECASTER</h1>
                    </div>
                </div>
            </div>
            <div className="padding_right main_single_product section-padding-top">
                <div className="single_product">
                    <div className="product_img tre_shirt_3">
                        <img src={Ibanez} alt="DARK BLUE IMAGE"/>
                    </div>
                    <div className="product_text dark_product">
                        <h1>IBANEZ</h1>
                    </div>
                </div>
            </div>
            <div className="padding_left main_single_product section-padding-top">
                <div className="single_product single_product_two">
                    <div className="product_img tre_shirt_3">
                        <img src={Ibanez} alt="DARK BLUE IMAGE"/>
                    </div>
                    <div className="product_text_two product_text">
                        <h1>JEM 777</h1>
                        <p>100% COMBED COTTON</p>
                        <p>COLOR: GRAY WITH BLACK</p>
                        <p>ROUND NECK & HALF SLEEVES</p>
                        <p>Classic fit, slightly long</p>
                        <p>GSM: 180</p>
                        <p>PRICE: $ 31.99</p>
                        <a className="shop_now_btn" href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;