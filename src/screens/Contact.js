import React from 'react';
import {Message} from 'semantic-ui-react';

const Contact = () => {
    return (
        <div align="center">
            <Message textAlign="center">
                All professional inquiries should be directed to
                <a href={"mailto:leonid@ac93.org"}>{" "} my Email</a>.
            </Message>
        </div>
    );
};

export default Contact;