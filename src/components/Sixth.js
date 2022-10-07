import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

import img_6_1 from './img/6_1.png'
import img_6_2 from './img/6_2.jpg'
import img_6_3 from './img/6_3.png'
import img_6_4 from './img/6_4.jpg'
import img_6_6 from './img/6_6.jpg'
import img_6_7 from './img/6_7.jpg'
import img_6_8 from './img/6_8.jpg'
import img_6_9 from './img/6_9.jpg'
import img_6_10_1 from './img/6_10_1.jpg'
import img_6_10_2 from './img/6_10_2.jpg'
import img_6_12 from './img/6_12.gif'
import img_6_13 from './img/6_13.gif'
import img_6_14 from './img/6_14.gif'
import img_6_15 from './img/6_15.gif'
import img_6_16 from './img/6_16.gif'
import img_6_17 from './img/6_17.gif'

class Sixth extends React.Component {
        constructor(props) {
            super();

            this.state= {
                menu:0,
                open : true,
                open2 : true,
                open3 : true,
                open4 : true,
                open5 : true,
                open6 : true,
                open7 : true,
                open8 : true,
                open9 : true,
                open10 : true,
                open11 : true,
                open12 : true,
                open13 : true,
                open14 : true,
                open15 : true,
                open16 : true,
                open17 : true,
                open18 : true
            };
            this.togglePanel = this.togglePanel.bind(this);
            this.togglePanel2 = this.togglePanel2.bind(this);
            this.togglePanel3 = this.togglePanel3.bind(this);
            this.togglePanel4 = this.togglePanel4.bind(this);
            this.togglePanel5 = this.togglePanel5.bind(this);
            this.togglePanel6 = this.togglePanel6.bind(this);
            this.togglePanel7 = this.togglePanel7.bind(this);
            this.togglePanel8 = this.togglePanel8.bind(this);
            this.togglePanel9 = this.togglePanel9.bind(this);
            this.togglePanel10 = this.togglePanel10.bind(this);
            this.togglePanel11 = this.togglePanel11.bind(this);
            this.togglePanel12 = this.togglePanel12.bind(this);
            this.togglePanel13 = this.togglePanel13.bind(this);
            this.togglePanel14 = this.togglePanel14.bind(this);
            this.togglePanel15 = this.togglePanel15.bind(this);
            this.togglePanel16 = this.togglePanel16.bind(this);
            this.togglePanel17 = this.togglePanel17.bind(this);
            this.togglePanel18 = this.togglePanel18.bind(this);
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

        togglePanel5(e){
            this.setState({open5 : !this.state.open5})
        }

        togglePanel6(e){
            this.setState({open6 : !this.state.open6})
        }

        togglePanel7(e){
            this.setState({open7 : !this.state.open7})
        }

        togglePanel8(e){
            this.setState({open8 : !this.state.open8})
        }

        togglePanel9(e){
            this.setState({open9 : !this.state.open9})
        }

        togglePanel10(e){
            this.setState({open10 : !this.state.open10})
        }

        togglePanel11(e){
            this.setState({open11 : !this.state.open11})
        }

        togglePanel12(e){
            this.setState({open12 : !this.state.open12})
        }

        togglePanel13(e){
            this.setState({open13 : !this.state.open13})
        }

        togglePanel14(e){
            this.setState({open14 : !this.state.open14})
        }

        togglePanel15(e){
            this.setState({open15 : !this.state.open15})
        }

        togglePanel16(e){
            this.setState({open16 : !this.state.open16})
        }

        togglePanel17(e){
            this.setState({open17 : !this.state.open17})
        }

        togglePanel18(e){
            this.setState({open18 : !this.state.open18})
        }

        render(){
            return(
               	<div className="parent">
                    <div onClick={(e)=>this.togglePanel(e)} className='header'>
                        {this.props.title}
                        블록체인 기술을 이용한 해외 건설프로젝트 스마트 분쟁관리 모델구축 연구 (2019~2023)
                    </div>
                    {this.state.open ? (
                        <div className="thirdParent">
                            <div className="img">
                                <img className="img2" src={img_6_1}/>
                                {this.props.children}
                            </div>
                            <div className="researchDetail">
                                <li>연구수행기간 : 2019.03.01 ~ 2024.02.29</li>
                                <li>시행부처/기관 : 한국연구재단</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">해외 건설사업에서 발생되는 분쟁의 경우 다양한 유형의 분쟁이 지속적이며, 반복적으로 발생되고 있음. 장기간의 프로젝트 수행과정에서 수많은 정보(레터, 행정서류 및 사업관리 결과 기록 등)의 유실이 발생되며, 이러한 자료의 유실 또는 관리 부족과 분쟁에 대한 사전 대응준비 부족은 분쟁 발생시 절차적 기준준수의 증빙 미비와 분쟁대응의 비효율로 이어져 해외 건설사업에서 국내 건설사에게 대규모 손실을 가져오는 주요한 요인이 되고 있음</div>
                                <div className="researchDetail2">해외 건설사업 분쟁사례를 분석하고, 분쟁발생 시나리오 정립을 바탕으로 분쟁사례에 대한 핵심정보를 추출하여 사례 DB를 구축하고, 분쟁관리와 관련된 정보의 연관관계 분석을 바탕으로 블록 체인기반 건설분쟁 관련 정보의 자동추적 및 인증 기술 적용을 통해 해외 건설사업에서의 분쟁에 대한 예방적 대응 및 관리를 지원하는 기술을 개발함</div>
                                <li>연구추진체계 : 단독</li>
                            </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel2(e)} className='header'>
                        {this.props.title}
                        PSC 교량의 외부텐던(External tendon) 손상평가를 위한 비파괴 검사장비 및 진단기술 개발 연구 기간 (2017~2019)
                    </div>
                    {this.state.open2 ? (
                        <div className="thirdParent">
                            <div className="img">
                                <img className="img2" src={img_6_2}/>
                                {this.props.children}
                            </div>
                            <div className="researchDetail">
                                <li>연구수행기간 : 2017.06.19 ~2019.06.18</li>
                                <li>시행부처/기관 : 중소기업청</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">본 연구의 최종적인 목표는 PSC 교량의 외부텐던(External tendon)에 대한 손상 정도를 파악할 수 있는 장비를 개발하는데 있음. 이를 위해 외부텐던의 공동을 계측할 수 있는 장비와 공동부의 텐던에 대한 손상을 계측할 수 있는 장비(MFL)를 각각 제작함. 그리고 계측된 데이터의 전처리 기술을 통한 결함부재 특성분석과 결함 원인별 계측 데이터 분류, 결함판독을 위한 원인별 DB구축 등의 결함판독 기술 개발과 포스트텐션의 외부텐던 검사장비 개발을 접목함.</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 엔비코컨설턴트</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교</div>
                            </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel3(e)} className='header'>
                        {this.props.title}
                        연약지반 활주로 유지보수 방안 및 기술지원 연구용역 (2016~2018)
                    </div>
                    {this.state.open3 ? (
                        <div className="thirdParent">
                            <div className="img">
                                <img className="img2" src={img_6_3}/>
                                {this.props.children}
                            </div>
                            <div className="researchDetail">
                                <li>연구수행기간 : 2016.05.30 ~ 2018.03.31</li>
                                <li>시행부처/기관 : 한국항공우주연구원</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">본 연구용역의 목적은 기존 활주로(707.5m)의 포장 조사를 수행하고 포장상태를 평가하여 합리적인 보수공법 선정과 장래 이용계획과 연계한 보수방안을 수립하는데 있음. 신설 활주로의 설계성과에 대한 경제성과 현장 적용 타당성을 기능별, 대안별로 검토하여 설계의 경제성(설계VE)을 평가함. 또한, 신설 활주로 설계성과 검토 및 자문회의 운영지원, 신설 활주로 건설계획 검토, 시공자 선정계획 수립지원 등 설계단계 기술지원을 수행하는데 그 목적이 있음.</div>
                                <li>연구추진체계 : 단독</li>
                            </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel4(e)} className='header'>
                        {this.props.title}
                        SOC시설물의 환경부하 저감을 위한 LCA(Life Cycle Assessment)기반 의사결정 시스템 개발 (2014~2018) , 환경부하 저감형 LCA(Life Cycle Assessment) 기반 설계 및 시공기술 개발 기획(2013~2014)
                    </div>
                    {this.state.open4 ? (
                        <div className="thirdParent">
                            <div className="img">
                                <img className="img2" src={img_6_4}/>
                                {this.props.children}
                            </div>
                            <div className="researchDetail">
                        <li>연구수행기간 : 2014.10.24 ~ 2018.10.23, 2013.12.26 ~ 2014.04.25</li>
                        <li>시행부처/기관 : 한국연구재단</li>
                        <li>연구개요</li>
                        <div className="researchDetail2">2012년 18대 국회에서 「온실가스 배출권의 할당 및 거래에 관한 법률안」의 통과로 2014년까지 탄소배출권 거래제의 시범 사업 실시 후, 2015년부터 본격 시행될 계획임. 국내 온실가스 배출량 중 건설교통분야는 42.3%로 높은 비중을 차지하고 있으며, 2020년 국내 온실가스 배출전망치 대비 30% 감축목표를 설정하고 있음. 이처럼 지속가능한 개발을 전제로 한 국제적 환경규제 및 국가별 환경정책의 변화에 대응하기 위해 주요 선진국에서는 환경정책 수립시 의사결정 지원을 위한 다양한 환경평가기법이 활용되고 있으며, 오염배출의 최소화, 공정의 환경친화성 향상 등의 목적을 종합적으로 지원하도록 노력하고 있음.</div>
                        <div className="researchDetail2">SOC 시설물은 단위 시설물에 비해 주변 현황과 시설물을 고려하여 대단위로 설계, 시공되므로, 종합적으로 친환경성을 평가할 수 있는 체계적인 의사결정 방안의 개발이 필요함. 따라서 건설분야의 탄소배출과 에너지 소비를 줄이기 위하여 SOC 시설물의 특성을 고려한 건설수행 단계별 사업수행 대안에 대한 탄소저감 및 환경부하량 평가모델을 비롯하여, SOC 시설물의 특성을 고려한 기획 및 설계 단계에서 설계 및 시공 등의 대안에 대한 환경부하량 및 환경경제성을 평가하고 환경부하를 최소화할 수 있는 의사결정 도구의 마련이 시급함.</div>
                        <div className="researchDetail2">따라서 본 연구에서는 LCA를 기반으로 한 SOC 시설물의 라이프사이클 전단계의 환경부하 평가기술 개발, 환경성능지표 개발 및 LCI DB 연계방안, 친환경 설계 및 시공 인증시스템 개발에 대한 연구를 기획하고자 함.</div>
                        <li>연구추진체계</li>
                        <div className="researchDetail2">주관연구기관 - 중앙대학교</div>
                        <div className="researchDetail2">위탁연구기관 - 경북대학교, 인하대학교, 해양대학교, 도명이엔씨, 평화엔지니어링</div>
                    </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel6(e)} className='header'>
                        {this.props.title}
                        NFC기반 건축물 유지관리 시스템
                    </div>
                    {this.state.open6 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_6}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2013.11.01 ~ 2014.10.31</li>
                                <li>시행부처/기관 : 중소기업청</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">인력에만 의존했던 건축물 유지관리에서 벗어나 첨단 인식기술중 하나인 비접촉식 통신기술 NFC(Near Field Communication)를 이용하여 관리자가 스마트폰으로 건축물 각 부재의 특성 및 기존 유지관리 이력 내용 등을 쉽게 파악하고 새로운 점검 사항 및 유지관리 내용 또한 실시간 입력할 수 있는 차세대 양방향 건축물 유지관리 시스템 개발</div>
                                <li>연구추진체계 : 단독</li>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel7(e)} className='header'>
                        {this.props.title}
                        시나리오 기반 건설사업 계획 및 관리 게임도구의 개발(2013 ~ 2016)
                    </div>
                    {this.state.open7 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_7}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                        <li>연구수행기간 : 2013.06.01 ~ 2016.05.31</li>
                                <li>시행부처/기관 : 교육과학기술부</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">본 연구의 최종 목표는 1) 공정 최적화를 통해 타 산업에 비해 저조한 건설 산업의 부가가치 창출 능력을 극대화하고, 2) 해외건설 시장에서 초대형 건설공사의 수주 경쟁력 확보를 위한 원천기술을 개발하며, 3) 개발된 기술의 다각적인 활용으로 건설사업관리자의 의사결정 지원 및 관련 전공자들의 교육용 도구로서 건설공정 계획의 전문가 양성에 기여하는데 있다. 이를 위해 건설공사를 수행하기 이전에 다양한 건설사업 수행 계획에 대한 가상 시나리오를 사전에 검토하고 평가할 수 있도록 지원하는 기술을 개발함으로써 사업수행 과정에서의 공기 및 공사비를 평가하고 공기단축 및 공사비를 절감할 수 있는 사업계획 및 공기단축 기술을 개발한다.</div>
                                <div className="researchDetail2">본 연구의 목표는 다음과 같다.</div>
                                <div className="researchDetail2">
                                    <li>시나리오 기반 건설사업 계획 및 관리시스템 개발 </li>
                                    <li>건설 공정계획 시나리오 개발</li>
                                    <li>사전 작업시나리오 기반 계획기법</li>
                                    <li>건설공정 사전 시나리오 평가기술 개발</li>
                                    <li>시나리오 기반 계획 검증 및 의사결정을 위한 시뮬레이션 모델과 공정 시각화 기술과의 연계방안 연구</li>
                                </div>
                                <li>연구추진체계 : 단독</li>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel8(e)} className='header'>
                        {this.props.title}
                        건설기술용역 능력평가 기준 마련 연구(2013 ~ 2013)
                    </div>
                    {this.state.open8 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_8}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2013.04.26 ~ 2013.12.21</li>
                                <li>시행부처/기관 : 국토교통부</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">본 연구의 목표는 다음과 같다.</div>
                                <div className="researchDetail2">
                                    <li>건설기술용역(설계, 감리분야) 능력평가제도 운영현황 및 사례를 분석하여 문제점 도출</li>
                                    <li>선진외국의 건설기술 용역사업에 대한 용역능력평가 관련 제도, 평가기준, 운영사례 등을 조사·분석하여 벤치마킹 사항을 도출 - 건설기술 용역사업 용역능력평가 수행을 위한 제도개선 사항과 활용방안 등을 도출</li>
                                    <li>용역능력평가 제도 운영을 위한 평가시기, 평가절차 및 구체적인 평가기준을 마련</li>
                                    <li>건설ENG분야 종합평가 제도 도입방안 마련</li>
                                </div>
                                <li>연구추진체계 : 단독</li>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel9(e)} className='header'>
                        {this.props.title}
                        국내외 건설R&D 성과 표준화 관련 사례조사(2011 ~ 2012)
                    </div>
                    {this.state.open9 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_9}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2011.11.21 ~ 2012.11.20</li>
                                <li>시행부처/기관 : 국토해양부</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">본 연구에서는 국토해양부 등 국내 건설R&D 사업을 대상으로 표준화 사례를 심층적으로 분석하고 그에 따른 경제적·사회적인 다양한 파급효과를 분석함과 동시에 건설표준화활동을 절차화함으로써 향후 건설R&D 분야에 표준화에 대한 비중을 강화하는 제도적 기반을 제시하고자 함.</div>
                                <div className="researchDetail2">
                                    <li>건설R&D 성과의 표준화 관련 사회·경제적 파급효과 실증적 분석</li>
                                    <li>건설R&D 성과의 유형별 표준화와 시장 연계성 조사</li>
                                    <li>국내외 건설R&D를 대상으로 건설표준화 관련 사례 수집</li>
                                    <li>사회·경제적 파급효과를 중심으로 우수사례별 파급효과 심층 조사 및 분석</li>
                                </div>
                                <li>연구추진체계 : 단독</li>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel10(e)} className='header'>
                            {this.props.title}
                            하수관거 서비스수준 분석시스템 개발 및 통합자산관리모델 전략수립과 검증체계 연구(2011 ~ 2013)
                    </div>
                    {this.state.open10 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_10_1}/>
                        <img className= 'img' src={img_6_10_2}/>
                            {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel11(e)} className='header'>
                            {this.props.title}
                            저탄소도로 미래경쟁력 확충방안 연구 (2010 ~ 2011)
                    </div>      
                    {this.state.open11 ? (
                        <div className="thirdParent">
                        <div className="researchDetail">
                                <li>연구수행기간 : 2010.06.17 ~ 2011.07.14</li>
                                <li>시행부처/기관 : 한국도로공사</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">CII에 의하면 제조업 업무 프로세스의 경우 부가가치창출부분이 차지하는 비율이 62%임에 반하여 건설산업의 경우는 10%에 달하는 것으로 조사되었다. 이에 따라 건설공사 과정에 늘 존재하고 있는 낭비요인을 최소화함으로써 건설사업의 비용을 절감하고, 생산성을 향상시키며, 수요자가 얻는 가치를 극대화하는 린 건설 개념을 도로 건설사업에 도입하기 위한 기반을 구축하고, 현장적용 가능한 기술을 발굴하고자 한다.</div>
                                <div className="researchDetail2">본 연구는 2단계로 수행된다. 첫 번째 단계는 린 건설의 국내외 현황파악 및 문헌고찰의 단계이며, 국내?외 린 건설관련 연구 및 적용 사례 현황 분석과 국내?외 린 건설을 위한 주요 절차 및 도구 분석을 하였다. 두 번째 단계에서는 특정 공정에 대한 린 개념 도입 타당성 검토를 위하여 시뮬레이션 기법을 통한 작업 프로세스 개선 방안의 타당성 검토와 선정된 공종에 대한 전통적 프로세스와 새로운 프로세스에 대한 시뮬레이션 수행을 통해 개선 효과를 평가하였다.</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 한국건설기술연구원</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel12(e)} className='header'>
                                {this.props.title}
                                도로구조물(교량.터널) 공사비 산정모델 및 기준 개발
                    </div>
                    {this.state.open12 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_12}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2006.09.29 ~ 2011.07.28</li>
                                <li>시행부처/기관 : 한국건설기술연구원</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">도로구조물(교량, 터널)의 개략공사비 산정 모델을 구축하고 적정 공사비 예측 기초자료의 DB 구축과 예정가격 산정기준을 제시함으로써, 적정 공사비 산정 및 관리체계 선진화를 도모하고자하는 기반구축 사업임. 도로구조물(교량, 터널)의 개략공사비 산정모델을 구축하고자 함.</div>
                                <div className="researchDetail2">국내 공공 건설공사에 대한 적정한 예정가격을 산정하기 위하여 예산편성 기준단가를 산정하여 DB 구축과 기준 단가설정 및 정립방안을 제시하고, 현장 여건에 따라 가격 변동이 큰 공종에 대해서는 작업조 기반 생산성 정보의 프로토아입을 개발하여 예정가격 산정기준을 제시하고자. 건설공사의 적정 공사비 산정 기준과 기반을 조성하여 적정시장 가격의 반영, 개략 공사비 산정 지원 인프라 구축, 공사비 산정 기준 지속적 발전을 위한 효율적 정비하고 사업비 관리 업무의 효율화를 도모하고자 함. 그리고 공사비 산정 기준의 선진화 및 적정 공사비 산정 기반을 제공하고자 함</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 평화엔지니어링</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교, 해양대학교, 상주대학교, 도명이엔씨</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel13(e)} className='header'>
                                {this.props.title}
                                도로사업 타당성 조사 및 리스크 평가체계 구축연구
                    </div>
                    {this.state.open13 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_13}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2006.06 ~ 2006.12, 2007.03 ~ 2007.11</li>
                                <li>시행부처/기관 : 한국도로공사</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">고속도로 건설 계획 수립을 위한 타당성조사 수행 시 각종 지표 산정 방법에 대한 개선 필요성이 대두되고 있으며, 개량화가 가능한 직접적인 항목 외에도 추가적으로 고려되어야 할 요소에 대한 검토가 필요한 실정임. 따라서 향후 10년 내에 해외진출을 통한 시장창출 및 관리감독 대행자로서 해외건설업체 관리에 대비한 도로사업관리 체계 및 기술 측면의 국제경쟁력 기반을 확보하고 도로사업 타당성 조사/분석 및 리스크 평가체계를 구축하여 신규 및 해외건설 사업 참여시 기업의 재무구조를 악화시킬 수 있는 사업 선별 및 다양한 수익 구조 창출과 사업의 성공/실패를 좌우하는 리스크 대응전략 수립하는데 연구의 목적이있음</div>
                                <div className="researchDetail2">
                                    <li>해외 공공무분 신규 투자사업에 대한 타당성 평가기법 조사</li>
                                    <li>해외 리스크 관리 방안 기법조사/분석</li>
                                    <li>국제금융기관의 도로부문 신규사업 타당성 평가기법 조사</li>
                                    <li>도로 사업 경제성 분석 기법 및 절차의 체계</li>
                                    <li>직접/간접 편익 평가방법과 사례 조사를 통한 체계화</li>
                                    <li>AHP(계층화 분석기법) 분석기법을 통한 종합적 평가모델 제시</li>
                                    <li>국내/외 사례분석을 통한 신규사업 리스크 관리방안 제시</li> 
                                    <li>신규사업 Risk 관리 체크리스트 작성(안)</li>

                                </div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 내경엔지니어링</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel14(e)} className='header'>
                                {this.props.title}
                                건설생산 프로세스 혁신기술 개발(2005 ~ 2010)
                    </div>
                    {this.state.open14 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_14}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2005.11.30 ~ 2010.08.29</li>
                                <li>시행부처/기관 : 건설교통부</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">국내 건설업의 효율적인 생산공정관리를 통한 건설생산성 항상을 도모하기 위하여 국내 건설업에 적용가능한 건설생산개선 모델을 구축하고 실무자 중심의 실무 매뉴얼 및 교육 매뉴얼을 개발하며, 이를 바탕으로 한 웹기반의 린 건설 워크패키지 툴을 개발하고자 함. 이와 더불어 건설생산공정 시뮬레이션 시스템의 개발을 통하여 제시된 개선모델의 적용성을 검증하여 최종 연구추진체계 목표인 건설생산 프로세스 혁신기술을 제공하고자 함. 다양한 공정계획 시나리오에 따른 건설현장 지원(장비, 교통, 자제 노무)의 흐름을 실제 공사수행 이전에 컴퓨터상에 재현하고 평가함으로써 최적의 프로세스 계획 수립을 지원하기 위한 마이크로 프로세스 시뮬레이션 시스템을 개발하고자 함. 또한 공정 매크로 레벨에서의 작업 낭비요소 최소화 및 자원 활용도 최적화를 고려한 마이크로 프로세스와 매크로 스케줄 연계 의사결정시스템을 개발하고, Schedule-Risk Pool DB와 Schedule-Risk Index를 구축하며, Schedule-Risk Control System 및 시스템 운영 매뉴얼을 개발하고자 함</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 중앙대학교</div>
                                <div className="researchDetail2">위탁연구기관 - 경남대학교, 경원대학교</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel15(e)} className='header'>
                                {this.props.title}
                                공공시설물 유지관리비용 산정 시스템 모델 개발(2005 ~ 2006)
                    </div>
                    {this.state.open15 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_15}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2005.07.20 ~ 2006.07.19</li>
                                <li>시행부처/기관 : 한국도로공사</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">공공시설물 유지관리는 구조물의 사고 등에 의해 발생하는 인명이나, 사회간접자본의 기능 중대한 손실을 미연에 방지하고, 시설이용자에게 적절한 서비스 수준을 보장하는 안정성 확보하는데 목적이 있음. 국내 사회간접자본의 총 자산액은 388조원(교통부문 자산 215조원)으로 사회간접자본의 증가에 따라 시설물 유지관리비용은 지속적으로 증가하고 있음. 본 연구의 총 기간은 2년으로써 1차년도에는 국내외 현황조사 및 벤치마킹을 위한 자료 조사와 예산 산정 모델 구축을 위한 기초 프레임워크 제시를 목표로 하며, 2차년도에는 대상물을 선정하고 샘플 데이터를 입력하고 예산산정 모델의 본보기 모델을 개발함으로써 예산산정모델을 테스트하는데에 있음. 현재의 국내 공공시설물 유지관리 조직 및 예산의 체계화 미흡 및 예산편성지침의 부재는 유지관리 조직의 예산의 신뢰성을 떨어뜨리는 요인이 되고 있는데 이에 예산 산정 시 과거 실적에 근거하여 일정한 기준 및 구체적 자료를 제공할 수 있는 유지관리비용 산정 시스템 구성요소를 선정하고 시스템 모델을 개발하고자 함</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 한국건설기술연구원</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel16(e)} className='header'>
                                {this.props.title}
                                산업설비 통합수행체제 핵심기술개발(2003 ~ 2006)
                    </div>
                    {this.state.open16 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_16}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2003.08.20 ~ 2006.08.19</li>
                                <li>시행부처/기관 : 건설교통부</li>
                                <li>연구개요</li>
                                <div className="researchDetail2">건설분야는 토목, 건축기술 외에 엔지니어링, 기계 및 전기, 화공, 제어기술 등 다양한 분야의 학문 및 기술영역과 공정모듈 및 시스템의 통합이 요구되는 분야로써, 기술간 보다 체계적, 합리적으로 통합하여 요구되는 기능을 창출하고 성능을 확보할 수 있도록 상호연계성, 표준화 등을 규정한 기술적인 요건이 매우 중요함. 본 연구에서는 공공발주 산업설비의 수행단계별 업무프로세스 개선모델과 통합된 업무 매뉴얼을 제시하고, 시공 및 유지관리 단계의 지식 및 정보가 기획/설계 단계로 재활용될 수 있는 기술적, 제도적 체계(안) 제시</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 한국건설기술연구원</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교</div>
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel17(e)} className='header'>
                                {this.props.title}
                                제작, 시공 및 유지관리와 연계된 설계자동화 시스템 개발(2002 ~ 2005)
                    </div>
                    {this.state.open17 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_17}/>
                            {this.props.children}
                        </div>
                        <div className="researchDetail">
                                <li>연구수행기간 : 2002.12.06 ~ 2005.12.05</li>
                                <li>시행부처/기관 : </li>
                                <li>연구개요</li>
                                <div className="researchDetail2">제작·시공 및 유지관리 단계에의 정보연계 및 활용이 가능한 강교랑 설게자동화 시스템을 개발하여 강교랑 생애주기상에서 발생되는 다앙한 엔지니어링 정보에 관리 정보까지 통합하여 활용할 수 있도록 하는데 목표를 두어 관련 연구개발 수행</div>
                                <div className="researchDetail2"> 국내·외 강교랑 설계 자동화 관련 연구 및 기술현황분석: 현재 국내외에서는 설계자동화를 위한 정보시스템에 대한 관심이 증대되고 있으며, 국외에서는 시공단계를 고려한 4D 기반의 시뮬레이션과 같은 기술을 개발하여 활용중임. 또한, 국내서는 강교량의 설계자동회 프로그램에 대한 개념의 정립 및 초기활용 단계에 있으며, 제작 · 시공 및 유자관리 단계의 정보공유를 위한 통합기능을 제공할 수 있는 시스템의 개발이 요구되고 있음 </div>
                                <div className="researchDetail2">수치가조립의 현장적용 연구: 수치가조립을 위한 계측기기의 H/W 및 S/W 기술현황을 파악하여 현장 계측에 적용하였으며, 수치가조립 정밀도 영향요인을 조사/분석하여 정밀도를 검증하였음. 또한, 계측좌표를 변환하여 설계좌표와 비교하였으며, 좌표변환알고리즘을 제안하였으며 현장적용을 위한 수치가조립 시스템 구축방안을 제시하였음</div>
                                <div className="researchDetail2">무선통신 응용 기술 개발: 인터넷 기술 등 무선통신 기술을 이용한 실시간 정보공유의 편의성을 검토하였으며, 건설업에 적합한 기술현황을 분석하고 적용 방안을 선정하였음. 또한 현행 작업 현장 정보 관리체계를 분석하고 무선통신을 응용한 강교량 현장정보의 실시간 교환 및 공유가 가능한 통합관리시스템 개발 방안을 제시하였음</div>
                                <li>연구추진체계</li>
                                <div className="researchDetail2">주관연구기관 - 한길아이티</div>
                                <div className="researchDetail2">위탁연구기관 - 중앙대학교, 한국건설기술연구원</div>
                            </div>
                        </div>
                    ) : null}
			</div>	
		)
    }
}

export default Sixth;
