import React, { Component} from 'react';
import { Image } from 'react-bootstrap';

class Home extends Component{
    render(){
        let parallax = {
            minHeight: 500,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        
        return(
            <div style={{height: 700}}>
            
                <Image style={parallax} src={require("../../assets/showcase.png")} responsive />
            
            </div>
        );
    }
}

export default Home;