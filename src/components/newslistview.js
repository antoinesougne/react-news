import React from 'react';
import NewsView from './newsview';

const NewslistView = ({articles})=>(
        <section className="News-list">
        {articles.map((item)=>(
            <NewsView title={item.title} source={item.source} image={item.image} description={item.description}/>))}
    </section>
)

export default NewslistView;