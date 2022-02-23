import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

class Fifth extends React.Component {
        constructor(props) {
                super();

                this.state= {
                        menu:0,
			open : false,
			open2 : false,
			open3 : false
                };
		this.togglePanel = this.togglePanel.bind(this);
		this.togglePanel2 = this.togglePanel2.bind(this);
		this.togglePanel3 = this.togglePanel3.bind(this);
        }
	
	togglePanel(e) {
		this.setState({open : !this.state.open})
	}
	
	togglePanel2(e){
		this.setState({open2 : !this.state.open2})
	}

	togglePanel3(e){
		this.setState({open3 : !this.state.open3})
	}
	
	togglePanel4(e){
		this.setState({open4 : !this.state.open4})
	}
	
	componentDidUpdate() {

	}

        render(){
                return(
               		<div className="theparent">
				<div onClick={(e)=>this.togglePanel(e)} className='header'>
                                        {this.props.title}
                                        2022
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
					2021
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
				 <div onClick={(e)=>this.togglePanel3(e)} className='header'>
                                        {this.props.title}
                                        2020
                                </div>      
                                 {this.state.open3 ? (
                                        <div className='content'>
					<li>1st Semester, Undergraduate 건설계획및시공(Construction Planning, Equipment and Methods)</li>
					<li>1st Semester, Graduate School 전공연구 1(Studies in Major Field 1)</li>
					<li>2nd Semester, Undergraduate 건설사업관리학(Construction Project Management)</li>
                                        <li>2nd Semester, Graduate School 공사계약및분쟁관리(Construction Contracting and Claim Management)</li>
					<li>2nd Semester, Graduate School 전공연구 1(Studies in Major Field 1)</li>
                                                {this.props.children}
                                        </div>
                                 ) : null}
				<div onClick={(e)=>this.togglePanel4(e)} className='header'>
                                        {this.props.title}
                                        2019
                                </div>
                                 {this.state.open4 ? (
                                        <div className='content'>
                                        <li>1st Semester, Undergraduate 건설계획및시공(Construction Planning, Equipment and Methods)</li>
					<li>2nd Semester, Undergraduate 건설사업관리학(Construction Project Management)</li>
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


