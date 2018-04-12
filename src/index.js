import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const HackerNews = ({news}) => {

    return(
        <div className="hacker-new">
            <HackerNewsHeader/>
            <HackerNewsBody news={news}/>
        </div>
    )
}

const HackerNewsHeader = () => {

    return(
        <div className="header">
            <img src="/y18.gif" alt="Logo HackerNews"/>
            <span>Hacker News</span>
            <ul>
                <li>new</li>
                <li>|</li>
                <li>threads</li>
                <li>|</li>
                <li>comments</li>
                <li>|</li>
                <li>show</li>
                <li>|</li>
                <li>ask</li>
                <li>|</li>
                <li>jobs</li>
                <li>|</li>
                <li>submit</li>
            </ul>
        </div>
    )
}

const HackerNewsBody = ({news}) =>{

    return(
        <div className="news-panel">
            <ul className="news-list">
                {news.map(item=>(
                    <NewsItem item={item} key={item.id} />
                ))}
            </ul>
        </div>
    )

}

const NewsItem = ({item}) => {
    return(
        <li className="news-item">
            <div className="item-main">
                <span>{item.id}.</span><i className="fa fa-caret-up"></i><p>{item.title}</p><span>({item.url})</span>
            </div>
            <div className="item-detail">
                {item.points} points by <a href="#">{item.author}</a> <span>{item.time}</span> | <a href="#">hide</a> | {item.comments} comments
            </div>
        </li>
    )
}

const noticias = [
    {
        id:1,
        title: "Why I'm Suing the US Government",
        url: "bunniestudios.com",
        points: 1346,
        author: "ivank",
        time: "2018-12-04 01:35:45",
        comments: 257
    },
    {
        id:2,
        title: "Zenzizenzizenzic",
        url: "wikipedia.org",
        points: 1440,
        author: "vinchuco",
        time: "2018-12-04 08:35:45",
        comments: 40
    },
    {
        id:3,
        title: "A practical security guide for web developers",
        url: "github.com",
        points: 72,
        author: "zlanwar",
        time: "2018-12-04 10:45:00",
        comments: 6
    },
    {
        id:4,
        title: "I got arrested in Kazakhstan and represented myself in court",
        url: "medium.com",
        points: 370,
        author: "drpp",
        time: "2018-12-04 05:14:36",
        comments: 79
    },
]

ReactDOM.render(<HackerNews news={noticias}/>, document.querySelector('#root'));
