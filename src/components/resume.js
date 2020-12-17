import ResumeSectionLeft from './resumeSectionLeft'
import ResumeSectionRight from './resumeSectionRight.js';

function Resume() {
    return (
        <div style={resumeCSS} id="resume">
        {resumeSection(Education)}
        {resumeSection(WorkExperience)}
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
    marginBottom: "48px",
    marginLeft: "48px",
    paddingBottom: "24px",
    borderBottom: "1px solid #E8E8E8",
    width: "96%",
    //maxWidth: "1020px",
    display: "inline-flex"
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
    body: "Describe your experience at school, what you learned, what useful skills you have acquired etc."
}

var Education = {
    left: EducationLeft,
    right: [EducationRight],
    id: "Education"
}

var WorkExperienceLeft = {
    title: "Work Experience"
}
var CliniCompInfo = {
    title: "CliniComp, Intl.",
    subtitle: "Software Engineer Intern",
    date: "June 2019 - September 2019",
    body: "Rebuilt core data visualization widgets in ReactJS with hooks and redux for over 1.5 times loading speed boost and tested iteratively using Chrome developer tools. Designed a new configuration format for client side pages to use as well as a Node script to automate converting the old format."
}

var WorkExperience = {
    left: WorkExperienceLeft,
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
    body: ""
}

var ProjectsRight = [AltiSlackApp]

var Projects = {
    left: ProjectsLeft,
    right: ProjectsRight,
    id: "Projects"
}

export default Resume;