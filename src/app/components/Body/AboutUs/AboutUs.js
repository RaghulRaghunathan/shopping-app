import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return <div className="body about-us">
        <Col className="p-0">
            <Row className="m-0 info-1">
                <Col className="content">
                    <div className="title-1">A history of</div>
                    <div className="title-2">good business.</div>
                    <div className="m-0 message-content d-flex">
                        <div className="p-0"><div className="divider"></div></div>
                        <div className="p-0 message">
                            <div className="message-1">HON didn’t become the most recognized name in office furniture overnight.
                                Since 1944 our products have helped doers like you achieve more workday victories.
                                The bold idea successfully sold to the tough manager happens in our chairs.
                                The click of our file cabinet drawer signals another project well done.
                                Cleaning off the top of our table, just to get it dirty again.
                            </div>
                            <div className="message-2">
                                Whether the pressure is on, or the rest of the office is gone,
                                we’re right there with you. To help you work smarter, more comfortably and on your terms.
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={3} className="p-0">
                    <img src={require('../../../../assets/images/about-us-1.png')} alt=""
                    width="100%" height="600px"/>
                </Col>
            </Row>
            <Row className="m-0 info-2">
                <Col className="content">
                    <div className="message-content">
                        <div className="title">Work smart.</div>
                        <div className="message">
                            HON’s award-winning designers and forward-thinking engineers never stop tinkering.
                            That curiosity creates furniture that’s easier to use. And more importantly,
                            furniture that makes you more comfortable.
                        </div>
                        <div className="message">
                            Designed to be timeless, not trendy.
                        </div>
                        <div className="message">
                            Putting FIT before FINISH keeps us focused on performance, not just appearance.
                            The end results are simple, clean products that never go out of style. For example, 
                            we still get requests for spare keys to file cabinets we built in the ‘70s.
                        </div>
                        <div className="message">
                            HON office furniture is designed by people who are empowered to do what’s best.
                            For our customers. For each other. And for our communities.
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6} className="p-0">
                    <img src={require('../../../../assets/images/about-us-2.png')} alt=""
                        width="100%" height="600px"/>
                </Col>
            </Row>
            <Row className="m-0 info-3">
                <Col lg={6} md={6} sm={6} className="p-0">
                    <img src={require('../../../../assets/images/about-us-3.png')} alt=""
                            width="100%" height="600px"/>
                </Col>
                <Col className="content">
                    <div className="message-content">
                        <div className="title">Work well.</div>
                        <div className="message">
                            To HON, even one-eighth of an inch of space can make a huge difference in how you work. 
                            That’s why we go to extremes to build office furniture that helps you work better.
                        </div>
                        <div className="message">
                            For instance, industry standards require us to do extensive testing before furniture leaves our facility.
                            And we don’t think it’s enough. In many cases we go 15 steps beyond expectations.
                        </div>
                        <div className="message">
                            After all that, we’re still not done. We let real people test-drive our products.
                            Because machines can’t predict what humans will do.
                        </div>
                        <div className="message">
                            Something else that works well?
                        </div>
                        <div className="message">
                            Our lean and green approach to building products.
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 info-4">
                <Col lg={6} md={6} sm={6} className="p-0">
                    <img src={require('../../../../assets/images/about-us-4.png')} alt=""
                            width="100%" height="600px"/>
                </Col>
                <Col className="content">
                    <div className="message-content">
                        <div className="title">ALWAYS AROUND TO DO THE RIGHT THING</div>
                        <div className="message">
                            HON doesn’t shy away from feedback. Actively seeking out customer opinions helps
                            ensure we build products that address needs, not trends.
                        </div>
                        <div className="message">
                            When you need help finding office furniture, there’s a HON dealer close to your
                            front door. No matter where you buy HON, it’s backed by our Full Lifetime 
                            Warranty. So if something goes wrong, we’ll fix it, replace it or give you 
                            your money back.
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    </div>
}

export default AboutUs;