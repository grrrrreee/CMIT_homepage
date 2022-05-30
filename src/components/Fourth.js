import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

class Fourth extends React.Component {
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
				open9 : true
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
		
		togglePanel4(e) {
			this.setState({open4 : !this.state.open4})
		}

		togglePanel5(e) {
			this.setState({open5 : !this.state.open5})
		}

		togglePanel6(e) {
			this.setState({open6 : !this.state.open6})
		}
		
		togglePanel7(e) {
			this.setState({open7 : !this.state.open7})
		}

		togglePanel8(e){
			this.setState({open8 : !this.state.open8})
		}

		togglePanel9(e){
			this.setState({open9 : !this.state.open9})
		}

        render(){
                return(
               		<div className="theparent">
                                <div onClick={(e)=>this.togglePanel(e)} className='header'>
                                        {this.props.title}
                                        2021
                                </div>
                                 {this.state.open ? (
                                        <div className='content'>
					<li>Kyoung Ju Kim, Kyoungmin Kim, Eu Wang Kim, Thi Ha Tho Nguyen. Estimating Damages of Bid-Rigging in Design-Build Contracts Based on Simulation Model. KSCE Journal of Civil Engineering Volume 25, Issue 2</li>
                                                {this.props.children}
                                        </div>
                                 ) : null}
                                <div onClick={(e)=>this.togglePanel3(e)} className='header'>
                                        {this.props.title}
                                        2019
                                </div>
                                 {this.state.open3 ? (
                                        <div className='content'>
					<li>Ju-hyun Lee, Kyong Ju Kim, Seok Kim. Environmental Load Estimating Model for NATM Tunnel using Case Based Reasoning in the Planning Stage. Environmental Engineering and Management Journal. 2019.06.28</li>
					<li>Estimating Environmental Load of PSC Beam Bridge using Standard Quantities and Resource DB Model. KSCE Journal of Civil Engineering. 2019.03.29 Volume 22, Issue 4</li>
                                                {this.props.children}
                                        </div>
                                 ) : null}
				<div onClick={(e)=>this.togglePanel4(e)}className='header'>
					{this.props.title}
					2018
				</div>
				{this.state.open4 ? (
					<div className='content'>
					<li>Ju-hyun Lee, Kyong Ju Kim, Eu Wang Kim, and Heung Rae Kim. Environmental Load Estimating Model of NATM Tunnel based on Standard Quantity of Major Works in the Early Design Phase. KSCE Journal of Civil Engineering. 2018.04 Volume 22, Issue 4.</li>
						{this.props.children}
					</div>
				) : null}
				<div onClick={(e)=>this.togglePanel5(e)}className='header'>
					{this.props.title}
					2017
				</div>
				{this.state.open5 ? (
					<div className='content'>
					<li>Kyong Ju Kim, Won Gun Yun, Namho Cho, Jikwang Ha. Life cycle assessment based environmental impact estimation model for pre-stressed concrete beam bridge in the early design phase. Environmental Impact Assessment Review 64</li>
					<li>Kyong Ju Kim, Won Gun Yun, Namho Cho, Jikwang Ha, “Estimating Approximate Construction Duration of CFRD” Environmental Impact Assessment Review</li>
						{this.props.children}
					</div>
				) : null}
				<div onClick={(e)=>this.togglePanel6(e)}className='header'>
                                        {this.props.title}
                                        2016
                                </div>
                                {this.state.open6 ? (
                                        <div className='content'>
					<li>Kyong Ju Kim, Jin-Young Cho, Dong-Youl Lee, and Min-Jae Lee, Development of an Automated As-planned Schedule System for Efficient Scheduling, KSCE Journal of Civil Engineering. 2016.05</li>
					<li>Kyong Ju Kim, Won Gun Yun, and Inkyum Kim, Estimating Appropriate Construction Duration of CFRD in the Planning Stage, KSCE Journal of Civil Engineering. 2016.11. Volume 20, Issue 7, November 2016. ISSN: 1226-7988 (Print), 1976-3808</li>
						{this.props.children}
                                        </div>
                                ) : null}
				<div onClick={(e)=>this.togglePanel7(e)}className='header'>
                                        {this.props.title}
                                        2011~2015
                                </div>
                                {this.state.open7 ? (
                                        <div className='content'>
					<li>Kyong Ju Kim, Won Gun Yun, Ju-hyun Lee, and Kyoungmin Kim. Schedule Compression in Tunneling Projects by Adjusting Workflow Variability." KSCE Journal of Civil Engineering. 2014.09</li>
					<li>Chidon Oh, Chansik Park, Kyong Ju Kim, “An Approximate Cost Estimation Model Based on Standard Quantities of Steel Box Girder Bridge Substructure.” 2013.07. KSCE Journal of Civil Engineering</li>
					<li>S.H. Kwon, K.J. Kim, K. Kim, and N. Cho. “Assessment Model on Environmental Economics for Construction Projects in Korea.” 2012.08. KSCE Journal of Civil Engineering</li>
                                                {this.props.children}
                                        </div>
                                ) : null}
				 <div onClick={(e)=>this.togglePanel8(e)}className='header'>
                                        {this.props.title}
                                        2006~2010
                                </div>
                                {this.state.open8 ? (
                                        <div className='content'>
					<li>Kim, K.J. and Kim, Kyoungmin. “Preliminary Cost Estimation Model Using Case-Based Reasoning and Genetic Algorithms.” Journal of Computing in Civil Engineering, ASCE, 2010. 11/12</li>
					<li>Kim, K.J. and Kim, Kyoungmin. “Case Study on the Evaluation of Equipment Flow at a Construction Site. Journal of Computing in Civiling Engineering”, ASCE, 2010. 11/12</li>
					<li>Kim, K.J. and Kim, Kyoungmin. “Multi-agent-based simulation system for construction operations with congested flows. Automation in Construction.” Volume 19, Issue 7, November 2010, Pages 867-874</li>
					<li>Kim, K.J. and Kim, Kyoungmin. “Valuation on the Intangible Benefits of EVMS using CVM.” J. of Asian Architecture and Building Engineering, May 2010</li>
					<li>Kim, K.J. and Kim, Kyoungmin. "Approximate Cost Estimating Model for PSC Beam Bridge Based on Quantity of Standard Work." Journal of Civil Engineering, KSCE, 13(6). Nov. 2009</li>
					<li>Kwon, S.W., Kim, J.Y., Yoo, H.S., Cho, M.Y. and Kim, K.J.(2006). "Development of wireless vibration sensor using MEMS for tunnel construction and maintenance." Tunnelling and Underground Space Technology. Volume 21, Issues 3-4, May_July 2006, Page 318. Safety in the Underground Space - Proceedings of the ITA-AITES 2006 World Tunnel Congress and 32nd ITA General Assembly. (SCI-E) TUNNELLING AND UNDERGROUND SPACE TECHNOLOGY Quarterly. ISSN: 0886-7798. PERGAMON-ELSEVIER SCIENCE LTD, THE BOULEVARD, LANGFORD LANE, KIDLINGTON, OXFORD, ENGLAND, OX5 1GB</li>
                                                {this.props.children}
                                        </div>
                                ) : null}
				<div onClick={(e)=>this.togglePanel9(e)}className='header'>
                                        {this.props.title}
                                        ~2005
                                </div>
                                {this.state.open9 ? (
                                        <div className='content'>
					<li>Kim, K.J., Kim, J.R., Shin, E.Y., and Cho, M.Y., "Collaborative Work Model under Distributed Construction Environment." Canadian Journal of Civil Engineer Vol. 32. Number 2. April. 2005</li>
					<li>Kim, K.J., Gibson, G.E., “Interactive Simulation Modeling for Heavy Construction Operations.” Automation in Construction Vol 12/1 P97-109. 2003.12</li>
					<li>Kim, K.J., Chin, K.H., and Cho, M.Y., "CITIS in Construction." Canadian Journal of Civil Engineer Vol. 29. August. 2002</li>
					<li>Kim, K.J., Gibson, G.E., “A Development of Knowledge-Embedded, Modularized Simulation Modeling System for Heavy Construction Operations" KSCE, Journal of Civil Engineering, September. 1999</li>
                                                {this.props.children}
                                        </div>
                                ) : null}
                        </div>
		) 
        }
}

export default Fourth;
