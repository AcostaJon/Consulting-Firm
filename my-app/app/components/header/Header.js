'use client'
// react components
import { useEffect, useState } from 'react';
import Link from 'next/link'
// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// image component
import Userimage from '../images/Userimage';
// css
import Styles from './header.module.css'

function Header() {
    // state
    const [animate, setAnimate] = useState(true);

    // run after render
    useEffect(() => {
        // enovke showHideNav function
        showHideNav()
    });

    // show/hide navigation affect
    function showHideNav(params) {
        // get user previous scroll position (y)
        let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            // get window current scroll position
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                // scroll up
                // update state
                setAnimate(true)
            } else {
                // scroll down
                // update state
                setAnimate(false)
            }
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <>
            {/* Navigation - on large device expand navigation bar  */}
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className={`${animate ? "slideInTop" : "slideInTopReverse"} ${Styles.navbar} fixed-top`} >
                    <Container className='mx-lg-5 my-2' fluid>
                        {/* logo */}
                        <Navbar.Brand href="/">JAMES CONSULTING</Navbar.Brand>
                        {/* hamburger button */}
                        <Navbar.Toggle className={Styles.hamburger} aria-controls="navbarScroll" />
                        {/* offcanvas menu */}
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="top"
                        >
                            {/* menu header */}
                            <Offcanvas.Header className='pt-4' closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    {/* login/user link */}
                                    <Link href="/">
                                        <div className='d-flex align-items-center ms-4'>
                                            {/* user image */}
                                            <Userimage />
                                            {/* login dec */}
                                            <p className='ms-3 mb-0'>Log In</p>
                                        </div>
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            {/* menu body */}
                            <Offcanvas.Body>
                                {/* navigation  items */}
                                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                    <Nav.Link href="/about" className='mb-4 mb-lg-0 fw-light'>About</Nav.Link>
                                    <Nav.Link href="/projects" className='mb-4 mb-lg-0 fw-light' >Projects</Nav.Link>
                                    <Nav.Link href="/services" className='mb-4 mb-lg-0 fw-light'>Services</Nav.Link>
                                    <Nav.Link href="/plans-pricing" className='mb-4 mb-lg-0 fw-light'>Plans & Pricing</Nav.Link>
                                    <Nav.Link href="/tools-tips" className='mb-4 mb-lg-0 fw-light'>Tools & Tips</Nav.Link>
                                    <Nav.Link href="/contact-us" className='mb-4 mb-lg-0 fw-light'>Contact</Nav.Link>
                                    <Nav.Link href="/" className='d-none d-lg-block'>
                                        {/* login/user link */}
                                        <div className='d-flex align-items-center ms-4'>
                                            {/* user image */}
                                            <Userimage />
                                            {/* login desc */}
                                            <p className='ms-3 mb-0'>Log In</p>
                                        </div>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;