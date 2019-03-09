import React, { Component } from 'react';
import { Message, Segment, Header, Grid, Tab, Icon, Menu } from "semantic-ui-react";
import Breakpoint from "react-socks";
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
                        <Grid.Column floated="left" width={1}/>
                        <Grid.Column width={13}>
                            <Message>
                                <Header as="h2" textAlign="center" fluid>Leo Belyi</Header>
                                <Header as="h4" textAlign="center" fluid>Software Engineer and Entrepreneur</Header>
                            </Message>
                        </Grid.Column>
                        <Grid.Column floated="right" width={1}/>
                    </Grid.Row>
                    <Grid.Row/>
                </Grid>
                <Tab menu={{fixed: "top", widths: 6, size: "large"}} textAlign="center"
                    panes={[{
                        menuItem:
                            <Menu.Item primary key={0}>
                                <Icon name="user circle outline"/>
                                <Breakpoint m up>About Me</Breakpoint>
                            </Menu.Item>,
                        render: () => {
                            return (
                                <AboutMe/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item primary key={0}>
                                <Icon name="laptop"/>
                                <Breakpoint m up>Projects</Breakpoint>
                            </Menu.Item>,
                        render: () => {
                            return (
                                <Projects/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}>
                                <Icon name="suitcase"/>
                                <Breakpoint m up>Experience</Breakpoint>
                            </Menu.Item>,
                        render: () => {
                            return (
                                <Experience/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}>
                                <Icon name="file alternate outline"/>
                                <Breakpoint m up>Resume</Breakpoint>
                            </Menu.Item>,
                        render: () => {
                            return (
                                <Resume/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}>
                                <Icon name="group"/>
                                <Breakpoint m up>References</Breakpoint>
                            </Menu.Item>,
                        render: () => {
                            return (
                                <References/>
                            );
                        }
                    },{
                        menuItem:
                            <Menu.Item key={0}>
                                <Icon name="text telephone"/>
                                <Breakpoint m up>Contact</Breakpoint>
                            </Menu.Item>,
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
