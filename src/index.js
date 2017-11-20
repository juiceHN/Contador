import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';

function reducer(state = 0, action){
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		default:
			return state;
	}
}

function main(){
	window.removeEventListener('load', main, false);

	const store = createStore(reducer);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
	 document.getElementById('root'));
	registerServiceWorker();
}

window.addEventListener('load',main,false);
