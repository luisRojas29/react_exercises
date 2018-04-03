import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ErrorBox = ({children}) => {

    return(
        <div className="alert alert-danger error-box">
            <i className="fa fa-exclamation-triangle" />
            {children}
        </div>

    )
}

const NavItem = ( {url, children} ) => {
    return(
        <li>
            <a href={url}>{children}</a>
        </li>
    );
}

function Nav({children}){
    return(
        <ul>
            {children}
        </ul>
    );
}

function verified(properties, propertyName, component, types){
    let error = null;
    const prop = properties[propertyName];

    React.Children.forEach(prop, function (child) {

        if( types.indexOf(child.type) === -1){
            error = new Error('`' + component + '` children should be `' + types.map(type => type.name) + '`.');
        }

    })

    return error;
}

Nav.propTypes = {
    children: function(props, propName, componentName){
        return verified(props, propName, componentName, [NavItem]);
    }
}

function Dialog( {children} ){
    return(
        <div className="panel panel-default">
            {children}
        </div>
    )
}

Dialog.propTypes = {
    children: function (props, propName, componentName) {
        return verified(props, propName, componentName, [Title, Body, Footer]);
    }
}

const Title = ( {children} ) =>{
    return(
        <div className="panel-heading">
            <h3 className="panel-title">{children}</h3>
        </div>
    )
}

const Body = ( {children} ) =>{
    return(
        <div className="panel-body">
            {children}
        </div>
    )
}

const Footer = ( {children} ) =>{
    return(
        <div className="panel-footer">
            {children}
        </div>
    )
}

function Appi(){

    return(

        <ErrorBox>
            Something is wrong
        </ErrorBox>

    );
}

function Appidos(){
    return(

        <Nav>
            <NavItem url='/'>Home</NavItem>

            <NavItem url='/about'>About</NavItem>

            <NavItem url='/contact'>Contact</NavItem>
        </Nav>

    )
}

function Appitres(){
    return(
        <Dialog>
            <Title>Hola tarola</Title>
            <Body>How are you today kiddos?</Body>
            <Footer>Whatever</Footer>
        </Dialog>
    )
}

ReactDOM.render(<Appi />, document.querySelector('#root'));
ReactDOM.render(<Appidos />, document.querySelector('#subroot'));
ReactDOM.render(<Appitres />, document.querySelector('#subsubroot'));