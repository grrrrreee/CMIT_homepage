import React, {Component} from "react";
import './style.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';

import Header from './Header';
import Footer from './Footer';

import logo from './logo.png';

const menuList = {
	0: <First/>,
	1: <Second/>,
	2: <Third/>,
	3: <Fourth/>,
	4: <Fifth/>,
	5: <Sixth/>,
	6: <Seventh/>
};

class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu:0,
		};
	}

	changeMenu = (menuIndex) => {
		this.setState({menu: menuIndex});	
	}

	render() {
		return(
			<div className="wrap">
				<div className="menuBar">
					<ul class="app-header">
						<a href="https://www.cau.ac.kr">
							<img class="cau" src={logo}/>
						</a>
					</ul>
					<ul className="tabs">
                        <li className={`${this.state.menu===0? 'active': ''}`} onClick={() => this.changeMenu(0)}>Home</li>
						<li className={`${this.state.menu===1? 'active': ''}`} onClick={() => this.changeMenu(1)}>Professor</li>
						<li className={`${this.state.menu===2? 'active': ''}`} onClick={() => this.changeMenu(2)}>Members</li>
						<li className={`${this.state.menu===3? 'active': ''}`} onClick={() => this.changeMenu(3)}>Publication</li>
						<li className={`${this.state.menu===4? 'active': ''}`} onClick={() => this.changeMenu(4)}>Teaching</li>
						<li className={`${this.state.menu===5? 'active': ''}`} onClick={() => this.changeMenu(5)}>Project</li>
					</ul>
				</div>
				<div className="contentArea">
					{menuList[this.state.menu]}
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;
