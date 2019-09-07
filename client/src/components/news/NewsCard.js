import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({article}) => {

    const {img, content, title} = article;


    return (

        <div className="card mb-3" style={{maxWidth: '70%'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={img} className="card-img" alt="..."/>
                </div>

                <div className="col-md-16">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <p className="card-text">
                            <small className="text-muted">Good news indeed!</small>
                        </p>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-secondary">Read more</button>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
};
export default NewsCard;