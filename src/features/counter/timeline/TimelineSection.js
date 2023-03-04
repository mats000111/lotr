import { useState } from "react";
import { Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Player } from "video-react";

const TimelineSection = ({ event }) => {
    const { name, date, description, image, video } = event;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

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
            <Col className="col-1">
                <Button>add previous section</Button>
                <Button onClick={toggle}>Details</Button>
                <Button>add next section</Button>
            </Col>
            <Modal isOpen={modal}>
                <ModalHeader toggle={() => setModal(false)}>{name}</ModalHeader>
                <ModalBody>
                    <div>
                        <Player>
                            <source src={video}/>
                        </Player>
                    </div>
                    <div>
                        {description}
                    </div>
                </ModalBody>
            </Modal>
        </Row>
    );
};

export default TimelineSection;