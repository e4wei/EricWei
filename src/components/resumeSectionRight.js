
function ResumeSectionRight(props) {
    return (
        <div id="Resume section right container" style={rightContainerCSS}>
            <div id="Resume section right text container" style={rightTextContainerCSS}>
                <div style={rightTextCSS}>
                    <h2 style={rightTitleCSS}> {props.title} </h2>
                    <p style={rightSubTitleCSS}>
                        {props.subtitle}
                        <span style={{margin: "0 5px"}}> • </span>
                        <em style={{font: `15px/24px 'opensans-regular', sans-serif`}}>
                            {props.date}
                        </em>
                    </p>
                    <p style={rightBodyCSS}>
                        {props.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

const rightContainerCSS = {
    width: "75%",
    float: "right"
}

const rightTextContainerCSS = {
    position: 
    "relative", 
    padding: "0 20px", 
    float: "left"
}

const rightTextCSS = {
    width: "auto", 
    maxWidth: "none", 
    margin: "0 20px"
}

const rightTitleCSS = {
    font: `bold 25px/30px 'opensans-bold', sans-serif`
}

const rightSubTitleCSS = {
    font: `italic 18px/24px 'LibreBaskerville Italic', serif`,
    color: "#6E7881",
    marginBottom: "18px",
    marginTop: "9px"
}

const rightBodyCSS = {
    color: "#838C95",
    font: "15px/30px 'opensans-regular', sans-serif"
}


export default ResumeSectionRight;