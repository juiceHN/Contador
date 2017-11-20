import React from 'react';
import './App.css';
import {  connect } from 'react-redux';

function mapStateToProps(state){
	return {
		value: state
	}
}

function mapDispatchToProps(dispatch){
	return{
		increment:() => dispatch({type: 'INCREMENT'})
	}
}


function App ({value, increment}) {
    return (
      <div className="App">
      	<h1>Redux Counter</h1>
      	<p>click on the number</p>
      	<img className='root' src='http://i.imgur.com/5T9gOUf.gif' />

        <h2 onClick={() => increment() }>{value}</h2>

        <p>Hugo Noriega</p>
        <p>14097</p>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
