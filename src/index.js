import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PinteresCopy = () => {

    return(
        <div className="pinterest">
            <PinHeader />
            <PinInfo />
            <div> 
                
            </div>
        </div>
    )

}

const PinHeader = () => {
    return(
        <div className="header">
            <img src="http://dummyimage.com/100x100/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" className="imageHeader" />
            <h1>Author</h1>
        </div>
    )
}

const PinInfo = () => {
    return(
        <div className="infoHeader">
            <ul>
                <li>
                    <div className="info-item">
                        <p>
                           37
                           <span>Boards</span> 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="info-item">
                    </div>
                </li>
                <li>
                    <div className="info-item">
                    </div>
                </li>
                <li>
                    <div className="info-item">
                    </div>
                </li>
                <li>
                    <div className="info-item">
                    </div>
                </li>
            </ul>
        </div>
    )
}


const Pin = ({pinte}) => {
    return(
        <div className="pin">
            <p className="title">{pinte.title}</p>
            <p className="author">{pinte.author}</p>
            <Mosaic imgs={pinte.imgs} num={pinte.num_pins} />
            <FollowButton />
        </div>
    )
}

const Mosaic = ({imgs, num}) => {
    return(
        <div className="mosaic">
            <div className="main-img">
                <div className="num-pins">
                    <i className="fa fa-thumb-tack" />
                    <span>{num}</span>
                </div>
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
    ],
    num_pins:4850

}

ReactDOM.render(<Pin pinte={pinte}/>, document.querySelector('#root'));
