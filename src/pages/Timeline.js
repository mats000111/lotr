import React from "react";
import { Container } from "reactstrap";
import TimelineSectionsList from "../features/counter/timeline/timelineList";

const Timeline = () => {
    return (
        <Container>
            {/* <Row>
                <p>different sections will go here containing:
                    1. date
                    2. event
                    3. image
                    onclick will turn into card with video and description
                </p>
            </Row> */}
            <TimelineSectionsList />
        </Container>
        
        //later on option to add a section
    );
};

export default Timeline;