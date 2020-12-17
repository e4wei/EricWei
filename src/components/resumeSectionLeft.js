function ResumeSectionLeft(props) {
    return (
        <div style={leftContainerCSS}>
            <div style={leftTextContainerCSS}>
                <h1>
                    <span style={textCSS}>
                        {props.title}
                    </span>
                </h1>
            </div>
        </div>
    )
}

const leftContainerCSS = {
    width: "25%",
    textTransform: "uppercase",
    letterSpacing: "1px",
    float: "left"
}

const leftTextContainerCSS = {
    position: "relative", 
    padding: "0 20px"
}

const textCSS = {
    paddingBottom: "6px",
    borderBottom: "3px solid #11ABB0",
    font: "bold 18px/24px opensans-bold, sans-serif"
}

export default ResumeSectionLeft;