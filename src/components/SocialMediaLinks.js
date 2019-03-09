import React from 'react';
import {Grid} from 'semantic-ui-react';
import {SocialIcon} from 'react-social-icons';

const SocialMediaLinks = () => {
    return (
        <div align="center">
            <Grid columns={7} stretched>
                <Grid.Column/>
                <Grid.Column/>
                <Grid.Column>
                    <SocialIcon url="https://www.facebook.com/leo.ntel.1"/>
                </Grid.Column>
                <Grid.Column>
                    <SocialIcon url="https://www.linkedin.com/in/leonid-belyi/"/>
                </Grid.Column>
                <Grid.Column>
                    <SocialIcon url="https://github.com/LeoTheMighty"/>
                </Grid.Column>
                <Grid.Column/>
                <Grid.Column/>
            </Grid>
        </div>
    );
};

export default SocialMediaLinks;