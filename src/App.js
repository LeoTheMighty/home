import React, { Component } from 'react';
import { Message, Segment, Header, Grid, Tab, Icon, Menu } from "semantic-ui-react";
import './App.css';
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import AboutMe from "./screens/AboutMe";
import Resume from "./screens/Resume";
import References from "./screens/References";
import Contact from "./screens/Contact";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid rows={3} columns={3} style={{marginTop: "0px"}}>
                    <Grid.Row/>
                    <Grid.Row>
                        <Grid.Column/>
                        <Grid.Column>
                            <Message className="u-bg--primaryGradient">
                                <Header as="h2" textAlign="center" fluid>Leo Belyi</Header>
                                <Header as="h4" textAlign="center" fluid>Software Engineer and Entrepreneur</Header>
                            </Message>
                        </Grid.Column>
                        <Grid.Column/>
                    </Grid.Row>
                    <Grid.Row/>
                </Grid>
                <Tab menu={{fixed: "top", widths: 6, size: "large", inverted: false}} textAlign="center"
                    panes={[{
                        menuItem:
                            <Menu.Item key={0}><Icon name="user circle outline"/>About Me</Menu.Item>,
                        render: () => {
                            return (
                                <AboutMe/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}><Icon name="laptop"/>Projects</Menu.Item>,
                        render: () => {
                            return (
                                <Projects/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}><Icon name="suitcase"/>Experience</Menu.Item>,
                        render: () => {
                            return (
                                <Experience/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}><Icon name="file alternate outline"/>Resume</Menu.Item>,
                        render: () => {
                            return (
                                <Resume/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}><Icon name="group"/>References</Menu.Item>,
                        render: () => {
                            return (
                                <References/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}><Icon name="text telephone"/>Contact</Menu.Item>,
                        render: () => {
                            return (
                                <Contact/>
                            );
                        }
                    }]}
                />
            </div>
        );
    }
}

export default App;
