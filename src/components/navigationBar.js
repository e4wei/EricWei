import Pdf from '../ResumeFinal.pdf';
import React, { useState, useEffect } from 'react';

function NavBar() {
    const items = [{name: "Home", id: "Body"}, 
                    {name: "Education", id: "Education"}, 
                    {name: "Experience", id: "Experience"}, 
                    {name: "Projects", id: "Projects"},
                    {name: "Resume", id: "Resume"}
                ];

    function changeToHoverColor(e) {
        e.target.style.color = "#F06000";
    }
    function changeToNonHoverColor(e) {
        e.target.style.color = "white";
    }

    const [isScroll, setScrolled] = React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 300 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    return (
        <div>
            <ul id = "nav" style={isScroll ? navCSS : navCSS}>
                {items.map((item, index) => {
                    return (
                    <li key={item, index}>
                        <a onMouseEnter={changeToHoverColor} 
                            onMouseLeave={changeToNonHoverColor} 
                            href={(item.name === "Resume") ? Pdf : ('#'+item.id)}
                            style={navItemCSS}>{item.name}</a>
                    </li>)
                })}
            </ul>
        </div>
    )
}

var navCSS = {
    width: "auto",
    listStyle: "none",
    //backgroundColor: "white",
    //borderBottom: "1px solid #ccc",
    minHeight: "48px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    margin: "0 0 0 0",
    padding: "10px"
}

var navScrollCSS = {
    width: "auto",
    listStyle: "none",
    //backgroundColor: "white",
    //borderBottom: "1px solid #ccc",
    minHeight: "48px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    margin: "0 0 0 0",
    padding: "10px",
    position: "fixed",
    top: "0",
    left: "0"
}

const navItemCSS = {
    display: "inline-block",
    padding: "8px 13px",
    lineHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    //color: "#0b4fba",
    color: "white",
    font: "24px/32px 'LibreBaskerville Regular', serif"
}

export default NavBar;