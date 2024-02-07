'use client'
// reat component
import { useEffect, useState } from "react";
// bootstrap components
import { Button, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// css
import Styles from './page.module.css'
// image components
import Groupwork from "../components/images/groupwork";

export default function Services() {
    // state
    const [render, setRender] = useState(false)

    // run after code
    useEffect(() => {
        // inovoke observe
        observe()
    });

    //apply animation with IntersectionObserver js api
    function observe() {
        // scroll animation affect using intersection observer
        const observer = new IntersectionObserver((entries, observer) => {
            // collected elements in observer are called entries.
            // filter for elements intersecting with root, return array
            entries.filter(e => e.isIntersecting).forEach(entry => {
                // add fadeIn class to each entry in array
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            })
        })
        // select all elements with animation class, then collect the elements into observer
        document.querySelectorAll('.animation')
            .forEach(e => {
                observer.observe(e)
            })
        // update state
        setRender(true)
    }

    // if true render page
    if (render) {
        return (
            <>
                <div className={Styles.Services}>
                    {/* Page Title */}
                    <h1 className="text-center pt-4 pb-4 animation">SERVICES</h1>
                    {/* All Booking Section */}
                    <section>
                        <Container className="d-lg-flex flex-lg-column align-items-center">
                            {/* Booking 1 */}
                            <Row xs={1} lg={2} className={`${Styles.row} align-items-center justify-content-center my-5 mx-2 border border-1 border-black`} >
                                <Col className="p-0">
                                    <Groupwork />
                                </Col>
                                <Col className="py-3 px-4 py-lg-5 px-lg-5">
                                    <div className="d-flex flex-column flex-lg-row">
                                        <h3 className="fw-light me-2">PROJECT</h3>
                                        <h3 className="fw-light">MANAGEMENT</h3>
                                    </div>
                                    <p className="fw-light d-lg-none">Use this area to describe one of your services.</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">1 hr</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">$220</p>
                                    <Button className="bg-transparent text-black border border-1 border-black py-3 py-lg-1 my-lg-2 fw-light">Book Now</Button>
                                </Col>
                            </Row>
                            {/* Booking 2 */}
                            <Row xs={1} lg={2} className={`${Styles.row} align-items-center justify-content-center my-5 mx-2 border border-1 border-black`}>
                                <Col className="p-0">
                                    <Groupwork />
                                </Col>
                                <Col className="py-3 px-4 py-lg-5 px-lg-5">
                                    <div className="d-flex flex-column flex-lg-row">
                                        <h3 className="fw-light me-2">OPERATIONAL</h3>
                                        <h3 className="fw-light">CONSULTING</h3>
                                    </div>
                                    <p className="fw-light  d-lg-none">Use this area to describe one of your services.</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">1 hr</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">$150</p>
                                    <Button className="bg-transparent text-black border border-1 border-black py-3 py-lg-1 my-lg-2 fw-light">Book Now</Button>
                                </Col>
                            </Row>
                            {/* Booking 3 */}
                            <Row xs={1} lg={2} className={`${Styles.row} align-items-center justify-content-center my-5 mx-2 border border-1 border-black`}>
                                <Col className="p-0">
                                    <Groupwork />
                                </Col>
                                <Col className="py-3 px-4 py-lg-5 px-lg-5">
                                    <div className="d-flex flex-column flex-lg-row">
                                        <h3 className="fw-light me-2">CORPORATE</h3>
                                        <h3 className="fw-light">STRATEGY</h3>
                                    </div>
                                    <p className="fw-light  d-lg-none">Use this area to describe one of your services.</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">1 hr</p>
                                    <p className="fw-light ms-lg-0 my-lg-2">$170</p>
                                    <Button className="bg-transparent text-black border border-1 border-black py-3 py-lg-1 my-lg-2 fw-light">Book Now</Button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>

            </>
        )
    } else {
        // if not true render "loading"
        return (
            <h1 className={"text-center blink-1 loading"}>James Consulting...</h1>
        )
    }

}