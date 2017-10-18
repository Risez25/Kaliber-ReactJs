import React, { Component } from 'react';
import { Image,Grid, Row } from 'react-bootstrap';
class Solution extends Component{
    render(){
        let logo ={
            width: "200px",
            height: "150px",
            position: "centre",
        }
        let p ={
            
        }
        return(
            <Grid>
                <Row className="show-grid" style={{marginBottom:80,marginTop:60}}>
                    <Image style={logo} src={require("../../assets/Kaliber logo.png")}  />
                    <h1>Virtual Assessment Centre</h1>
                </Row>
                <Row className="show-grid" style={{marginBottom:100}}>
                    <p>Tired of going through thousands of resume just find the right person for your company and avoid all the hassle & losses.</p>
                    <p>With our KALIBER platform, you can choose from our proven and certified templates that will surely bring the right person to your office door steps.</p>
                    <p>That not all, KALIBER platform we are able to detect the useless people in your organization for you to kick them out!</p>
                </Row>
             </Grid>
        );
    }
}

export default Solution;