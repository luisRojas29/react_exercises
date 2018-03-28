import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function AddressLabel( {person} ){
    return(
        <div className="address">
            <p className="name">{person.name}</p>
            <p className="street">{person.address.street}</p>
            <p className="city">{person.address.city}</p>
        </div>
    );
}

const Stamp = ( {image} ) => {
    const url = `${image}`;
    return(
        <div className="stamp">
            <img src={url} alt="Stamp"/>
        </div>
    );
}

const Envelope = ( {datos} ) =>{
    const {from, to, stamp} = datos;

    return(
      <div className="envelope">
          <div className="c-sender">
              <AddressLabel person={from}/>
          </div>
          <div className="c-receiver">
              <AddressLabel person={to}/>
          </div>
          <div className="c-stamp">
              <Stamp image={stamp} />
          </div>
      </div>
    );
};

let person = {
    name: 'Luis Rojas',
    address:{
        street: '123 Fake St.',
        city: 'Boston, MA 02118'
    }
}

let receiver = {
    name: 'Carla Diaz',
    address:{
        street: '123 Fake St.',
        city: 'San Francisco, CA 95448'
    }
}

let mystamp = 'http://via.placeholder.com/70/FF5265/FFFFFF?text=Stamp';

let correspondencia = {
    from: person,
    to: receiver,
    stamp: mystamp
}
/*********************************************************************/

function CreditCard( {cardInfo}){
    const {name, exp_date, number, bank} = cardInfo;

    return(
      <div className="credit-card">
        <h1 className="bank-name">{bank}</h1>
        <h2 className="number-card">{number}</h2>
        <p className="validation-date">Valid {exp_date.month} / {exp_date.year}</p>
        <h2 className="name-card">{name}</h2>
      </div>
    );
}

let tarjeta = {
    name: 'Fulano de tal',
    exp_date: {
        month: '08',
        year: '21'
    },
    number: '4152 3136 8787 9965',
    bank: 'Banorte'
}
/***************************************************************************/

function Poster( {info} ){

    const {img, titulo, subtitulo} = info;

    return(
      <div className="poster">
          <img src={img} alt="Image demotivated" className="impact"/>
          <h1 className="big-title">{titulo}</h1>
          <p className="sub-title">{subtitulo}</p>
      </div>
    );
}

let infografia = {
    img: "https://lamenteesmaravillosa.com/wp-content/uploads/2012/12/Teoria-del-iceberg.jpg",
    titulo: "TITANIC",
    subtitulo: "You will be down... I guarantee"
}
/*
function Tweet( {tweet} ){
    return(
        <div className="tweet">
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
*/
//ReactDOM.render( <AddressLabel person={person} />, document.querySelector('#root') );
ReactDOM.render( <Envelope datos={correspondencia} />, document.querySelector('#root') );
ReactDOM.render( <CreditCard cardInfo={tarjeta} />, document.querySelector('#subroot') );
ReactDOM.render( <Poster info={infografia}/>, document.querySelector('#subsubroot') );
//ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
