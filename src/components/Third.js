import React, {Component} from "react";
import '../style.css';
import { Link } from 'react-router';

import KEW from './Members/KEW.jpg'
import WAM from './Members/WAM.jpg'
import KJI from './Members/KJI.jpg'
import PMS from './Members/PMS.png'
import PMS_2 from './Members/PMS_2.jpg'
import JNH from './Members/JNH.jpg'
import BSM from './Members/BSM.png'
import BSW from './Members/BSW.png'
import KKM from './Members/KKM.jpg'
import KSH from './Members/KSH.png'
import SYJ from './Members/SYJ.jpg'
import KTS from './Members/KTS.jpg'
import IKS from './Members/IKS.bmp'
import KYH from './Members/KYH.png'
import KSK from './Members/KSK.png'
import AMS from './Members/AMS.png'
import PHJ from './Members/PHJ.jpg'
import PYH from './Members/PYH.jpg'
import LJH from './Members/LJH.jpg'
import YWK from './Members/YWK.jpg'
import LHR from './Members/LHR.jpg'
import YJS from './Members/YJS.jpg'
import LYS from './Members/LYS.png'
import YKH from './Members/YKH.png'
import HSH from './Members/HSH.png'
import PKK from './Members/PKK.jpg'
import SDC from './Members/SDC.jpg'
import RSH from './Members/RSH.jpg'
import HBH from './Members/HBH.jpg'
import KIK from './Members/KIK.jpg'
import LJH2 from './Members/LJH2.png'
import PSH from './Members/PSH.png'
import KS from './Members/KS.jpg'
import KKY from './Members/KKY.png'
import JWJ from './Members/JWJ.png'
import SHB from './Members/SHB.png'
import HHJ from './Members/HHJ.png'
import IWS from './Members/IWS.png'
import PCJ from './Members/PCJ.png'
import PYC from './Members/PYC.png'
import KCS from './Members/KCS.png'
import LKH from './Members/LKH.jpg'
import NSW from './Members/NSW.png'
import LSK from './Members/LSK.png'
import PJY from './Members/PJY.jpg'
import HJK from './Members/HJK.jpg'
import HATHO from './Members/HATHO.jpg'
import NJW from './Members/NJW.jpg'
import HHR from './Members/HHR.jpg'
import WWR from './Members/WWR.jpg'
import SHW from './Members/SHW.jpg'
import KBJ from './Members/KBJ.png'
import LWJ from './Members/LWJ.jpg'
import KWONSH from './Members/KWONSH.jpg'
import KIMDS from './Members/KIMDS.png'

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
									<li>박사 수료 (2021)</li>
									<li>관심주제 : 건설 클레임 및 분쟁, 블록체인</li>
								</div>
							</div>
							{/* // 1.2.2 단일 학생 정보 끝 */}
							<div className="p_box">
								<img className="img3" src={SYJ}></img>
								<div className="p_box_info">
								<li>이름 : 신연주</li>
								<li>석사(2023-1학기 입학)</li>
								<li>관심주제 : 건설 리스크, 데이터 분석 및 처리, 공기지연, 인공지능</li>
								</div>
							</div>
							<div className="p_box">
								<img className="img3" src={KWONSH}></img>
								<div className="p_box_info">
								<li>이름 : 권세훈</li>
								<li>박사(2023-1학기 입학)</li>
								<li>삼성물산 정책지원팀</li>
								</div>
							</div>
						</div>
						
						{/* // 1.3 두번째 줄 
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
						*/}
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
							{/* // 2.1 1번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={KKM}></img>
								<div className="p_box_info2">
									<li>이름 : 김경민</li>
									<li>박사졸업(2008)</li>
									<li>졸업논문 : 교통 혼잡도를 고려한 멀티에이전트 기반 건설공정 시뮬레이션 시스템</li>
									<li>현소속 : 중앙대학교</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KSH}></img>
								<div className="p_box_info2">
									<li>이름 : 권석현</li>
									<li>박사졸업(2008)</li>
									<li>졸업논문 : 건설사업의 환경경제성 평가모델 개발</li>
									<li>현소속 : (주)디엠씨엠 대표</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KTS}></img>
								<div className="p_box_info2">
									<li>이름 : 김태송</li>
									<li>박사졸업(2008)</li>
									<li>졸업논문 : 건설공사 성능보증계약제도 도입방안 연구</li>
									<li>현소속 : 한국건설기술연구원 국가건설기준센터 연구위원</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.2 2번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={IKS}></img>
								<div className="p_box_info2">
									<li>이름 : 임광수</li>
									<li>박사졸업(2010)</li>
									<li>졸업논문 : 도로 유지보수 경제성 분석을 위한 비용산출에 관한 연구</li>
									<li>현소속 : (주) 이산, 부회장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KYH}></img>
								<div className="p_box_info2">
									<li>이름 : 권용훈</li>
									<li>박사졸업(2010)</li>
									<li>졸업논문 : 고속도로 시설물의 위험비용 발생확률 추정 및 비용산정에 관한 연구</li>
									<li>현소속 : 서울연구원 공공투자관리센터 연구위원</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KSK}></img>
								<div className="p_box_info2">
									<li>이름 : 김상귀</li>
									<li>박사졸업(2010)</li>
									<li>졸업논문 : 교량건설사업 수행단계별 가용정보에 기반한 개략공사비 산정모델</li>
									<li>현소속 : 에스지이건설산업(주) 사장</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.3 3번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={AMS}></img>
								<div className="p_box_info2">
									<li>이름 : 안만선</li>
									<li>박사졸업 (2011)</li>
									<li>졸업논문 : 작업조기반 생산성을 고려한 토목공사 품셈 개선 연구</li>
									<li>현소속 : 중앙대학교</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={PHJ}></img>
								<div className="p_box_info2">
									<li>이름 : 박하진</li>
									<li>박사졸업 (2011)</li>
									<li>졸업논문 : 하수처리시설 운영형태 비교와 비용분석을 통한 민간투자사업의 자산관리 적용성 연구</li>
									<li>현소속 : (주)포스코건설 인프라사업본부 친환경영업그룹장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={BSM}></img>
								<div className="p_box_info2">
									<li>이름 : 박찬혁</li>
									<li>박사졸업 (2011)</li>
									<li>졸업논문 : 다중양중장비 및 자재 야적위치의 최적결정을 위한 시스템개발</li>
									<li>현소속 : -</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.4 4번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={PYH}></img>
								<div className="p_box_info2">
									<li>이름 : 박양호</li>
									<li>박사졸업 (2013)</li>
									<li>졸업논문 : 정부발주공사의 물가변동으로 인한 계약금액 조정률 통합 산정모델 개발: 원가구성분석을 통한 개량 지수조정 방식</li>
									<li>현소속 : (사)건설원가연구원 원장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={LJH}></img>
								<div className="p_box_info2">
									<li>이름 : 이주현</li>
									<li>박사졸업 (2017)</li>
									<li>졸업논문 : 건설사업 초기단계의 설계정보 수준에 따른 환경부하 추정모델 개발 – NATM 터널을 중심으로</li>
									<li>현소속 : 한국건설기술연구원</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={YWK}></img>
								<div className="p_box_info2">
									<li>이름 : 윤원건</li>
									<li>박사졸업 (2018), 석사졸업 (2004)</li>
									<li>졸업논문 : 하이브리드 러닝 기반의 건설시공교육 적용성 연구</li>
									<li>현소속 : 한국건설기술연구원 건설정책연구소 수석연구원</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.5 5번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={LHR}></img>
								<div className="p_box_info2">
									<li>이름 : 이한록</li>
									<li>박사졸업 (2019)</li>
									<li>졸업논문 : 시뮬레이션 기반 턴키공사 입찰 게임모델 개발에 관한 연구</li>
									<li>현소속 : (주)열린이앤씨 대표이사</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={YJS}></img>
								<div className="p_box_info2">
									<li>이름 : 유준상</li>
									<li>박사졸업 (2019)</li>
									<li>졸업논문 : PSC Beam 교량 환경부하 종합평가 지원시스템 개발에 관한 연구</li>
									<li>현소속 : 국토교통과학기술진흥원</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={LYS}></img>
								<div className="p_box_info2">
									<li>이름 : 이영수</li>
									<li>박사수료</li>
									<li>졸업논문 : -</li>
									<li>현소속 : -</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.6 6번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={YKH}></img>
								<div className="p_box_info2">
									<li>이름 : 양기환</li>
									<li>박사수료 (2007)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 한국종합기술(주) HSE관리실 상무</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={HSH}></img>
								<div className="p_box_info2">
									<li>이름 : 하승호</li>
									<li>박사수료 (2007), 석사졸업 (2005)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 칸서스자산운용 주식회사 인프라운용본부 인프라운용2팀 이사/팀장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={PKK}></img>
								<div className="p_box_info2">
									<li>이름 : 박기경</li>
									<li>박사수료 (2017)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 전문건설공제조합</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.7 7번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={SDC}></img>
								<div className="p_box_info2">
									<li>이름 : 신동철</li>
									<li>박사수료 (2017)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={RSH}></img>
								<div className="p_box_info2">
									<li>이름 : 류상훈</li>
									<li>박사수료 (2021)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 한국건설기술연구원 국가건설기준센터</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={HBH}></img>
								<div className="p_box_info2">
									<li>이름 : 한봉희</li>
									<li>박사수료 (2022)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : (사)한국건설관리연구원 부원장</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.8 8번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={KIMDS}></img>
								<div className="p_box_info2">
									<li>이름 : 김덕수</li>
									<li>박사수료 (2022)</li>
									<li>관심주제 : 사업 기획, 시공, 원가, 건설 클레임, 수도권 트램, 철도,지하철</li>
									<li>현소속 : 정주건설(주) 대표이사</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KIK}></img>
								<div className="p_box_info2">
									<li>이름 : 김인겸</li>
									<li>박사수료 (2022), 석사졸업 (2016)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 한국철도기술연구원</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.9 9번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={LJH2}></img>
								<div className="p_box_info2">
									<li>이름 : 이정훈</li>
									<li>석사졸업 (2004)</li>
									<li>졸업논문 : 강교 가조립 시뮬레이션 시스템 도입의 타당성 연구</li>
									<li>현소속 : 고려대학교 교직원</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={PSH}></img>
								<div className="p_box_info2">
									<li>이름 : 박수현</li>
									<li>석사졸업 (2005)</li>
									<li>졸업논문 : 기술수준 평가를 위한 산업설비 핵심 업무도출 및 성과지표 개발 연구</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KS}></img>
								<div className="p_box_info2">
									<li>이름 : 김석</li>
									<li>석사졸업 (2006)</li>
									<li>졸업논문 : PDA를 이용한 강교량 박스거더 제작공정 통합관리시스템 개발</li>
									<li>현소속 : 국립한국교통대학교 교수</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.10 10번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={KKY}></img>
								<div className="p_box_info2">
									<li>이름 : 강기용</li>
									<li>석사졸업 (2007)</li>
									<li>졸업논문 : 조건부가치측정법을 이용한 도로사업의 간접편익 추정에 관한 연구</li>
									<li>현소속 : 주식회사 에스디피컴퍼니 대표이사, 주식회사 로티스디앤엠 사업관리팀 부장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={JWJ}></img>
								<div className="p_box_info2">
									<li>이름 : 정원지</li>
									<li>석사졸업 (2007)</li>
									<li>졸업논문 : 가치평가에 의한 상수도 관종 선정 모델 연구</li>
									<li>현소속 : DL이앤씨 부장</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={SHB}></img>
								<div className="p_box_info2">
									<li>이름 : 서형범</li>
									<li>석사졸업 (2008)</li>
									<li>졸업논문 : 통계적 데이터 기반의 리스크를 고려한 민간투자사업의 재무적 할인율 추정 모델 개발에 관한 연구</li>
									<li>현소속 : 삼성엔지니어링 플랜트사업본부 플랜트지원그룹장</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.11 11번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={HHJ}></img>
								<div className="p_box_info2">
									<li>이름 : 황호정</li>
									<li>석사졸업 (2008)</li>
									<li>졸업논문 : 시뮬레이션 모델링을 활용한 터널버력처리공정 생산성 향상에 관한 연구</li>
									<li>현소속 : 안전보건공단 디지털전략실 빅데이터부</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={IWS}></img>
								<div className="p_box_info2">
									<li>이름 : 임원석</li>
									<li>석사졸업 (2008)</li>
									<li>졸업논문 : 교량공사 개략공사비 산정모델 Framework개발(PSC Beam교를 대상으로)</li>
									<li>현소속 : 해든측량설계사무소 대표</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={PCJ}></img>
								<div className="p_box_info2">
									<li>이름 : 박찬진</li>
									<li>석사졸업 (2008)</li>
									<li>졸업논문 : 보정계수 적용 건설공사 리스크 평가방안 연구</li>
									<li>현소속 : -</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.12 12번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={PYC}></img>
								<div className="p_box_info2">
									<li>이름 : 박윤철</li>
									<li>석사졸업 (2008)</li>
									<li>졸업논문 : ISO 9000s에 기반한 건설공사 품질관리시스템 활성화 방안에 관한 연구</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KCS}></img>
								<div className="p_box_info2">
									<li>이름 : 강찬성</li>
									<li>석사졸업 (2009)</li>
									<li>졸업논문 : 대표물량기반의 PSC BEAM 교량공사 설계단계 개략공사비 산정모델 개발</li>
									<li>현소속 : 삼성물산 EPC견적팀 토목견적그룹</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={LKH}></img>
								<div className="p_box_info2">
									<li>이름 : 이건희</li>
									<li>석사졸업 (2010)</li>
									<li>졸업논문 : 기계학습 알고리즘을 이용한 개략공사비 예측모델 개발연구 : PSC Beam교를 중심으로</li>
									<li>현소속 : HJ중공업</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.13 13번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={NSW}></img>
								<div className="p_box_info2">
									<li>이름 : 남상욱</li>
									<li>석사졸업 (2011)</li>
									<li>졸업논문 : 작업 변동성(Work Flow Variability) 감소를 통한 터널 굴착공사 작업 생산성 개선 방안 연구 :NATM터널을 중심으로</li>
									<li>현소속 : (주)대지건설</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={LSK}></img>
								<div className="p_box_info2">
									<li>이름 : 이상규</li>
									<li>석사졸업 (2011)</li>
									<li>졸업논문 : Multi-agent based simulation의 현장 적용성 분석에 대한 연구</li>
									<li>현소속 : -</li>
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
						<div id="p_mother">
							{/* // 2.14 14번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={PJY}></img>
								<div className="p_box_info2">
									<li>이름 : 박지연</li>
									<li>석사졸업 (2012)</li>
									<li>졸업논문 : 지능형 굴삭 시스템의 성능평가 </li>
									<li>현소속 : 제주특별자치도 개발공사 개발사업본부 개발기획팀 대리</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={BSM}></img>
								<div className="p_box_info2">
									<li>이름 : 이완렬</li>
									<li>석사졸업 (2016)</li>
									<li>졸업논문 : PSC beam 교량 기본설계단계 환경부하량 예측 모델 개발 연구</li>
									<li>현소속 : (주)디엠씨엠</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={HJK}></img>
								<div className="p_box_info2">
									<li>이름 : 하지광</li>
									<li>석사졸업 (2017)</li>
									<li>졸업논문 : PSC beam 교량의 설계 초기단계 환경부하량 추정모델 개발</li>
									<li>현소속 : 아세아도 주식회사</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.15 15번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={HATHO}></img>
								<div className="p_box_info2">
									<li>이름 : Nguyen, Thi Ha Tho</li>
									<li>석사졸업 (2019)</li>
									<li>졸업논문 : Estimating design duration of building projects employing Case-Based Reasoning and Genetic Algorithm</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={NJW}></img>
								<div className="p_box_info2">
									<li>이름 : 남재우</li>
									<li>석사졸업 (2020)</li>
									<li>졸업논문 : 포스트텐셔닝 외부텐던의 공동감지를 위한 음향방출기법의 적용성 분석</li>
									<li>현소속 : 한국도로공사 김포양주건설사업단</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={HHR}></img>
								<div className="p_box_info2">
									<li>이름 : 홍해리</li>
									<li>석사졸업 (2020)</li>
									<li>졸업논문 : PSC Beam 교량의 유지관리단계 환경부하량 산정 방안에 관한 연구</li>
									<li>현소속 : -</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.16 16번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={WWR}></img>
								<div className="p_box_info2">
									<li>이름 : 왕윈룽</li>
									<li>석사졸업 (2021)</li>
									<li>졸업논문 : 도시철도 유지보수를 위한 철도 정비소의 최적위치 결정 모델 적용성 검토 연구</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={SHW}></img>
								<div className="p_box_info2">
									<li>이름 : 손효우</li>
									<li>석사졸업 (2022)</li>
									<li>졸업논문 : AHP기법을 활용한 조립식 건축의 공기지연 핵심 영향요인 분석 연구</li>
									<li>현소속 : CHINA ORIENT ASSET MANAGEMENT CO., LTD</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={PMS_2}></img>
								<div className="p_box_info2">
									<li>이름 : 박민서</li>
									<li>석사졸업(2023)</li>
									<li>졸업논문 : A study about developing new method for infrastructure financing by blockchain based asset tokenization</li>
									<li>현소속 : University of Michigan 박사과정</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.17 17번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={WAM}></img>
								<div className="p_box_info2">
									<li>이름 : 위아맹</li>
									<li>석사졸업(2023)</li>
									<li>졸업논문 : 한국과 중국의 공공/민간사업 공기지연 원인 비교분석 연구</li>
									<li>현소속 : 중앙대학교 건설경영정보연구실</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={KJI}></img>
								<div className="p_box_info2">
									<li>이름 : 김종인</li>
									<li>석사졸업(2023)</li>
									<li>졸업논문 : 국내 공기지연에 따른 지체상금 배분의 문제점 및 개선방안</li>
									<li>현소속 : 건우산업개발 주임</li>
								</div>
							</div>
						</div>
						<div id="p_mother">
							{/* // 2.17 17번째 줄 */}
							<div className="p_box2">
								<img className="img3" src={KBJ}></img>
								<div className="p_box_info2">
									<li>이름 : 김반지</li>
									<li>석사수료</li>
									<li>졸업논문 : -</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={BSW}></img>
								<div className="p_box_info2">
									<li>이름 : 조현정</li>
									<li>석사수료</li>
									<li>졸업논문 : -</li>
									<li>현소속 : -</li>
								</div>
							</div>
							<div className="p_box2">
								<img className="img3" src={LWJ}></img>
								<div className="p_box_info2">
									<li>이름 : 이의준</li>
									<li>석사수료 (2014)</li>
									<li>졸업논문 : -</li>
									<li>현소속 : 나무피엠앤씨 차장</li>
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
