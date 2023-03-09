import { useState } from "react";
import {
    Col,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, 
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { Player } from "video-react";
import { v4 as uuidv4 } from 'uuid';

const TimelineSection = ({ event }) => {
    const { name, date, description, image, video } = event;

    const [modal, setModal] = useState(false);
    const [prevModal, setPrevModal] = useState(false);
    const [nextModal, setNextModal] = useState(false);
    const [addDate, setAddDate] = useState("");
    const [addName, setAddName] = useState("");
    const [addDescription, setAddDescription] = useState("");
    const [addImage, setAddImage] = useState("");
    const [addVideo, setAddVideo] = useState("");

    const toggle = () => setModal(!modal);
    const togglePrevModal = () => setPrevModal(!prevModal);
    const toggleNextModal = () => setNextModal(!nextModal);

    const newSection = {
        id: uuidv4(),
        name: addName,
        date: addDate,
        description: addDescription,
        image: addImage,
        video: addVideo
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setAddName(value);
    }
    

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
                <Button onClick={togglePrevModal}>add previous section</Button>
                <Button onClick={toggle}>Details</Button>
                <Button onClick={toggleNextModal}>add next section</Button>
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
            <Modal isOpen={prevModal} size="lg">
                <ModalHeader toggle={() => setPrevModal(false)}>Create your own section</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label
                                for="dateInput"
                                sm={2}
                            >
                                Event Date
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dateInput"
                                    name="date"
                                    placeholder="date"
                                    type="text"
                                    value={addDate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="nameInput"
                                sm={2}
                            >
                                Event Name
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="nameInput"
                                    name="name"
                                    placeholder="name"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="descriptionInput"
                                sm={2}
                            >
                                Event Description
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="descriptionInput"
                                    name="description"
                                    placeholder="description"
                                    type="textarea"
                                    rows={6}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="imageInput"
                                sm={2}
                            >
                                Event Image
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="imageInput"
                                    name="image"
                                    placeholder="image"
                                    type="file"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="videoInput"
                                sm={2}
                            >
                                Event Video
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="videoInput"
                                    name="video"
                                    placeholder="youtube-video url"
                                    type="url"
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={nextModal}>
                <ModalHeader toggle={() => setNextModal(false)}></ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label
                                for="dateInput"
                                sm={2}
                            >
                                Event Date
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="dateInput"
                                    name="date"
                                    placeholder="date"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="nameInput"
                                sm={2}
                            >
                                Event Name
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="nameInput"
                                    name="name"
                                    placeholder="name"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="descriptionInput"
                                sm={2}
                            >
                                Event Description
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="descriptionInput"
                                    name="description"
                                    placeholder="description"
                                    type="textarea"
                                    rows={6}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="imageInput"
                                sm={2}
                            >
                                Event Image
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="imageInput"
                                    name="image"
                                    placeholder="image"
                                    type="file"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="videoInput"
                                sm={2}
                            >
                                Event Video
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="videoInput"
                                    name="video"
                                    placeholder="youtube-video url"
                                    type="url"
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </Row>
    );
};

export default TimelineSection;