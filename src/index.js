import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Pin = ({pinte}) =>{
    return(
        <div className="pin">
            <h2 className="title">{pinte.title}</h2>
            <p className="author">{pinte.author}</p>
            <Mosaic imgs={pinte.imgs} />
            <FollowButton />

        </div>
    )
}

const Mosaic = ({imgs}) => {
    return(
        <div className="mosaic">
            <div className="main-img">
                <img src={imgs[0]} alt=""/>
            </div>
            <div className="sub-img">
                <img src={imgs[1]} alt=""/>
                <img src={imgs[2]} alt=""/>
                <img src={imgs[3]} alt=""/>
            </div>
        </div>
    )
}

const FollowButton = () => <button className="follow-btn">Follow</button>

const pinte = {
    title: "DIY - Tips Tricks Ideas Repair",
    author: "Aviation Explorer",
    imgs:[
        "http://via.placeholder.com/350x150?text=Hola",
        "http://via.placeholder.com/350x150?text=1",
        "http://via.placeholder.com/350x150?text=2",
        "http://via.placeholder.com/350x150?text=3",
    ]

}

ReactDOM.render(<Pin pinte={pinte}/>, document.querySelector('#root'));
