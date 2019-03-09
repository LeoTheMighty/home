import React from 'react';
import {List, Message, Header} from "semantic-ui-react";
import _ from "lodash";

const LincolnLabs = () => [
    <Header>Lincoln Labs</Header>,
    <p><i><b>Beaver Works Summer Institute Teaching Assistant</b></i><br/>
        <ul>
            <li>Taught students across the U.S. about developing software for autonomous vehicles with ROS, Python, and OpenCV</li>
            <li>Worked with R.A.C.E. C.A.R, MIT’s own mini autonomous car using a ZED Camera, a GPU, a LIDAR, and a IMU</li>
            <li>Wrote exercises, example code, and tutorials for students and guided students through the lesson plans</li>
            <li>Wrote a program to detect AR tags from a camera and draw its outline on a display, utilizing 3D rotational matrices</li>
        </ul>
    </p>
];

const experiences = [
    <LincolnLabs/>
];

const Experience = () => {
    return (
        <div>
            <List>
                {_.times(experiences.length, (i) => (
                    <List.Item key={i}>
                        <Message>
                            {experiences[i]}
                        </Message>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};

export default Experience;