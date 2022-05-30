import React, {Component} from "react";
import '../style.css';

class Third extends React.Component {
        constructor(props) {
                super();

                this.state= {
					menu:0,
					open : true,
					open2 : true,
				};

				this.togglePanel = this.togglePanel.bind(this);
				this.togglePanel2 = this.togglePanel2.bind(this);
        }

		togglePanel(e) {
			this.setState({open : !this.state.open})
		}

		togglePanel2(e) {
			this.setState({open2 : !this.state.open2})
		}

        render(){
                return(
	            <div>
				<div onClick={(e)=>this.togglePanel(e)} className='header'>
                        {this.props.title}
                        Current Members
                    </div>
                    {this.state.open ? (
                        <div className='content'>
                                {this.props.children}
                        </div>
                    ) : null}
				<div onClick={(e)=>this.togglePanel2(e)} className='header'>
                        {this.props.title}
                        Alumni
                    </div>
                    {this.state.open2 ? (
                        <div className='content'>
                                {this.props.children}
                        </div>
                    ) : null}
				{/*<div id="p_mother">
                               		 <div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
					<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
				</div>
				<div id="p_mother">
                               		 <div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
                                	<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
				</div>
				<div id="p_mother">
                               		 <div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
                                	<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
				</div>
				<div id="p_mother">
					<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
                                	<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
				</div>
				<div id="p_mother">
                               		 <div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
                                	<div className="p_box">
						<div className="p_box_profile">
						</div>
						<div className="p_box_info">
							name
						</div>
					</div>
				</div>*/}
				</div>
                )
        }
}

export default Third;
