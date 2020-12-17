import pic from '../profilePic.png'
import NavBar from './navigationBar.js';

function getHome() {
    return (
        <div style={HomeCSS}>
            <NavBar></NavBar>
            <div style={bodyCSS} id="Body">
                {getImg()}
                <div style={{margin: '20px', textAlign: "center"}}>
                    <h1 style={{fontSize: "60px"}}>
                        Hi, I'm Eric!
                    </h1>
                    <h3 style={paragraphCSS}>
                        I'm a software architect who recently graduated with a B.S. in computer science from the University of California San Diego.
                    </h3>
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

const HomeCSS = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    fontSize: `calc(10px + 2vmin)`
}
const bodyCSS = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "175px 75px"
}

const paragraphCSS = {
    color: "#A8A8A8", 
    textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
    font: "16px/1.9em 'LibreBaskerville Regular', serif"
}
export default getHome;