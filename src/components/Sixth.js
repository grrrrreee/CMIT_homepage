import React, {Component} from "react";
import '../style.css';
import Collapsible from 'react-collapsible';

import img_6_2 from './img/6_2.jpg'
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
               	<div className="theparent">
                    <div onClick={(e)=>this.togglePanel(e)} className='header'>
                        {this.props.title}
                        ???????????? ????????? ????????? ?????? ?????????????????? ????????? ???????????? ???????????? ?????? (2019~2023)
                    </div>
                    {this.state.open ? (
                        <div className='content'>
                        {/**/}
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel2(e)} className='header'>
                        {this.props.title}
                        PSC ????????? ????????????(External tendon) ??????????????? ?????? ????????? ???????????? ??? ???????????? ?????? ?????? ?????? (2017~2019)
                    </div>
                    {this.state.open2 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_2}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel3(e)} className='header'>
                        {this.props.title}
                        ???????????? ????????? ???????????? ?????? ??? ???????????? ???????????? (2016~2018)
                    </div>
                    {this.state.open3 ? (
                        <div className='content'>
                        
                                {this.props.children}
                        </div>
                    ) : null}
                     <div onClick={(e)=>this.togglePanel4(e)} className='header'>
                        {this.props.title}
                        SOC???????????? ???????????? ????????? ?????? LCA(Life Cycle Assessment)?????? ???????????? ????????? ?????? (2014~2018)
                    </div>
                    {this.state.open4 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_4}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel5(e)} className='header'>
                        {this.props.title}
                        ???????????? ????????? LCA(Life Cycle Assessment) ?????? ?????? ??? ???????????? ?????? ??????(2013~2014)
                    </div>
                    {this.state.open5 ? (
                        <div className='content'>
                        
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel6(e)} className='header'>
                        {this.props.title}
                        NFC?????? ????????? ???????????? ?????????
                    </div>
                    {this.state.open6 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_6}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel7(e)} className='header'>
                        {this.props.title}
                        ???????????? ?????? ???????????? ?????? ??? ?????? ??????????????? ??????(2013 ~ 2016)
                    </div>
                    {this.state.open7 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_7}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel8(e)} className='header'>
                        {this.props.title}
                        ?????????????????? ???????????? ?????? ?????? ??????(2013 ~ 2013)
                    </div>
                    {this.state.open8 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_8}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel9(e)} className='header'>
                        {this.props.title}
                        ????????? ??????R&D ?????? ????????? ?????? ????????????(2011 ~ 2012)
                    </div>
                    {this.state.open9 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_9}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel10(e)} className='header'>
                            {this.props.title}
                            ???????????? ??????????????? ??????????????? ?????? ??? ???????????????????????? ??????????????? ???????????? ??????(2011 ~ 2013)
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
                            ??????????????? ??????????????? ???????????? ?????? (2010 ~ 2011)
                    </div>      
                    {this.state.open11 ? (
                        <div className='content'>
                        
                        
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel12(e)} className='header'>
                                {this.props.title}
                                ???????????????(PSC??????/????????????) ????????? ???????????? ??? ?????? ??????(2006 ~ 2011)
                    </div>
                    {this.state.open12 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_12}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel13(e)} className='header'>
                                {this.props.title}
                                ???????????? ????????? ?????? ??? ????????? ???????????? ????????????(2006 ~ 2007)
                    </div>
                    {this.state.open13 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_13}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel14(e)} className='header'>
                                {this.props.title}
                                ???????????? ???????????? ???????????? ??????(2005 ~ 2010)
                    </div>
                    {this.state.open14 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_14}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel15(e)} className='header'>
                                {this.props.title}
                                ??????????????? ?????????????????? ?????? ????????? ?????? ??????(2005 ~ 2006)
                    </div>
                    {this.state.open15 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_15}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel16(e)} className='header'>
                                {this.props.title}
                                ???????????? ?????????????????? ??????????????????(2003 ~ 2006)
                    </div>
                    {this.state.open16 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_16}/>
                                {this.props.children}
                        </div>
                    ) : null}
                    <div onClick={(e)=>this.togglePanel17(e)} className='header'>
                                {this.props.title}
                                ??????, ?????? ??? ??????????????? ????????? ??????????????? ????????? ??????(2002 ~ 2005)
                    </div>
                    {this.state.open17 ? (
                        <div className='content'>
                        
                        <img className= 'img' src={img_6_17}/>
                                {this.props.children}
                        </div>
                    ) : null}
			</div>	
		)
        }
}

export default Sixth;
