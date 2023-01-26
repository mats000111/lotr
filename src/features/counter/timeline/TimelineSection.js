import { Col, Row, Player } from "reactstrap";

const TimelineSection = ({ event }) => {
    const { name, date, description, image, video } = event;

    return (
        <Row>
            <Col>
                {date}
            </Col>
            <Col>
                {name}            
            </Col>
            <Col>
                {image}
            </Col>
        </Row>
    );
};

export default TimelineSection;