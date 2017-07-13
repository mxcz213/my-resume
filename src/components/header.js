import React from 'react';
import logo from '../images/avart.jpg';

export default class Header extends React.Component {
	render(){
		return (
			<div className="App-header App">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="author">Auther：chenjuanhe</h1>
	          <h2 className="title">Welcome to My Space</h2>
	        </div>
		)
	}
}