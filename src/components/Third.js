import React, {Component} from "react";
import '../style.css';
import { Link } from 'react-router';

import KEW from './Members/KEW.jpg'
import WAM from './Members/WAM.jpg'
import KJI from './Members/KJI.jpg'
import PMS from './Members/PMS.png'
import PMS_2 from './Members/PMS_2.jpg'
import JNH from './Members/JNH.jpg'
import USER from './Members/user.png'
// 이미지 예시 : import JMH from './Members/JMH.jpg'

// 9.20(수) 저녁 6시
// - part1 - 10.23 ~ 11.03 (10일 정도)
// - part3 - 12.19 ~ 24.1.31
// - part4 - 24.2.1 ~ 24.27(오전 수업 / 멘토링)

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
				{/* 1. 재학생 시작*/}
				<div onClick={(e)=>this.togglePanel(e)} className='header'>
                        {this.props.title}
                        Current Members
				</div>
				{/* 1.1 재학생 실질 정보는 여기 밑에*/}
				{this.state.open ? (
					<div className='content'>
						{this.props.children}
						{/* 1.2 첫번째 줄*/}
						<div id="p_mother">
							{/* 1.2.1 단일 학생 정보 시작*/}
							{/* 1.2.1과 1.2.2 사이의 정보를 그대로 복붙*/}
							<div className="p_box">
								{/* // 1.2.1.1 이미지 */}
								{/*
								- 구조
								|____p_box
										|_____img3 (이미지)
										|_____p_box_info
												|________이름, 상태, 주제
								- img에서 className은 안 건드리기
								- src={여기 안은 파일 이름, '이미지 예시' 검색어 참고하기, 예를 들어 조남호 선배는 JNH} -> 맨 위에 import가 되어있는지 확인
								*/}
								<img className="img3" src={KEW}></img>
								<div className="p_box_info">
									<li>이름 : 김의왕</li>
									<li>박사 수료</li>
									<li>관심주제 : 건설 클레임 및 분쟁, 블록체인</li>
								</div>
							</div>
							{/* // 1.2.2 단일 학생 정보 끝 */}
							<div className="p_box">
								<img className="img3" src={KJI}></img>
								<div className="p_box_info">
								<li>이름 : 김종인</li>
								<li>석사(2021-1학기 입학)</li>
								<li>관심주제 : 건설 입찰, 건설 클레임 및 분쟁, 텍스트 마이닝</li>
								</div>
							</div>
						</div>
						{/* // 1.3 두번째 줄 */}
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
				{/* // 2. 졸업생 시작 */}
				<div onClick={(e)=>this.togglePanel2(e)} className='header'>
                        {this.props.title}
                        Alumni
            	</div>
				{this.state.open2 ? (
					<div className='content'>
						{this.props.children}
						<div id="p_mother">
							<div className="p_box2">
								<img className="img3" src={PMS_2}></img>
								<div className="p_box_info2">
									<li>이름 : 박민서</li>
									<li>석사졸업(2023)</li>
									<li>졸업논문 : A study about developing new method for infrastructure financing by blockchain based asset tokenization</li>
									<li>현소속 : University of Michigan 박사과정</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={JNH}></img>
								<div className="p_box_info2">
									<li>이름 : 조남호</li>
									<li>석사졸업(2012)</li>
									<li>졸업논문 : A Study on Development of Level of Service (LOS) in Asset Management for Separated Sewer Pipes by Function Analysis System Technique</li>
									<li>현소속 : Design Project Manager, University of Iowa</li>
									<div className="links">
										<li><a href="https://www.linkedin.com/in/namhocho/">
											Linkedin
										</a></li>
										<li><a href="https://www.researchgate.net/profile/Namho-Cho">
											Researchgate
										</a></li>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}
			
				</div>
                )
        }
}

export default Third;
