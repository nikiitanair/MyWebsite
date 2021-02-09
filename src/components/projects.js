import React, {Component} from 'react'
import { Carousel,Card, Button } from 'react-bootstrap'


export default class Project extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Projects</span>
                                <h2 className="colorlib-heading">Here are few projects I've undertaken</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Budget Recommendation using MATLAB</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/smart-interviewer.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}>Created a website which takes financial data as input from the user and gives recommendations to reduce the user's expenses. 
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em>HTML, CSS, JavaScript, MySQL, MATLAB</Card.Footer>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Classroom Automation using RFID Sensor</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/Curiosity.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}> Used Arduino UNO to automate a classroom and interfaced it with RFID receiver 

                                <br>
                                </br>
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em> Embedded System, Sensor, Receiver</Card.Footer>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Arduino based Automatic Irrigation System</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/irrigatio.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}> Used Arduino UNO to water plants automatically by interfacing it with a micro servo, water pump and soil moisture sensors 
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em>  Embedded System, Sensor, Receiver</Card.Footer>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
