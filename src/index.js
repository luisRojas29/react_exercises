import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function Tweet( {tweets} ){
    return(
        <div className="tweet-wrapper">
            {tweets.map(tweet =>(
                <div className="tweet" key={tweet.id}>
                    <Avatar hash={tweet.gravatar}/>
                    <div className="content">
                        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                        <Message text={tweet.message}/>
                        <div className="buttons">
                            <ReplyButton />
                            <RetweetButton count={tweet.retweets}/>
                            <LikeButton count={tweet.likes}/>
                            <MoreOptionsButton/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Avatar( {hash} ){
    var url = `https://www.gravatar.com/avatar/${hash}`;

    return(
        <img src={url}
             alt="avatar"
             className="avatar"
        />
    );
}

function Message( {text} ){
    return(
        <div className="message">
            {text}
        </div>
    );
}

function NameWithHandle( {author} ) {
    const {name, handle} = author;

    return(
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );

}

const Time = ( {time} ) =>{
    const timeString = moment(time).fromNow();
    return(
        <span className="time">{timeString}</span>
    );

};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"></i>
);

function getRetweetCount(count){
    if(count > 0){
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    }else{
        return null;
    }
}

const RetweetButton = ( {count} ) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />{getRetweetCount(count)}
    </span>
);

const LikeButton = ( {count} ) => (
    <span className="like-button">
        <i className="fa fa-heart" />
            { count > 0 && <span className="like-count"> {count} </span> }
    </span>

);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis more-options-button"></i>
);

var testTweet = [
    {
        id: 234,
        message : "Something about cats",
        gravatar : "xyz",
        author : {
            handle : "catperson",
            name : "IAMA Cat Person"
        },
        likes : 2,
        retweets : 5,
        timestamp : "2016-07-30 21:24:37"
    },
    {
        id: 485,
        message : "Something about dogs",
        gravatar : "abc",
        author : {
            handle : "dogperson",
            name : "IAMA Dog Person"
        },
        likes : 15,
        retweets : 3,
        timestamp : "2016-08-11 08:20:14"
    },
    {
        id: 999,
        message : "Something about mice",
        gravatar : "onetwothree",
        author : {
            handle : "mouseperson",
            name : "IAMA Mouse Person"
        },
        likes : 0,
        retweets : 2,
        timestamp : "2016-08-12 20:16:44"
    },
    {
        id: 42,
        message : "Something about birds",
        gravatar : "eagle",
        author : {
            handle : "birdperson",
            name : "IAMA Bird Person"
        },
        likes : 10,
        retweets : 1,
        timestamp : "2016-09-01 05:18:47"
    },
    {
        id: 3564,
        message : "Something about cats",
        gravatar : "xyz",
        author : {
            handle : "catperson",
            name : "IAMA Cat Person"
        },
        likes : 2,
        retweets : 5,
        timestamp : "2016-07-30 21:24:37"
    }
];

ReactDOM.render(<Tweet tweets={testTweet}/>, document.querySelector('#root'));
