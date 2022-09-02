import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

class Fifth extends React.Component {
        constructor(props) {
                super();

                this.state= {
                        menu:0,
			open : true,
			open2 : true
                };
		this.togglePanel = this.togglePanel.bind(this);
		this.togglePanel2 = this.togglePanel2.bind(this);
        }
	
	togglePanel(e) {
		this.setState({open : !this.state.open})
	}
	
	togglePanel2(e){
		this.setState({open2 : !this.state.open2})
	}
	
	componentDidUpdate() {

	}

        render(){
            return(
               	<div className="theparent">
					<div onClick={(e)=>this.togglePanel(e)} className='header'>
                        {this.props.title}
                            Graduate School
                    </div>
                    {this.state.open ? (
                        <div className='content'>
							<li>1st Semester, Undergraduate 건설계획및시공(Construction Planning, Equipment and Methods)</li>
							<li>1st Semester, Graduate School 전공연구 1(Studies in Major Field 1)</li>
							<li>1st Semester, Graduate School 전공연구 2(Studies in Major Field 2)</li>
							<li>1st Semester, Graduate School 프로젝트연구 2(Lab Activity 2)</li>
							<li>1st Semester, Graduate School 프로젝트연구 3(Lab Activity 3)</li>
								{this.props.children}
						</div>
                    ) : null}
					<div onClick={(e)=>this.togglePanel2(e)} className='header'>
            			{this.props.title}
						Undergraduate
					</div>
       				{this.state.open2 ? (
						<div className='content'>
								<li>1st Semester, Undergraduate 건설계획및시공(Construction Planning, Equipment and Methods)</li>
								<li>1st Semester, Graduate School 고급공정계획(Advanced Project Planning)</li>
								<li>1st Semester, Graduate School 전공연구 2(Studies in Major Field 2)</li>
								<li>1st Semester, Graduate School 프로젝트연구2(Lab Activity 2)</li>
								<li>2nd Semester, Undergraduate 건설사업관리학(Construction Project Management)</li>
								<li>2nd Semester, Graduate School 프로젝트연구 2(Lab Activity 2)</li>
								<li>2nd Semester, Graduate School 프로젝트연구 3(Lab Activity 3)</li>
							{this.props.children}
						</div>
           			 ) : null}   
			</div>	
			)
        }
}

export default Fifth;

// https://plnkr.co/edit/rkpe3f?p=preview&preview
// https://medium.com/@subalerts/implememting-a-simple-collapsible-component-in-react-js-67c796e64652


