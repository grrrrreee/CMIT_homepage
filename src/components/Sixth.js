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
                                <div>주관연구기관 - 엔비코컨설턴트</div>
                                <div>위탁연구기관 - 중앙대학교</div>
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
                        SOC시설물의 환경부하 저감을 위한 LCA(Life Cycle Assessment)기반 의사결정 시스템 개발 (2014~2018)
                    </div>
                    {this.state.open4 ? (
                        <div className="thirdParent">
                            <div className="img">
                                <img className="img2" src={img_6_4}/>
                                {this.props.children}
                            </div>
                            <div>
                                1234
                            </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel5(e)} className='header'>
                        {this.props.title}
                        환경부하 저감형 LCA(Life Cycle Assessment) 기반 설계 및 시공기술 개발 기획(2013~2014)
                    </div>
                    {this.state.open5 ? (
                        <div className="researchDetail">
                        <li>연구수행기간 : 2013.12.26 ~ 2014.04.25</li>
                        <li>시행부처/기관 : 한국연구재단</li>
                        <li>연구개요</li>
                        <div className="researchDetail2">2012년 18대 국회에서 「온실가스 배출권의 할당 및 거래에 관한 법률안」의 통과로 2014년까지 탄소배출권 거래제의 시범 사업 실시 후, 2015년부터 본격 시행될 계획임. 국내 온실가스 배출량 중 건설교통분야는 42.3%로 높은 비중을 차지하고 있으며, 2020년 국내 온실가스 배출전망치 대비 30% 감축목표를 설정하고 있음. 이처럼 지속가능한 개발을 전제로 한 국제적 환경규제 및 국가별 환경정책의 변화에 대응하기 위해 주요 선진국에서는 환경정책 수립시 의사결정 지원을 위한 다양한 환경평가기법이 활용되고 있으며, 오염배출의 최소화, 공정의 환경친화성 향상 등의 목적을 종합적으로 지원하도록 노력하고 있음.</div>
                        <div className="researchDetail2">SOC 시설물은 단위 시설물에 비해 주변 현황과 시설물을 고려하여 대단위로 설계, 시공되므로, 종합적으로 친환경성을 평가할 수 있는 체계적인 의사결정 방안의 개발이 필요함. 따라서 건설분야의 탄소배출과 에너지 소비를 줄이기 위하여 SOC 시설물의 특성을 고려한 건설수행 단계별 사업수행 대안에 대한 탄소저감 및 환경부하량 평가모델을 비롯하여, SOC 시설물의 특성을 고려한 기획 및 설계 단계에서 설계 및 시공 등의 대안에 대한 환경부하량 및 환경경제성을 평가하고 환경부하를 최소화할 수 있는 의사결정 도구의 마련이 시급함.</div>
                        <div className="researchDetail2">따라서 본 연구에서는 LCA를 기반으로 한 SOC 시설물의 라이프사이클 전단계의 환경부하 평가기술 개발, 환경성능지표 개발 및 LCI DB 연계방안, 친환경 설계 및 시공 인증시스템 개발에 대한 연구를 기획하고자 함.</div>
                        <li>연구추진체계</li>
                        <div>주관연구기관 - 중앙대학교</div>
                        <div>위탁연구기관 - 도명이엔씨</div>
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
                                <div className="researchDetail2">본 연구의 최종 목표는 1) 공정 최적화를 통해 타 산업에 비해 저조한 건설 산업의 부가가치 창출 능력을 극대화하고, 2) 해외건설 시장에서 초대형 건설공사의 수주 경쟁력 확보를 위한 원천기술을 개발하며, 3) 개발된 기술의 다각적인 활용으로 건설사업관리자의 의사결정 지원 및 관련 전공자들의 교육용 도구로서 건설공정 계획의 전문가 양성에 기여하는데 있다. 이를 위해 건설공사를 수행하기 이전에 다양한 건설사업 수행 계획에 대한 가상 시나리오를 사전에 검토하고 평가할 수 있도록 지원하는 기술을 개발함으로써 사업수행 과정에서의 공기 및 공사비를 평가하고 공기단축 및 공사비를 절감할 수 있는 사업계획 및 공기단축 기술을 개발한다. 본 연구의 주요 목표는 다음과 같다.</div>
                                <div classNaem ="researchDeatil2">
                                    시나리오 기반 건설사업 계획 및 관리시스템 개발 
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
                        <div>
                            1234
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
                        <div>
                            1234
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
                        <div className='content'>
                        
                        
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel12(e)} className='header'>
                                {this.props.title}
                                도로구조물(PSC교량/하부구조) 공사비 산정모델 및 기준 개발(2006 ~ 2011)
                    </div>
                    {this.state.open12 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_12}/>
                            {this.props.children}
                        </div>
                        <div>
                            1234
                        </div>
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel13(e)} className='header'>
                                {this.props.title}
                                도로사업 타당성 조사 및 리스크 평가체계 구축연구(2006 ~ 2007)
                    </div>
                    {this.state.open13 ? (
                        <div className="thirdParent">
                        <div className="img">
                            <img className="img2" src={img_6_13}/>
                            {this.props.children}
                        </div>
                        <div>
                            1234
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
                        <div>
                            1234
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
                        <div>
                            1234
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
                        <div>
                            1234
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
                        <div>
                            1234
                        </div>
                        </div>
                    ) : null}
			</div>	
		)
    }
}

export default Sixth;
