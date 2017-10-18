import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
class Engines extends Component{
    render(){
        return(
            <div className="clear" style={{ borderBottom:1, borderBottomStyle:"ridge",paddingTop:20}}>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <div className="col-sm-12 text-center"  style={{ borderBottom:1, borderBottomStyle:"ridge"}}>	
				<h1> Kaliber Engines</h1>
				<p> More than  15 years research and studies of Phychometrics Field</p>
				<div className="clear"></div><br/>
				<div className="col-sm-1 col-md-2">&nbsp;</div>
				<div className="col-sm-5 col-md-4">
                    <Image  style={{width: 160, height: 100}} src={require("../../assets/Resources Logo/22.png")} responsive/>	
                </div>
				<div className="col-sm-5 col-md-4">
                    <Image style={{paddingTop: "7%"}} src={require("../../assets/Resources Logo/logo_w_logo.png")} responsive/>
                </div>
				<div className="col-sm-1 col-md-2">&nbsp;</div>
				<div className="clear"></div><br/>
            </div>
            </div>
        );
    }
}

export default Engines;