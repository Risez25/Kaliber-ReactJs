import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
class Simulation extends Component{
    render(){
        return(
            <div className="col-sm-12 placeholder_rel">
                <h1 style={{marginTop:70,color:"#ffffff"}}> Simulations </h1>
                <br/>
                <br/>
                <br/>
                <div className="">
                    <div className="col-sm-2 col-md-3">&nbsp;</div>
                    <div className="col-sm-8 col-md-6">
                        <span >
                         <Video autoPlay loop muted>
                            <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/webm" />
                        </Video>                    
		 				<Image  src={require("../../assets/desktop-frame.png")} className="img_desktop"/>
						
		     			</span>
                        <div className="clear"></div><br/><br/>
                    </div>
                    <div className="col-sm-2 col-md-3 ">&nbsp;</div>
                </div>
                <div className="clear"></div>
                <br/>
                <div className="clear"></div><br/>
             </div>
        );
    }
}

export default Simulation;