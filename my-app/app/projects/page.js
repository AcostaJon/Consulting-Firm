'use client'
// react component
import { useEffect, useState } from "react";
// bootstrap components
import { Col, Container } from "react-bootstrap";
import Styles from './page.module.css'
import Row from 'react-bootstrap/Row';
// images
import Groupwork from "../components/images/groupwork";

export default function Projects() {
    // state
    const [render, setRender] = useState(false)

    // run after render
    useEffect(() => {
        // invoke obersve
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


    //  if true render page
    if (render) {
        return (
            <>
                <div className={Styles.projects}>
                    {/* Page Title */}
                    <h1 className="text-center pt-4 pb-4 animation">PROJECTS</h1>
                    {/* First 2 projects */}
                    <section className="mt-lg-5">
                        <Container>
                            <Row xs={1} lg={2} xl={4} className={`${Styles.row} justify-content-lg-around animation`}>
                                {/* Project 1 */}
                                <Col className="my-4">
                                    {/* image */}
                                    <Groupwork />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">PROJECT 1</h2>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                </Col>
                                {/* Project 2 */}
                                <Col className="my-4">
                                    {/* image */}
                                    <Groupwork />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">PROJECT 2</h2>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    {/* Second 2 projects */}
                    <section className="mb-lg-5">
                        <Container>
                            <Row xs={1} lg={2} xl={4} className={`${Styles.row} justify-content-lg-around pb-4 animation`} >
                                {/* Project 3 */}
                                <Col className="my-4">
                                    {/* image */}
                                    <Groupwork />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">PROJECT 3</h2>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                </Col>
                                {/* Project 4 */}
                                <Col className="my-4">
                                    {/* image */}
                                    <Groupwork />
                                    {/* name */}
                                    <h2 className="fw-light mt-4 mt-lg-5">PROJECT 4</h2>
                                    {/* description */}
                                    <p className="my-4 fw-light">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                </div>
            </>
        )
    } else {
        // if not true return "loading"
        return (
            <h1 className={"text-center blink-1 loading"}>James Consulting...</h1>
        )
    }

}