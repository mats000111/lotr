import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
import introVid from "../assets/videos/intro.mp4"
import profilePic from "../assets/images/profile-pic.jpg"
import balrog from "../assets/images/balrog.jpg"

const Home = () => {
    return (
        <div className="background-map">
            <Container className="opacity">
                <Row>
                    <Col className="text-center">
                        <h2 >Welcome To Middle Earth!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-div">
                        <h3>Follow The Journey Of The Fellowship Of The Ring</h3>
                    </Col>
                <Row>
                    <Col>
                        <Player height={500} width fluid={false} poster={balrog}>
                            <source src={introVid}/>
                        </Player>
                    </Col>
                </Row>
                </Row>
                <Row className="center-div-vertical">
                    <Col className="center-div">
                        <h3>About This Website</h3>
                    </Col>
                    <Col>
                        In the timeline page you can follow the events in order that the fellowship of the ring had to undertake to destroy the one ring.<br/>
                        You will find the date (according to the Tolkien mythology) along with a brief description and video of each event.<br/>
                        Please feel free to create your own timeline by adding new sections or adjusting existing settings. Upload a new video and change the fate of the fellowship.<br/>
                        Will Frodo make it to mount doom? Or will Sauron rule over middle earth?

                    </Col>
                    <Col>
                        In the characters and locations pages you can find each major character and location from the movies and books.<br/>
                        Click on the names to find out more detailed information.
                    </Col>
                </Row>
                <Row>
                    <Col className="center-div">
                        <h3>About myself</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>My name is Mats. And as you might have been able to guess by now, a bit of a fan of the lord of the rings. I am 27 years old by the time of this writing. With this project I would like to demonstrate my first ever React project</Col>
                    <Col className="text-center"><img src={profilePic} width="300px" height="auto"/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;