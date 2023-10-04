import React from 'react';
import './Header.css';

import logo from './logo.png';

class Header extends React.Component {
	render() {
		return(
			<div className="app-header">
				<a href="https://www.cau.ac.kr"><img className="cau"  src={logo} /></a>
			</div>
		)
	}
}

export default Header;
