import React, { Component } from 'react';
import { Image,Carousel} from 'react-bootstrap';
class Clients extends Component{
    render(){
        let img = {
            height: 100,
            marginLeft:"80%",
        }

        let container = {
            height: 350,
            width: "50%",
        }
        return(
            <div className="col-sm-12 text-center">	
            <br/>
            <h1> Client Review</h1>
            <Carousel>
                <Carousel.Item style={container}>
                <Image align="middle" style={img} src={require("../../assets/Client Review/Celcom.png")}/>
                <Carousel.Caption style={{margin: "97px -408px",marginLeft: "130px",}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={container}>
                <Image align="middle" style={img} src={require("../../assets/Client Review/Celcom.png")}/>
                <Carousel.Caption style={{margin: "97px -408px",marginLeft: "130px",}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="clear"></div><br/>
			<div className="_width10"><Image  src={require("../../assets/Client Review/AEON.png")} className="_width100"/></div>
			<div className="_width10" style={{paddingTop:"3%"}}><Image   src={require("../../assets/Client Review/Astro.png")} className="_width100"/></div>
			<div className="_width10" style={{paddingTop:"2%"}}><Image   src={require("../../assets/Client Logo/AXA.png")} className="_width100"/></div>
			<div className="_width10"><Image   src={require("../../assets/Client Logo/Berjaya.png")} className="_width100"/></div>
			<div className="_width10" style={{paddingTop:"4%"}}><Image  src={require("../../assets/Client Review/Bursa.png")} className="_width100"/></div>
			
			<div className="_width10"><Image  src={require("../../assets/Client Review/AEON.png")} className="_width100"/></div>
			<div className="_width10" style={{paddingTop:"4%"}}><Image  src={require("../../assets/Client Logo/Lafarge.png")} className="_width100"/></div>
			<div className="_width10"><Image  src={require("../../assets/Client Review/AEON.png")} className="_width100"/></div>
			<div className="_width10"><Image  src={require("../../assets/Client Review/AEON.png")} className="_width100"/></div>
			<div className="clear"></div><br/>
            </div>
        );
    }
}

export default Clients;