import React from 'react';
import {List} from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';

const skills = {
    Javascript: 5,
    Java: 4,
    Python3: 5,

};

const Skills = () => {
    const starRatings = [];
    for (const skill in skills) {
        if (skills.hasOwnProperty(skill)) {
            starRatings.push(
                <List.Item>
                    <StarRatings
                        rating={skills[skill]}
                        numberOfStars={5}
                        name={skill}
                        starRatedColor="white"
                        starEmptyColor="#3b004d"
                    />
                    {skill}
                </List.Item>
            );
        }
    }
    return (
        <div>
            <List>
                {starRatings}
            </List>
        </div>
    );
};

export default Skills;