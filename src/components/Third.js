import React, {Component} from "react";
import '../style.css';

import KEW from './Members/KEW.jpg'
import WAM from './Members/WAM.jpg'
import KJI from './Members/KJI.jpg'
import PMS from './Members/PMS.png'
import PMS_2 from './Members/PMS_2.jpg'

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
							<div id="p_mother">
								<div className="p_box">
									<img className="img3" src={KEW}></img>
									<div className="p_box_info">
										<li>이름 : 김의왕</li>
										<li>박사 수료</li>
										<li>관심주제 : 건설 클레임 및 분쟁, 블록체인</li>
									</div>
								</div>
								<div className="p_box">
									<img className="img3" src={PMS_2}></img>
									<div className="p_box_info">
									<li>이름 : 박민서</li>
									<li>석사(2021-1학기 입학)</li>
									<li>관심주제 : Project Financing, 인프라 금융, 자산 토큰화, 블록체인</li>
									</div>
								</div>
								<div className="p_box">
									<img className="img3" src={KJI}></img>
									<div className="p_box_info">
									<li>이름 : 김종인</li>
									<li>석사(2021-1학기 입학)</li>
									<li>관심주제 : 건설 입찰, 건설 클레임 및 분쟁, 텍스트 마이닝</li>
									</div>
								</div>
							</div>
							<div id="p_mother">
								<div className="p_box">
									<img className="img3" src={WAM}></img>
									<div className="p_box_info">
									<li>이름 : 위아맹</li>
									<li>석사(2021-2학기 입학)</li>
									<li>관심주제 : 공사지연분석, 건설 클레임 및 분쟁</li>
									</div>
								</div>
							</div>
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
				
				</div>
                )
        }
}

export default Third;
