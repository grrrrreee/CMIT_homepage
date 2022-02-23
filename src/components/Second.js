import React, {Component} from "react";
import '../style.css';
import Collapisble from 'react-collapsible';

import ppic from './pro_pic.JPG';

class Second extends React.Component {
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

	togglePanel2(e) {
		this.setState({open2 : !this.state.open2})
	}

	togglePanel3(e) {
		this.setState({open3 : !this.state.open3})
	}

        render(){
                return(
			<div className="secondParent">
				<div>
					<img className="ppic" src={ppic}/>
					<h3>Prof. Kim, Kyoung-Ju</h3>
				</div>
				<div className="p_career"> 
					<div onClick={(e)=>this.togglePanel(e)} className='header'>
                                	        {this.props.title}
                                       		 학계
                                	</div>
                                	{this.state.open? (
                                        	<div className='content'>
                                        	<li>중앙대학교 건설대학원 원장 2015.01 ~ 2018.01</li>
                                        	<li>중앙대학교 건설대학원 건설사업관리학과 학과장, 2009.09 ~ 현재</li>
						<li>중앙대학교 사회기반시스템공학부 학부장, 2011.01 ~ 2011.12</li>
						<li>중앙대학교 건설환경공학과 학과장, 2009.09 ~ 2010.12</li>
						<li>중앙대학교 건설환경공학과 정교수, 2011.01 ~ 현재</li>
						<li>중앙대학교 건설환경공학과 부교수, 2005.03 ~ 2011.02</li>
						<li>중앙대학교 건설환경공학과 조교수, 2002.03 ~ 2005.02</li>
						<li>한국건설기술연구원, 건설관리연구부, 수석연구원, 1997.01 ~ 2002.02</li>
						<li>한국조달연구원, 이사, 2019.01 ~ 2019.12</li>
                                                	{this.props.children}
                                        	</div>
                               		 ) : null}
                                         <div onClick={(e)=>this.togglePanel2(e)} className='header'>
                                                {this.props.title}
                                                 사회활동
                                        </div>
                                        {this.state.open2? (
                                                <div className='content'>
						<li>한국건설관리학회 회장 2021.11-</li>
                                                <li>한국구매조달학회 회장 2019.01-2019.12</li>
                                                <li>한국구매조달학회 수석부회장 2018.01-2018.12</li>
						<li>한국구매조달학회 부회장 2017.01-2017.12</li>
						<li>한국건설관리학회 부회장 2014.11 – 2016.11</li>
						<li>국토일보, 건설문화대상 심사위원장 2015.12 – 현재</li>
						<li>기획재정부 재정사업평가위원회 분과위원회 위원 19.07-20.07)</li>
						<li>국토해양부 중앙건설기술심의위원회 (4기, 5기, 9기) 설계심의분과 위원 2014.02-2016.02, 2019.06~2019.12</li>
						<li>국토해양부 중앙건설기술심의위원회 위원(11, 12, 14기) 2010.01-2018.12</li>
						<li>대한상사중재원 중재인 2016.06.01-2019.05.31</li>
						<li>대한중재인협회 건설중재포럼 운영위원 2012.02- 현재</li>
						<li>조달청 건설기술제안서 및 기술자평가서 평가위원 2015.10.01.~2016.09.31</li>
						<li>조달청 종합심사낙찰제 평가위원 2016.04- 현재</li>
						<li>서울시 제14기 건설기술심의위원회 위원 2016.03-2018.12</li>
						<li>행정자치부 “한국전쟁 전후 민간인 희생자 위령시설 조성”사업 자문위원, 2016.4.18.~2018.4.17</li>
						<li>한국산업안전보건공단 공공기관 안전활동 수준평가 평가위원 2019.12.11.-2021.04.30.)</li>
						<li>한국도로공사, 제6기 설계심의분과 위원 2018.2.28~2019.2.27</li>
						<li>한국전력공사, 전력토목분야 기술자문 및 심의위원회 위원 2014.07.01~2018.06.30</li>
						<li>철도시설공단 기술자문위원 2016.04.20~2018.04.19</li>
						<li>국방부 특별건설기술심의위원회 위원 2012.04-2013.03</li>
						<li>국방부 미군기지이전사업단 자문위원 2013.04-현재</li>
						<li>동반성장위원회 건설업종 실무위원회 위원 2012.07-현재</li>
						<li>한국자산관리공사 국유지개발 설계자문위원 2013.02--현재</li>
						<li>행정중심복합도시건설청, 설계자문위원회 위원 2010.12.01-2012.11.30</li>
						<li>해양수산부, 설계자문위원 2003-2007, 제4기 기술자문위원회 위원(19.12-21.11)</li>
						<li>과학기술부, 국가연구개발사업 평가위원회 위원, 2006</li>
						<li>서울시 건설기술심의위원 2006.03-2008.02, 2012.03-2015.12</li>
						<li>한국환경관리공단 설계자문위원 2009.05-2018.4.30</li>
						<li>서울지방국토관리청 설계자문위원 2012.03-현재</li>
						<li>대전지방국토관리청 설계자문위원 2016.03-2017.02</li>
						<li>원주지방국토관리청 설계자문위원 2010.01-2011.12</li>
						<li>한국도로공사 설계자문위원 2010.01-2011.12</li>
						<li>한국수자원공사 설계자문위원 2007.02-2008.12</li>
						<li>한국철도시설공단 설계자문위원 2008.04-2010.03</li>
						<li>전문건설공제조합, 입찰심의자문단 자문위원, 2010.3.1-2012.2.28</li>
						<li>농촌진흥청 지방이전사업 자문위원, 2010.11.12-현재</li>
						<li>한국건설관리학회, 이사, 발간사업위원장, 2004.11-2006.11</li>
						<li>한국건설관리학회, 이사, 기획운영위원장, 2006.11-2008.11</li>
						<li>한국건설관리학회, 이사, 교육위원장, 2012.01-2013.11</li>
						<li>한국건설관리학회, 감사, 2008.11-2010.11</li>
						<li>한국CM협회, 실적심의위원, 2003.11-현재</li>
						<li>한국CM협회, 건설사업관리사자격관리·운영위원, 2003.11-2017.8.17</li>
						<li>대한토목학회 논문편집위원회 위원, 2006.03-2008.02 2010.03-2011.02</li>
						<li>대한토목학회 시방서 및 기준위원, 2005</li>
						<li>대한토목학회 시공관리분과위원회 위원장, 2017.01 ~2017.12</li>
						<li>대한철도학회 편집이사, 2011.01-2012.12</li>
						<li>한국철도공학협회 이사, 학술위원장, 2010.11-현재</li>
						<li>한국BIM학회 이사, 학술위원장, 2010.11-2012.11</li>
						<li>Journal of Civil Engineering, KSCE, Associate Editor, 2012.03-현재</li>
						<li>21st International Symposium on Automation and Robotics in Construction, International Program Committee, 2004</li>
						<li>1st International Conference on Construction Engineering and Management (1st ICCEM), Seoul 2005, 국제학술대회 좌장</li>
						<li>2nd International Conference on Construction Engineering and Management, (2nd ICCEM), Singapore 2007, Organizing Committee</li>
						<li>6th International Symposium on Environmental Geotechnology and Global Sustainable Development (2002), Organizing Committee</li>
						<li>Journal of Computing in Civil Engineering Reviewer, 2009-현재</li>
						<li>Internal Journal of Information Technology Project Management, Reviewer, 2008-현재</li>
						<li>Journal of Engineering Management, Reviewer, 2006-현재</li>
						<li>Journal of Construction Engineering and Management, Reviewer, 2006-현재</li>
						<li>Automation in Construction, Reviewer, 2007-현재</li>
                                                	{this.props.children}
                                        	</div>
                                         ) : null}
					<div onClick={(e)=>this.togglePanel3(e)} className='header'>
						{this.props.title}
						저서 및 특허
					</div>
					{this.state.open3? (
						<div className='content'>
						<li>건설관리의 개념과 실제. McGRAW-HILL Korea, 2000</li>
						<li>토목공학개론. 구미서관, 2005</li>
						<li>건설시공학. 구미서관, 2006</li>
						<li>표준품셈의 이론과 실제, 2007</li>
						<li>멀티에이전트 기반의 건설장비 투입량 결정 지원 시스템 및 방법, 2012.06</li>
						<li>유전자 알고리즘에 기반한 공사비 선정 장치 및 방법, 2011.12</li>
						<li>건축물 유지관리 시스템, 2017.01.05</li>
						<li>토목 시설물의 사업기획단계 환경 부하량 산정장치 및 방법, 2017.05.04</li>
							{this.props.children}
						</div>
					) : null}
			</div>
		</div>
		)			
	}
}

export default Second;
