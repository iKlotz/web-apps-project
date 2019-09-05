import React from 'react';
import Store from '../../images/Store.jpg';
import {Link} from "react-router-dom";


const About = () => {
    return (
        <div className="container card" style={{maxWidth: "85%"}}>
            <h2 className="card-title">We are guitar world!</h2>
            <img src={Store} className="card-img-top" alt="..."/>
            <div className="row" >
                <div className="col-md-12">
                    <div className="card-body">
                        <p className="card-text">Located in the heart of the San Fernando Valley, Norman’s Rare Guitars
                            carries a wide and often changing variety of new, used, and vintage guitars from many
                            different manufacturers.

                            For more then 30 years, Norman Harris and his knowlegable staff are the authorities on
                            vintage guitars. Answering your questions and finding that perfect guitar you have always
                            wanted.

                            Norman’s Rare Guitars is a household name among top musicians and players worldwide. Each
                            week, professional musicians we all know stop by to talk with Norm and see what new
                            aquisitions he is hiding.

                            Gibson and Fender both use Norman’s Rare Guitar’s 30 years of buying, selling and collecting
                            book for photographic references in the building of the reissues of the guitars.

                            We buy, sell, trade, repair, and appraise rare and vintage guitars.

                            For more information you may contact us or stop on by!</p>
                        <Link to={{pathname: '/store'}}
                              className="btn btn-primary"
                        >
                            Go to store
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;