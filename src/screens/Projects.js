import React from 'react';
import {List, Header, Message} from 'semantic-ui-react';
import _ from "lodash";

const VastusProject = () => [
    <Header>Vastus Venture</Header>,
    <p><i><b>Co-Founder of Vastus Technologies and Full Stack Developer for Vastus Web Apps - {" "}
        <a href="https://www.vastus.fit">www.vastus.fit</a> ~ <a href="https://www.vastus.pro">www.vastus.pro</a></b></i><br/>
        <ul>
            <li>Managed a team of 3 developers and a freelancer to develop a ReactJS PWA using a scrum-style Agile methodology</li>
            <li>Began a venture for a challenge-based fitness app, gathering software requirements from and partnering with trainers</li>
            <li>Designed and developed a ReactJS PWA and a backend with AWS, leveraging DynamoDB, a NoSQL database</li>
            <li>Implemented frontend logic and UI components using Redux, Semantic UI, and various React libraries from NPM</li>
        </ul>
    </p>
];

const ApocalypseLaterProject = () => [
    <Header>Apocalypse Later</Header>,
    <p><i><b>Created as a final project for NEU Class PHIL 1260. {" "}<a href="https://github.com/LeoTheMighty/ApocalypseLater">Github Link</a>!</b></i><br/>
        <ul>
            <li>Managed a team of 3 developers and a freelancer to develop a ReactJS PWA using a scrum-style Agile methodology</li>
            <li>Began a venture for a challenge-based fitness app, gathering software requirements from and partnering with trainers</li>
            <li>Designed and developed a ReactJS PWA and a backend with AWS, leveraging DynamoDB, a NoSQL database</li>
            <li>Implemented frontend logic and UI components using Redux, Semantic UI, and various React libraries from NPM</li>
        </ul>
    </p>
];

const SoftwareEngineeringClassProject = () => [
    <Header>Software Engineering Class (WPI CS 3733)</Header>,
    <p><i><b>Assistant Lead Software Engineer</b></i><br/>
        <ul>
            <li>Competed in a ten-person student team using the scrum-style Agile methodology and Java software design patterns</li>
            <li>Created an indoor path-finding app, map builder, and service request module for Brigham & Women’s main campus</li>
            <li>Gathered requirements from surveys, interviews, user stories, storyboards, and developed the framework with UML</li>
            <li>Led database and server teams, designed class hierarchy, and implemented Java sockets to enable real time updates</li>
        </ul>
    </p>
];

const WordsWithFriendsCheaterProject = () => [
    <Header>Words With Friends Solver</Header>,
    <p><i><b>Personal {" "} <a href="https://github.com/LeoTheMighty/words-with-friends-cheater">project</a></b></i><br/>
        <ul>
            <li>Wrote a “Words With Friends” (similar to Scrabble) cheater script to beat my girlfriend at the mobile game</li>
            <li>Created a Python 3 script that inputs the current board and available pieces, and outputs the best-valued moves</li>
            <li>Used permutations for iteration and utilized Dynamic Programming concepts in order to increase the efficiency</li>
        </ul>
    </p>
];

const CPlusPlusIndependentStudy = () => [
    <Header>C++ Independent Study Projects</Header>
];

const projects = [
    <VastusProject/>,
    <SoftwareEngineeringClassProject/>,
    <WordsWithFriendsCheaterProject/>,
];

const Projects = () => {
    return (
        <div>
            <List>
                {_.times(projects.length, (i) => (
                    <List.Item key={i}>
                        <Message>
                            {projects[i]}
                        </Message>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

export default Projects;