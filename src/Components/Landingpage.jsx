import React from 'react'
import { Parallax} from 'react-parallax';
import {Spring } from 'react-spring/renderprops'
import Map from '../Images /homepage-banner-static-map.svg'
import img1 from "../Images /img1.png"
import img3 from "../Images /footer.png"
import img4 from "../Images /freelancer.png"
import MeetUp from "../Images /MeetUp.png"
import {Link} from "react-router-dom"
import Typical from 'react-typical'
import Linkedin from "../Images /linkedin.svg"
import youtube from "../Images /youtube.svg"
import twitter from "../Images /twitter.svg"
import facebook from "../Images /facebook.svg"
import Github from "../Images /github.png"

import '../App.css';
import { Card  } from 'react-bootstrap';

const styles = { fontFamily: "sans-serif", textAlign: "center" };
const insideStyles = { background: "white", padding: 20, position: "absolute", top: "50%", left: "50%",transform: "translate(-50%,-50%)" };
const brandStyles = {  fontFamily: "sans-serif",color: "white", padding: 20, position: "absolute", top: "50%", left: "35%",transform: "translate(-50%,-50%)" };



export const Landingpage = () => {

  
 

    return (
<div style={styles}>
   
    <Parallax bgImage={img1} strength={500}>
      <div style={{ height: 850 }}>
    
        <div  style={brandStyles}>
        <Typical
        steps={['Our all-in-one', 1000, 'Our all-in-one platform gives you everything you need to run your Job!', 500]}
        loop={Infinity}
        wrapper="p"
      />
        <h2>Our all-in-one platform gives you everything you need to run your Job</h2> <br/>
      <div className="hov"> 
      <Link className="link" to = "/">I want to Hire </Link>
      <Link className="link1" to = "/">I want to Work </Link>
       
      </div>
        
        </div>
       
                 <img className="map"src={Map} alt="boy" /> 
           <div className="num"><Spring 
                  from={{ number: 0 }}
                  to={{ number: 643000000 }}>
                 {props => <div>{props.number}</div>}
 
                 </Spring>
                 
                 <h1>saudi Programmers</h1>
                 </div>
                 
      </div>
    </Parallax>

{/* 1 */}

    <h1 style={styles} >| | |</h1>
    <Parallax  blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>

      <div className="free">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
       <Card.Title>Post a job</Card.Title>
      <Card.Text>
      It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.
      </Card.Text>
     </Card.Body>
     </Card> 
   
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
       <Card.Title>Choose freelancers</Card.Title>
      <Card.Text>
      Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants,
       product manufacturing, and graphic design (and a whole lot more).
      </Card.Text>
     </Card.Body>
     </Card>
   
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
       <Card.Title>Portfolio</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
     </Card.Body>
     </Card> 
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="imgLandpage" src={MeetUp} />
      <Card.Body>
       <Card.Title>MeetUp</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
     </Card.Body>
     </Card>
 
</div>

      </div>
    </Parallax>


    <Parallax bgImage={img4} strength={500}>
      <div style={{ height: 850 }}>
    
        <div  style={brandStyles}>
       
        <h2>Our all-in-one platform gives you everything you need to run your Job</h2> <br/>
   
        
        </div>
      
                 
      </div>
    </Parallax>


{/* 2 */}

    <h1>| | |</h1>
   
    <Parallax bgImage={img3} strength={200} renderLayer={percentage => (
        <div>
           <div className="footerStyle">

                
<Link to = "/"> <img   src={Github} alt="boy" /> </Link>
<Link to = "/"> <img   src={Linkedin} alt="boy" /> </Link>
<Link to = "/"> <img   src={youtube} alt="boy" /> </Link>
<Link to = "/"> <img   src={twitter} alt="boy" /> </Link>
<Link to = "/"> <img   src={facebook} alt="boy" /> </Link>

       </div>
      
        </div>
      )}
    >
      <div style={{ height: 800 }}>
      <p className="copy ">© 2019, The DDW Company. All rights reserved.</p>
      </div>
      <div className="footer">
      <p>Terms & Conditions | Privacy policy</p>
      <p >  Jeddah 12382 – 6726, Saudi Arabia </p>
      <p>Careers | Newsroom</p>
      </div>
    </Parallax>
    <div  />

  </div>
    )
} 
export default Landingpage;
