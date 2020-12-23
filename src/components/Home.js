import pic from '../profilePic.png'
import NavBar from './navigationBar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

function getHome() {
    return (
        <div style={HomeCSS}>
            <NavBar></NavBar>
            <div>
                <div style={bodyCSS} id="Body">
                    {getImg()}
                    <div style={{margin: '20px', textAlign: "center"}}>
                        <h1 style={{fontSize: "60px"}}>
                            Hi, I'm Eric!
                        </h1>
                        <h3 style={paragraphCSS}>
                            I'm a software architect who recently graduated with a B.S. in computer science from the University of California San Diego. My hobbies include running, playing videogames, and spending time with friends. I currently reside in San Jose, CA and am looking for a software related job.
                        </h3>
                    </div>
                    {getSocial()}
                </div>
            </div>    
        </div>
    )
}

function getImg() {
    return (
    <img src={pic} className="Profile-pic" alt="profile pic" 
                        width="200px" 
                        height="200px" 
                        style={{margin: "50px", float: "left"}}></img>
    )
}

function getSocial() {
    return(
        <div style={socialContainerCSS}>
            <ul listStyle="none outside" style={socialCSS}>
                <li style={socialItemBoxCSS}>
                    <a href="https://www.linkedin.com/in/eric-wei-09b36b141/" style={socialLinkCSS}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li style={socialItemBoxCSS}>
                    <a href="https://github.com/e4wei" style={socialLinkCSS}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li style={socialItemBoxCSS}>
                    <a href="mailto: erickwei24@gmail.com" style={socialLinkCSS}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

const socialContainerCSS = {
    width: "100%",
    textAlign: "center",
    margin: "30px 0"
}

const socialCSS = {
    margin: "24px 0",
    padding: "0",
    fontSize: "30px",
    textShadow: "0px 1px 2px rgba(0, 0, 0, .8)",
    display: "block",
}

const socialItemBoxCSS = {
    display: "inline-block",
    margin: "0 15px",
    padding: "0",
    lineHeight: "18px"
}

const socialLinkCSS = {
    color: "#fff",
    textDecoration: "none",
    outline: "0"
}

const iconCSS = {
    display: "inline-block",
    fontFamily: "FontAwesome",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "1"
}

const HomeCSS = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    //fontSize: `calc(10px + 2vmin)`
}
const bodyCSS = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "50px 75px",
    flexWrap: "wrap"
}

const paragraphCSS = {
    color: "#A8A8A8", 
    textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
    font: "16px/1.9em 'LibreBaskerville Regular', serif",
    maxWidth: "410px"
}
export default getHome;