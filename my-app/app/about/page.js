'use client'
// react component
import { useEffect, useState } from "react";
// bootstrap components
import { Col, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
// css
import Styles from './page.module.css'
// image components
import Groupwork from "../components/images/groupwork";
import Worker1 from "../components/images/worker1";
import Worker2 from "../components/images/worker2";
import Worker3 from "../components/images/worker3";
import Worker4 from "../components/images/worker4";


export default function About(params) {
    // state
    const [render, setRender] = useState(false)

    // run after render
    useEffect(() => {
        // inovoke observe()
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
                <div className={Styles.about}>
                    {/* Page Title */}
                    <h1 className="text-center pt-4 pb-4 ">ABOUT</h1>

                    {/* About Section */}
                    <section className="text-justify">
                        <Container className="my-lg-3">
                            <Row className="align-items-center justify-content-lg-between mb-5 py-lg-5">
                                {/* description */}
                                <Col lg={3} className="mt-3 mb-3 animation">
                                    <p className="fw-light"> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    <p className="fw-light">
                                        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                                    </p>
                                </Col>
                                {/* image */}
                                <Col lg={8} >
                                    <Groupwork />
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Our Team section */}
                    <section className="text-center py-5 animation">
                        <Container>
                            <h2 className="fw-light">OUR TEAM</h2>
                            <p className="fw-light">
                                I'm a paragraph. Click here to add your own text and edit me.
                            </p>
                        </Container>
                    </section>


                    {/* First 2 employees */}
                    <section className="my-lg-5">
                        <Container>
                            <Row xs={1} md={3} className={`${Styles.employeeRow} justify-content-md-between`} >
                                {/* employee 1 */}
                                <Col className="my-3">
                                    {/* image */}
                                    <Worker1 />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">Dominick James</h2>
                                    {/* profesion */}
                                    <h3 className="fw-bold">Founder and Principal</h3>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </Col>
                                {/* employee 2 */}
                                <Col className="my-3 ">
                                    {/* image */}
                                    <Worker2 />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">GRACE RIOS</h2>
                                    {/* profession */}
                                    <h3 className="fw-bold">Project Manager</h3>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    {/* Second 2 employees */}
                    <section className="mb-lg-5">
                        <Container>
                            <Row md={3} className={`${Styles.employeeRow} justify-content-md-between`}>
                                {/* employee 3 */}
                                <Col className="my-3">
                                    {/* image */}
                                    <Worker3 />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">KIM BAILEY</h2>
                                    {/* profession */}
                                    <h3 className="fw-bold">VP Marketing</h3>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </Col>
                                {/* employee 4 */}
                                <Col className="my-3">
                                    {/* image */}
                                    <Worker4 />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">RACHEL SINCLAIR</h2>
                                    {/* profession */}
                                    <h3 className="fw-bold">VP Accounts</h3>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
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