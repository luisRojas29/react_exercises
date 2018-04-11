import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TrelloCopy = ({cardholders}) => {
    return(
        <div className="trello">
            {cardholders.map(cardholder =>(
                <CardHolder key={cardholder.id} title={cardholder.title} cards={cardholder.cards}/>
            ))}
        </div>
    )
}

const CardHolder = ( {title, cards} ) => {

    return(
        <div className="card-holder">
            <CardHeader title={title} />
            <CardList list={cards} />
            <CardFooter />
        </div>
    )
}

const CardHeader = ( {title} ) => <div className="card-header">{title} <span>...</span></div>;

const CardList = ({list}) =>{
    return(
        <div className="card-list">
            {list.map(item =>(
                <Card title={item.title} key={item.id}/>
            ))}
        </div>
    )
}

const CardFooter = () => <div className="card-footer"><span>Add card...</span></div>

const Card = ({title}) => <div className="card">{title}</div>

const phone = [
    {
        id: 1,
        title: "Subwoofer"
    },

    {
        id: 2,
        title: "Non-porous, washable"
    },

    {
        id: 3,
        title: "Wings"
    },

    {
        id: 4,
        title: "Beveled Bezel"
    },

    {
        id: 5,
        title: "Seedless"
    }
]

const guitar = [
    {
        id: 1,
        title: "Wood maden"
    },
    {
        id: 2,
        title: "Double coil"
    },
    {
        id: 3,
        title: "24 fret"
    },
    {
        id: 4,
        title: "Beveled Bezel"
    }
]

const car = [
    {
        id: 1,
        title: "2.0 Turbo"
    },
    {
        id: 2,
        title: "Front rear"
    },
    {
        id: 3,
        title: "Sport version"
    }
]

const tarjetero = [
    {
        id: 1,
        title:"Phone features",
        cards:phone
    },
    {
        id:2,
        title:"Guitar features",
        cards:guitar
    },
    {
        id:3,
        title:"Car features",
        cards:car
    }
]

ReactDOM.render( <TrelloCopy cardholders={tarjetero} />, document.querySelector('#root') );
//ReactDOM.render(<CardHolder title="Phone features" cards={phone}/>, document.querySelector('#root'));
