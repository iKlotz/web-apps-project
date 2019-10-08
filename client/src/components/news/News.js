import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Spinner from '../layout/Spinner';
import NewsCard from "./NewsCard";

const News = () => {
    const news =
        [
            {
                title: "JAKOB DYLAN STOPS BY NORMAN’S RARE GUITARS",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jakob_Dylan_Minnesota.JPG/1200px-Jakob_Dylan_Minnesota.JPG",
                content: "Jakob Dylan of the Wallflowers stop by Norms. The Golden Heart Awards for the Midnight Mission was a big time success, raising alot of money for LA’s homeless. The Arctic Monkeys stops by the store. Norm will appear on LA Talk Radio June 17th.",
                id: 0
            },
            {
                title: "EYE ON LA 2018",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Foo_Fighters_-_Rock_am_Ring_2018-5671_%28cropped%29.jpg/1200px-Foo_Fighters_-_Rock_am_Ring_2018-5671_%28cropped%29.jpg",
                content: "Thank you Eye on LA for featuring us!!! Guitar World in Tarzana is L.A.'s first store to specialize in vintage guitars! They encourage you to touch the goods in order to fully appreciate them, and you never know who you might see. From Tom Petty to Dave Grohl, many music legends have shopped at Guitar World!",
                id: 1
            },
            {
                title: "BIG WEEK AT Guitar World",
                img: "https://timedotcom.files.wordpress.com/2016/05/eric-clapton-justin-bieber-fan.jpg?quality=85",
                content: "Eric Clapton, Paul Simon, Willie Weeks, Jimmy Earl, John 5, and Jimmy Vivino all buy guitars at Norms. Article on “Player Magazine” in Japan.",
                id: 2
            }


        ];
    return (
        <div className='container'>
            {news !== null ?
                (<TransitionGroup>
                    {news.map(article => (
                        <CSSTransition key={article.id} timeout={300} classNames="item">
                            <div>
                                <NewsCard key={article.id} article={article}/>
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>)
                : <Spinner/>}
        </div>
    );
};
export default News;