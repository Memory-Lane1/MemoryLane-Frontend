import React, { Component } from "react";
import questionMan from "../../Images/question.jpg";

import signupBG from '../../Images/addJob.jpg';
import { Row, Col, Image } from "react-bootstrap";
import {
  Jumbotron,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { zoomOut, slideInDown, slideInUp, bounce, flipInX, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "../followed-spaces/Spaces.css";
import "./home.css";
import "../all_ques_page/questions.css";

const styles = {
	zoomIn: {
	  animation: 'x 1s',
	  animationName: Radium.keyframes(zoomIn, 'zoomIn')
	},
	slideInUp: {
		animation: 'x 1s',
		animationName: Radium.keyframes(slideInUp, 'slideInUp')
	  },
	  bounce: {
		animation: 'x 1s',
		animationName: Radium.keyframes(bounce, 'bounce')
	  },
	  flipInX: {
		animation: 'x 1s',
		animationName: Radium.keyframes(flipInX, 'flipInX')
	  },
  }

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {

			return (
				<div>	
					
          			<div>
						<div 
							className='row mt-0 justify-content-center' style={{
							backgroundImage : `url(${signupBG})`,
							backgroundSize : "cover",
							padding : "5%",
							marginTop:'3rem',
							marginBottom: '3rem',
							borderRadius:'0.8px'
						}}>
						<Jumbotron style={{opacity:0.9}} mt-2 mr-2>
							<div>
							<Row>
							<h4 className="display-8" style={{marginLeft: '1rem', marginRight: '1rem', fontStyle:'oblique',fontWeight:'bolder',color:'black'}}>
							Memory Lane- Where memories rejuvenate.
							</h4>
							</Row>
							<Row>
							<p className="lead info-text">
							Our project aims to provide the user with an interface wherein they can upload a low-quality image and receive the image with the resolution and sharpness greatly increased. There are many times when due to some factors like motion blur, poor resolution of the camera, or mist in the air, the image taken by us turns out worse than expected. In such a scenario, having software that can build upon the existing knowledge in the image captured to output the image in higher resolution and quality can be a powerful tool. Here, the phrase “better quality” refers to upscaling the image in terms of resolution without compromising its quality.

							</p>
							</Row>
							{!this.props.auth.isSignedIn
							?
							<div>
							<hr className="my-2" />
							<p className='info-text'>
								So, What are you waiting for? <br/>
								Try to improve Resolution!!.
							</p>
							<p className="lead">
								<Button color="primary" to="/login"><span className='fa fa-lg fa-sign-in mr-2 ml-2' /><Link to="/Login"><b style={{color:'white'}}>Login</b></Link></Button>
							</p>
							</div>
							:
							<div></div>
  							}
							</div>
						</Jumbotron>
					</div>
					
					<div 
							className='row mt-0 justify-content-center' style={{
							backgroundImage : `url(${questionMan})`,
							backgroundSize : "cover",
							padding : "5%",
							marginTop:'4rem',
							marginBottom: '4rem',
							//marginLeft: '3rem',
							//marginRight: '3rem',
							borderRadius:'0.8px'
						}}>
						<Jumbotron style={{opacity:0.9}} mt-2 mr-2>
						<Col sm={12} className="mainsection__row">
									<h2 id="main_text">
										Have an Astronomical Image?
										<br />
										<br />
									</h2>

									<h4>Check out the feature here.</h4>
									<br/>
									<h7 className='dev-name' ></h7>
									<br />
									<br/>
									<Link to='/imageResolution'>
									<button className="header__btn__link btn--text btn--scroll-to">
										Click Here&rarr;{" "}
									</button>
									</Link>
								</Col>
						</Jumbotron>
					</div>
						</div>
			</div>
			);
		}
	}

export default home;
