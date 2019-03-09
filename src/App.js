import React, { Component } from 'react';
import { Message, Divider, Header, Grid, Tab, Icon, Menu } from "semantic-ui-react";
import Breakpoint from "react-socks";
import './App.css';
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import AboutMe from "./screens/AboutMe";
// import References from "./screens/References";
import Contact from "./screens/Contact";
import ProfilePicture from "./components/ProfilePicture";
import SocialMediaLinks from "./components/SocialMediaLinks";
import resume from "./img/resume.pdf";
import Skills from "./screens/Skills";

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
                                <Header as="h2" textAlign="center">Leo Belyi</Header>
                                <Header as="h4" textAlign="center">Software Engineer and Entrepreneur</Header>
                            </Message>
                            <ProfilePicture/>
                        </Grid.Column>
                        <Grid.Column floated="right" width={1}/>
                    </Grid.Row>
                    <Grid.Row/>
                </Grid>
                <Tab menu={{fixed: "top", widths: 5, size: "large"}} textAlign="center"
                    panes={[{
                        menuItem:
                            <Menu.Item key={0}>
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
                            <Menu.Item key={1}>
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
                            <Menu.Item key={2}>
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
                            <Menu.Item key={3} href={resume}>
                                <Icon name="file alternate outline"/>
                                <Breakpoint m up>Resume</Breakpoint>
                            </Menu.Item>,
                        render: () => (
                            <div align="center">
                                <p>If the link doesn't immediately load, click  {" "}
                                    <a href={resume}>here</a>!</p>
                            </div>
                        )

                    },{
                    //     menuItem:
                    //         <Menu.Item key={4}>
                    //             <Icon name="star"/>
                    //             <Breakpoint m up>Skills</Breakpoint>
                    //         </Menu.Item>,
                    //     render: () => {
                    //         return (
                    //             <Skills/>
                    //         );
                    //     }
                    // },{
                    //     menuItem:
                    //         <Menu.Item key={4}>
                    //             <Icon name="group"/>
                    //             <Breakpoint m up>References</Breakpoint>
                    //         </Menu.Item>,
                    //     render: () => {
                    //         return (
                    //             <References/>
                    //         );
                    //     }
                    // },{
                        menuItem:
                            <Menu.Item key={5}>
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
                <Divider hidden/>
                <Divider/>
                <SocialMediaLinks/>
            </div>
        );
    }
}

export default App;
