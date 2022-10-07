import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

class Fourth extends React.Component {
        constructor(props) {
            super();

        	this.state= {
				menu:0,
				open0 : true,
				open1 : true,
				open2 : true,
        	};
			this.togglePanel0 = this.togglePanel0.bind(this);
			this.togglePanel1 = this.togglePanel1.bind(this);
			this.togglePanel2 = this.togglePanel2.bind(this);
        }

		togglePanel0(e) {
			this.setState({open0 : !this.state.open0})
		}

		togglePanel1(e) {
			this.setState({open1 : !this.state.open1})
		}

		togglePanel2(e) {
			this.setState({open2 : !this.state.open2})
		}

        render(){
                return(
               		<div className="theparent">
								<div onClick={(e)=>this.togglePanel0(e)} className='header'>
                                        {this.props.title}
                                        특허 및 소프트웨어
                                </div>
                                 {this.state.open0 ? (
                                        <div className='content'>
											<li>특허 : 이메일 기반 문서관리를 위한 블록 데이터 생성 장치 및 방법 (출원 심사중) <b><u>김경주</u></b>, 김경민, 김의왕, 박민서, 2022</li>
											<li>특허 : 건축물 유지관리 시스템 <b><u>김경주</u></b>, 김경민, 윤원건, 김도근, 윤광원, 이윤성, 2017</li>
											<li>특허 : 토목 시설물의 사업기획단계 환경 부하량 산정장치 및 방법 <b><u>김경주</u></b>, 윤원건. 2017</li>
											<li>특허 : 멀티에이젼트 기반의 건설장비 투입량 결정 지원 시스템 및 방법 <b><u>김경주</u></b>, 김경민, 2012</li>
											<li>특허 : 유전자 알고리즘에 기반한 공사비 산정 장치 및 방법 <b><u>김경주</u></b>, 김경민, 2011</li>
											<li>S/W : 이메일과 연계한 블록데이터 자동 생성 모듈 <b><u>김경주</u></b>, 김경민, 김의왕, 박민서, 중앙대학교 산학협력단, 2021</li>
											<li>S/W : 건설프로젝트 교신문서 관리를 위한 블록체인 기반 시스템 <b><u>김경주</u></b>, 김경민, 김의왕, 박민서, 중앙대학교 산학협력단, 2020</li>
											<li>S/W : 문서 진위검증을 위한 PDF file format 문서의 해싱 시스템 <b><u>김경주</u></b>, 김경민, 김의왕, 박민서, 중앙대학교 산학협력단, 2020</li>
											<li>S/W : SOC 시설물의 기획단계 환경부하평가 시스템 중앙대학교 산학협력단, 2018</li>
											<li>S/W : SOC 시설물의 설계단계 환경부하평가 시스템 중앙대학교 산학협력단, 2018</li>
											<li>S/W : SOC 시설물의 유지관리단계 환경부하평가 시스템 중앙대학교 산학협력단, 2018</li>
											<li>S/W : SOC 시설물의 환경부하평가 결과 출력시스템 중앙대학교 산학협력단, 2018</li>
											<li>S/W : SOC 시설물의 환경부하량 산출을 위한 DB관리 시스템 중앙대학교 산학협력단, 2018</li>
											<li>S/W : 근거리 무선통신(NFC) 기반 건축물 유지관리 시스템 중앙대학교 산학협력단, 2014</li>
											<li>S/W : 교통량을 고려한 건설자원 운반 시뮬레이션 시스템 <b><u>김경주</u></b>, 김경민, 중앙대학교 산학협력단, 2007</li>
											<li>S/W : 트럭주행 시뮬레이션 <b><u>김경주</u></b>, 김경민, 중앙대학교 산학협력단, 2007</li>
											<li>S/W : 건설장비운영 시뮬레이션 <b><u>김경주</u></b>, 김경민, 중앙대학교 산학협력단, 2007</li>
                                            {this.props.children}
                                        </div>
                                 ) : null}
                                <div onClick={(e)=>this.togglePanel1(e)} className='header'>
                                        {this.props.title}
                                        국외 논문
                                </div>
                                 {this.state.open1 ? (
                                        <div className='content'>
											<li>Application Issues of Impacted As-Planned Schedule for Delay Analysis (ACCEPTED)</li>
											<li>Eu Wang Kim, Min Seo Park, Kyoungmin Kim, and <b><u>Kyong Ju Kim</u></b>. "Blockchain-Based Automatic Tracking and Extracting Construction Document for Claim and Dispute Support." KSCE Journal of Civil Engineering, vol.26, no. 9 (2022): 3707-3724.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Kyoungmin Kim, Eu Wang Kim, and Thi Ha Tho Nguyen. "Estimating Damages of Bid-Rigging in Design-Build Contracts Based on Simulation Mode." KSCE Journal of Civil Engineering, vol.25, no. 5 (2021): 1568-1577.</li>
											<li>Ju-hyun Lee, <b><u>Kyong Ju Kim</u></b>, Seok Kim. "Environmental Load Estimating Model for NATM Tunnel using Case Based Reasoning in the Planning Stage." Environmental Engineering and Management Journal, vol.18, no. 6 (2019): 1177-1191.</li>
											<li>Han Rok Lee, Junsang Yu, Won Gun Yun, Jaewoo Nam, and <b><u>Kyong Ju Kim</u></b>. "Estimating environmental load of PSC beam bridge using standard quantities and resource DB model." KSCE Journal of Civil Engineering, vol.23, no. 3 (2019): 958-972.</li>
											<li>Ju-hyun Lee, <b><u>Kyong Ju Kim</u></b>, Eu Wang Kim, and Heung Rae Kim. "Environmental Load Estimating Model of NATM Tunnel based on Standard Quantity of Major Works in the Early Design Phase." KSCE Journal of Civil Engineering, vol.22, no. 4 (2018): 1040-1051.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Won Gun Yun, Namho Cho, Jikwang Ha. "Life cycle assessment based environmental impact estimation model for pre-stressed concrete beam bridge in the early design phase." Environmental Impact Assessment Review, vol.64, (2017): 47-56.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Won Gun Yun, and In Kyum Kim. “Estimating Approximate Construction Duration of CFRD in the Planning Stage.” KSCE Journal of Civil Engineering, vol.20, no. 7 (2016): 2604-2613.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Jin-Young Cho, Dong-Youl Lee, and Min-Jae Lee. "Development of an Automated As-planned Schedule System for Efficient Scheduling." KSCE Journal of Civil Engineering, vol.20, no. 4 (2016): 1131-1137.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Won Gun Yun, Ju-hyun Lee, and Kyoungmin Kim. "Schedule Compression in Tunneling Projects by Adjusting Workflow Variability." KSCE Journal of Civil Engineering, vol.18, no. 6 (2014): 1625-1631. </li>
											<li>Chidon Oh, Chansik Park, <b><u>Kyong Ju Kim</u></b>. “An Approximate Cost Estimation Model Based on Standard Quantities of Steel Box Girder Bridge Substructure.” KSCE Journal of Civil Engineering, vol.17, no. 5 (2013): 877-885.</li>
											<li>Suk-Hyun Kwon, <b><u>Kyong Ju Kim</u></b>, Kyoungmin Kim, and Namho Cho. “Assessment Model on Environmental Economics for Construction Projects in Korea.” KSCE Journal of Civil Engineering, vol.16, no. 4 (2012): 505-516.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Kyoungmin Kim and Ki Yong Kang. "Valuation on the Intangible Benefits of EVMS using CVM." Journal of Asian Architecture and Building Engineering, vol.9, no. 1 (2010): 221-228.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Ph.D., M.ASCE, and Kyoungmin Kim, Ph.D. “Preliminary Cost Estimation Model Using Case-Based Reasoning and Genetic Algorithms.” Journal of Computing in Civil Engineering, vol.24, no. 6 (2010): 499-505.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Ph.D., M.ASCE, and Kyoungmin Kim, Ph.D. “Case Study on the Evaluation of Equipment Flow at a Construction Site." Journal of Computing in Civiling Engineering, vol.24, no. 6 (2010): 570-575.</li>
											<li>Kyoungmin Kim, <b><u>Kyong Ju Kim</u></b>. “Multi-agent-based simulation system for construction operations with congested flows." Automation in Construction, vol.19, no. 7 (2010): 867-874.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Kyoungmin Kim, and Ki Yong Kang. “Valuation on the Intangible Benefits of EVMS using CVM.” Journal of Asian Architecture and Building Engineering, vol.9, no. 1(2010): 221-228.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Kyoungmin Kim, and Chan Sung Kang. "Approximate Cost Estimating Model for PSC Beam Bridge Based on Quantity of Standard Work." KSCE Journal of Civil Engineering, vol.13, no. 6 (2009): 377-388.</li>
											<li>Kwon, S.W., Kim, J.Y., Yoo, H.S., Cho, M.Y. and <b><u>Kyong Ju Kim</u></b>. "Development of wireless vibration sensor using MEMS for tunnel construction and maintenance." Tunnelling and Underground Space Technology, vol.21, no. 3-4 (2006): 318.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Kim, J.R., Shin, E.Y., and Cho, M.Y. “Collaborative Work Model under Distributed Construction Environment." Canadian Journal of Civil Engineer, vol.32, no. 2 (2005): 299-313.</li>
											<li><b><u>Kyong Ju Kim</u></b>, Gibson, G.E., “Interactive Simulation Modeling for Heavy Construction Operations.” Automation in Construction, vol.12, no. 1 (2003): 97-109.</li>
											<li><b><u>Kyong Ju Kim</u></b>., Chin, K.H., and Cho, M.Y., “CITIS in Construction." Canadian Journal of Civil Engineer, vol.29, (2002).</li>
											<li><b><u>Kyong Ju Kim</u></b>, Gibson, G.E., “A Development of Knowledge-Embedded, Modularized Simulation Modeling System for Heavy Construction Operations." KSCE Journal of Civil Engineering, (1999). </li>
											{this.props.children}
                                        </div>
                                 ) : null}
								 <div onClick={(e)=>this.togglePanel1(e)} className='header'>
                                        {this.props.title}
                                        국내 논문
                                </div>
                                 {this.state.open1 ? (
                                        <div className='content'>
										<li>김의왕, 윤원건, <b><u>김경주</u></b>. "PSC Beam교 환경부하량 추정을 위한 인공신경망 모델 적용 연구." 한국건설관리학회, vol.19, no. 4 (2018): 082-092.</li>
										<li> 윤원건, 하지광, <b><u>김경주</u></b>. "PSC Beam 교량의 설계단계 환경부하량 산정을 위한 공종 및 설계정보 특성 분석." 대한토목학회, vol.37, no. 4 (2017): 705-716.</li>
										<li> 조남호, 윤원건, 이완렬, <b><u>김경주</u></b>. "LCA 기반 PSC 교량의 환경부하 특성분석에 대한 연구." 대한토목학회, vol.36, no. 2 (2016): 297-305.</li>
										<li>이주현, 심진아, <b><u>김경주</u></b>. "NATM터널의 공종별 환경부하 특성 분석." 대한토목학회논문집, vol.36, no. 2 (2016): 307-315.</li>
										<li>이교선, 윤원건, <b><u>김경주</u></b>, 진경호. "건설R&D기술 표준화 특성 및 활성화 방안 도출에 관한 연구." 대한토목학회논문집, vol.35, no. 6 (2015): 1387-1394.</li>
										<li>이교선, 윤원건, <b><u>김경주</u></b>, 진경호. "건설R&D 성과사례분석을 통한 건설기술 표준화 성과 및 효과 분석." 대한토목학회논문집, vol.35, no. 6 (2015): 1431-1438.</li>
										<li>이주현, 윤원건, <b><u>김경주</u></b>. “자산관리체계 도입을 위한 하수관거 유지관리 지출의 회계처리 발전 방안.” 대한토목학회논문집, vol.33, no. 3 (2013): 1203-1213.</li>
										<li>김석, 조남호, 박지연, 채명진. "지능형 굴삭 시스템의 성능평가 프레임워크 구축." 대한토목학회논문집, vol.32, no. 3D (2012): 269-274.</li>
										<li>하승호, 김석, 조남호, <b><u>김경주</u></b>. “기능계통도를 활용한 분류식 하수관거의 자산관리 서비스수준의 성능측정방법 개선에 대한 연구.” 대한토목학회논문집, vol.32, no. 2D (2012): 147-157.</li>
										<li>안만선, 임광수, <b><u>김경주</u></b>. “현장 굴진자료 분석에 의한 토압식 실드 TBM의 운전조건과 굴진속도 연구.” 대한토목학회논문집, vol.31, no. 6D (2011): 839-848.</li>
										<li>박하진, 안만선, 조남호, <b><u>김경주</u></b>. “하수처리 시설 대수선비 자산화 영향분석 및 제도개선 방안.” 대한토목학회논문집, vol.31, no. 2D (2011): 285-293.</li>
										<li><b><u>김경주</u></b>, 강기용, 김경민. “조건부가치측정법을 이용한 도로사업의 간접편익 추정.” 대한토목학회논문집, vol.30, no. 1D (2010): 61-70.</li>
										<li> <b><u>김경주</u></b>, 김경민, 이상규. “다중 양중장비와 자재 야적 위치의 최적 결정을 위한 모델 개발.” 한국건설관리학회, vol.10, no. 6 (2009): 127-134</li>
										<li>권용훈, <b><u>김경주</u></b>, 임원석, 박찬진, 채명진. “정전사고 사례분석을 통한 고속도로 운영 위험비용 산정에 대한 연구.” 한국건설관리학회, vol.10, no. 1 (2009): 79-90.</li>
										<li>조정연, 김상귀, 김경민, <b><u>김경주</u></b>. “표준단면을 이용한 터널 공사비 예측모델 개발 (II)- 공사비 변동 모델 및 검증.” 대한토목학회 논문집, vol.28, no. 5D (2008): 677-684.</li>
										<li>조정연, <b><u>김경주</u></b>, 김경민, 김상귀. “표준단면을 이용한 터널 공사비 예측모델 개발 (I)- 공사비 영향요인 분석.” 대한토목학회 논문집, vol.28, no. 5D (2008): 665-675.</li>
										<li>정원지, <b><u>김경주</u></b>. “상수도 관종 선정을 위한 가치평가 모델.” 대한토목학회 논문집, vol.27, no. 5D (2007): 617-627.</li>
										<li>권순철, 경갑수, <b><u>김경주</u></b>, 박혜연. “제작공수 변화에 따른 표준품셈의 적정성 검토.” 대한토목학회 논문집, vol.27, no. 4D (2007): 517-524.</li>
										<li>김경민, 서형범, 황호정, <b><u>김경주</u></b>.“ 터널 버력처리 공정의 시뮬레이션 적용성에 관한 연구.” 한국건설관리학회 논문집, vol.8, no. 1 (2007): 141-149.</li>
										<li>서형범, 정원지, 김경민, <b><u>김경주</u></b>. “건설 장비 운영 데이터 분포 특성에 관한 연구.” 대한토목학회 논문집, vol.26, no. 4D (2006): 661-670.  </li>
										<li>김석, 김경민, 박찬혁, <b><u>김경주</u></b>. “강교량 제작정보 통합관리를 위한 WBS 적정성 평가연구.” 대한토목학회 논문집, vol.25, no. 6D (2005): 867-875.</li>
										<li>박찬혁, 박수현, 하승호 <b><u>김경주</u></b>.“ 기술수준 평가를 위한 산업설비 핵심업무 도출 및 성과지표 개발 연구.” 대한토목학회 논문집, vol.25, no. 1D (2005): 127-134.</li>
										<li>이정훈, 이철규, <b><u>김경주</u></b>. “강교수치가조립 공법 도입을 위한 3차원 계측방법론 정립연구.” 대한토목학회, vol.24, no. 6D (2004): 929-937</li>
										<li>경갑수, 강지윤, <b><u>김경주</u></b>, 정경섭. “강교량 품셈공수산정 비교연구.” 대한토목학회, vol. 24, no. 4D (2004): 919-927.</li>
										<li>김성근, 이철규 <b><u>김경주</u></b>. “성공적인 지식경영을 위한 웹기반 전자 시공매뉴얼 시스템.” 대한토목학회, vol.24, no. 3D (2004): 429-438.</li>
										<li><b><u>김경주</u></b>, 박찬혁. “교통흐름을 고려한 장비계획을 위한 시뮬레이션 모델 구축.” 대한토목학회, vol.24, no. 3D (2004): 423-428.</li>
										<li>김병수, <b><u>김경주</u></b>, 전진구, 강인석. “턴키공사 설계오류 저감방안에 관한 연구.” 대한토목학회, vol.24, no. 2D (2004): 275-283.</li>
										<li><b><u>김경주</u></b>, 김병수. “EVMS 도입에 따른 국내 기성지급 관행의 문제점과 그 개선에 따른(EVMS의) 비용-효과 평가방안에 대한 연구.” 대한토목학회, vol.23, no. 5D (2003): 643-648.</li>
										<li>김균태, 박현근, <b><u>김경주</u></b>, 안방률. “건설공사 품질관리비 산출기준 개선방안.” 한국건설관리학회, vol.3, no. 3 (2002): 75-83.</li>
										<li><b><u>김경주</u></b>, 김정렬, 진경호. “공공 도로건설사업 공정․원가 통합관리시스템 (EVM) 구축 연구.” 대한토목학회, vol.21, no. 5-D (2001): 703-712.</li>
										<li><b><u>김경주</u></b>, 진경호, 김병곤, 김승균, 조문영. “건설 CITIS도입을 위한 공공도로건설사업 프로세스 및 데이터 모델 구축연구." 대한토목학회, vol.21, no. 5-D (2001): 713-724.</li>
										<li><b><u>김경주</u></b>. “도로건설사업 공정․원가 통합관리(EVM) 지원을 위한 WBS구축방안 연구.” 대한토목학회 논문집, vol.20, no. 6-D (2000): 669-680. </li>
										<li><b><u>김경주</u></b>. “여객기 터미널 포장공정의 생산성 향상을 위한 불연속 사건 시뮬레이션 적용연구.” 대한토목학회 논문집, vol.20, no. 4-D (2000): 403-412.</li>
										<li><b><u>김경주</u></b>. “건설공정 시뮬레이션을 위한 독립 자원모델 구축방안 연구.” 대한토목학회 논문집, vol.20, no. 4-D (2000): 389-402.</li>
										<li>김정렬, 권오성, 신은영, <b><u>김경주</u></b>, 조문영. ”건설 생산성 향상을 위한 설계․시공정보 통합관리 시스템 개발.” 대한건축학회 논문집, vol.15, no. 10 (1999): 101-110.</li>
										<li>신은영, <b><u>김경주</u></b>, 조문영. “설계업무 프로세스 모델 구축에 관한 연구.” 대한건축학회 논문집, vol.15, no. 7 (1999): 99-106.</li>
                                                {this.props.children}
                                        </div>
                                 ) : null}
                        </div>
		) 
        }
}

export default Fourth;
