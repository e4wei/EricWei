import ResumeSectionLeft from './resumeSectionLeft'
import ResumeSectionRight from './resumeSectionRight.js';

function Resume() {
    return (
        <div style={resumeCSS} id="resume">
        {resumeSection(Education)}
        {resumeSection(Work)}
        {resumeSection(Projects)}
        </div>
    )
}

function resumeSection(props) {
    return (
        <div style={resumeSectionCSS} id={props.id}>
            <ResumeSectionLeft {...props.left}></ResumeSectionLeft>
            {props.right.map((right) => <ResumeSectionRight {...right}></ResumeSectionRight>)}
        </div>
    )
}


const resumeSectionCSS = {
    margin: "0 auto 48px",
    paddingBottom: "24px",
    borderBottom: "1px solid #E8E8E8",
    width: "96%",
    maxWidth: "1020px",
    display: "table"
}

const resumeCSS = {
    background: "#fff",
    paddingTop: "90px",
    paddingBottom: "72px",
    overflow: "hidden"
}


var EducationLeft = {
    title: "Education"
}
var EducationRight = {
    title: "University of California San Diego",
    subtitle: "B.S. in Computer Science",
    date: "September 2016 - June 2020",
    body: "During my time at UCSD, I attended a broad curriculum of comp-sci classes. The classes I took ranged from the basics of algorithms, computer architecture, and discrete mathematics to the different focuses within computer science such as networks, deep learning, AI, compilers, and software engineering. "
}

var Education = {
    left: EducationLeft,
    right: [EducationRight],
    id: "Education"
}

var WorkLeft = {
    title: "Experience"
}
var CliniCompInfo = {
    title: "CliniComp, Intl.",
    subtitle: "Software Engineer Intern",
    date: "June 2019 - September 2019",
    body: "Rebuilt core data visualization widgets in ReactJS with hooks and redux for over 1.5 times loading speed boost and tested iteratively using Chrome developer tools. Designed a new configuration format for client side pages to use as well as a Node script to automate converting the old format."
}

var Work = {
    left: WorkLeft,
    right: [CliniCompInfo],
    id: "Experience"
}

var ProjectsLeft = {
    title: "Projects"
}

var AltiSlackApp = {
    title: "Alti Slack App",
    subtitle: "Software Architect",
    date: "Spring 2020",
    body: "Agile style team focused on building an app to boost productivity. Built the Alti Slack App that pairs coworkers up and enables sending custom warmups and cooldowns using Javascript, Slack API, Firebase database, and Google Scheduling API.",
    links: ["https://github.com/cse112-sp20/CSE112-Alti"]
}


var Octopet = {
    title: "Octopet",
    subtitle: "USC Hackathon",
    date: "Spring 2019",
    body: "At HackSC, built a fun app to track healthy eating- take a picture of your food to feed your virtual pet who reacts relative to how healthy the food is. Used Firebase Machine learning kit to label images and Android Studio to build the app."
}

var Projects = {
    left: ProjectsLeft,
    right: [AltiSlackApp, Octopet],
    id: "Projects",
}

export default Resume;