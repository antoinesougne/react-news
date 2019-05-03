import React from 'react';

const NewsView = ({title, source, image, description}) => (
    <article className="News-article">
        <h2>{title}</h2>
        <div>{source}</div>
        <img src={image} alt={title} className="News-article-image"/>
        <div>{description}</div>
    </article>
)

export default NewsView;