import React, {Component} from "react";
import '../style.css';

import pic from './1.jpg';

class First extends React.Component {
	constructor(props) {
		super();

		this.state= {
			menu:0,
		};
	}

	render(){
		return(
			<div className="theparent">
				<div className="pic">
					<h1>Welcome to Chung-Ang University</h1>
					<h1>CMIT LAB</h1>

					<div className="lab_ex">
						<br/>
						<span className="CMIT">CMIT</span> stands for <span className="CMIT">C</span>onstruction <span className="CMIT">M</span>anagement <span className="CMIT">I</span>nformation <span className="CMIT">T</span>echnology.<br/>
						<br/>
						Construction Management is a field that systematically manages the entire project life cycle in order to successfully carry out the construction project.<br/>
						<br/>
						<span className="CMIT">CMIT LAB</span> aims for the convergence and development of <span className="CMIT">C</span>onstruction <span className="CMIT">M</span>anagement and <span className="CMIT">I</span>nformation <span className="CMIT">T</span>echnology.<br/><br/>
						In the era of the 4th Industrial Revolution, <span className="CMIT">CMIT LAB</span> is conduction various studies such as cost, construction process, construction policy and asset management <br/>to effectively manage the construction business by applying various industries and management technologies.
					</div>
				</div>
			</div>
		)
	}
}

export default First;
