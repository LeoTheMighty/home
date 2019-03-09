import React from 'react';
import { Grid, Card, Header, Container, Message, Divider } from 'semantic-ui-react';
import ProfilePicture from "../components/ProfilePicture";

/*
Put your picture, your name, your current status, and your elevator pitch
 */
const AboutMe = () => {
    return (
        <div>
            {/*<Container textAlign="center">*/}
                {/*<Message>*/}
                    {/*<Header>About me</Header>*/}
                {/*</Message>*/}
            {/*</Container>*/}
            {/*<Divider hidden/>*/}
            <Container textAlign="center">
                <Message>
                    My name is Leonid Belyi and I'm a Computer Science Student at the Khoury College of Computer
                    Sciences in Northeastern University. I'm a <i>fast</i> learner, a <i>dedicated</i> worker, and a <i>creative</i> thinker
                    and I am determined to leave my <b>impression</b> on the world in a positive way.<br/><br/>
                    I specialize in leading using the Scrum style methodology of Agile Software Development and I am
                    have the most experience in Full-Stack web development with React.js (what this site is written in),
                    back-end development with Python, node.js, and Java, and managing AWS tech stacks and integrating API
                    endpoints like GraphQL.
                </Message>
            </Container>
        </div>
    );
};

export default AboutMe;