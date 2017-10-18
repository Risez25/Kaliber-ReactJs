import React, { Component } from 'react';
class Contact extends Component{
    render(){
        return(
            <div>
            <div className="col-sm-12 footer text-center">	
			<br/>
			<h1 style={{color:"#ffffff"}}>Contact</h1><br/><br/>
			<div className="col-sm-2 col-md-3">&nbsp;</div>
			<div className="col-sm-8 col-md-6">	
				<iframe className="gmaps" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_4wPhMZlLQu49UEd05D_ahcveoG8B8SI&q=northpoint+mid+valley" allowfullscreen></iframe>	
				
				<div className="clear"></div><br/><br/>
					<button style={{color:"#ffffff",borderRadius:"43px",padding:"23px 55px",backgroundColor:"#465366",borderColor:"#ffffff"}} type="button">Send Message</button>
				<div className="clear"></div><br/><br/>
				<p style={{color:"#ffffff"}}> Address : A-1-5, Northpoint Office Midvalley City, No 1 Medan Syed Putra Utara ,59200 Kuala Lumpur.</p>
				<div className="clear"></div><br/>
				<p style={{color:"#ffffff"}}> Tel: +603 2722 6525 Email: info@accendo.com.my</p>
			</div>
			<div className="col-sm-2 col-md-3 ">&nbsp;</div>	
			<div className="clear"></div><br/><br/>
            </div>	
            <div className="col-sm-12 footnote text-center" style={{color:"#ffffff"}}>	
                Copy 2017 - Accendo HR
            </div>
        </div>
        );
    }
}

export default Contact;