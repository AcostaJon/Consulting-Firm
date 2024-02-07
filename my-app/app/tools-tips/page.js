'use client'
// react component
import { useEffect, useState } from "react";
// bootstrap components
import { Col, Container, Row, Button } from "react-bootstrap";
// css
import Styles from './page.module.css'
// image component
import SearchIcon from "../components/images/search";
import Ellipseverticle from "../components/images/ellipseverticle";
import Arrowdown from "../components/images/arrowdown";
import Sort from "../components/images/sort";
import Folder from "../components/images/folder";

export default function ToolsTips(params) {
    // state
    const [render, setRender] = useState(false)

    // run after render
    useEffect(() => {
        // invoke observe
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
            <div className={`${Styles.ToolsTips} text-center px-3 py-5`}>
                {/* Page Title */}
                <h1>TOOLS & TIPS</h1>
                {/* Description */}
                <p className={`${Styles.pageDesc} lh-lg my-5 mx-3 mx-auto`} >Use this area to upload files you wish to share with your users. You can manage who has access to your files and what they can do, such as view & download, upload items and more.</p>

                {/* Table */}
                <Container className={`${Styles.table} animation`}>
                    {/* First row*/}
                    <Row className="align-items-center">
                        {/* table title */}
                        <Col xs={9} className="text-start ps-0">
                            <p className="mb-0">Files & Folders</p>
                        </Col>
                        {/* search icon */}
                        <Col className="text-end pe-0">
                            <SearchIcon />
                        </Col>
                        {/* settings button */}
                        <Col className="d-lg-none text-end pe-0">
                            <Ellipseverticle />
                        </Col>
                        {/* add file button */}
                        <Col className="d-none  d-lg-flex justify-content-end pe-lg-0">
                            <Button className="px-lg-4 py-lg-3">
                                + File
                            </Button>
                        </Col>
                    </Row>
                    {/* Second row */}
                    <Row className="align-items-center mt-2 py-4 border-bottom">
                        {/* items title */}
                        <Col xs={8} lg={7} className="text-start ps-0">
                            <p className="d-inline">Item name </p>
                            <Arrowdown />
                        </Col>
                        {/* last updated title */}
                        <Col className="d-none d-lg-block">
                            <p className="mb-0">Last updated </p>
                        </Col>
                        {/* views title */}
                        <Col className="d-none d-lg-block">
                            <p className="mb-0">Views </p>
                        </Col>
                        {/* favorites title */}
                        <Col className="d-none d-lg-block">
                            <p className="mb-0">Favorites </p>
                        </Col>
                        {/* contributors title */}
                        <Col className="d-none d-lg-block">
                            <p className="mb-0">Contributors </p>
                        </Col>
                        {/* sort image */}
                        <Col className="d-none d-lg-flex flex-column align-items-end pe-0 ">
                            <Sort />
                        </Col>
                        {/* add file button */}
                        <Col className="d-lg-none text-end pe-0">
                            <Button className="rounded-circle py-2">
                                +
                            </Button>
                        </Col>
                    </Row>
                    {/* Third row*/}
                    <Row className="align-items-center mt-4 py-3 border-bottom justify-content-between">
                        {/* folder image */}
                        <Col className="d-none d-lg-block" lg={1}>
                            <Folder />
                        </Col>
                        {/* first item */}
                        <Col className="ps-0 text-start" xs={6} lg={6}>
                            {/* name */}
                            <p className="mb-0">Marketing Tools</p>
                            {/* date */}
                            <p className="my-2 d-lg-none">277 View, Jan 4, 2022</p>
                            {/* number of items */}
                            <p><span className="d-lg-none"><Folder /></span> 0 items </p>
                        </Col>
                        {/* date */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>Jan 4, 2022</p>
                        </Col>
                        {/* views */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>58</p>
                        </Col>
                        {/* favorites */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>0</p>
                        </Col>
                        {/* contibutor */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>Anonymous</p>
                        </Col>
                        {/* sort button */}
                        <Col lg={1} xs={4} className="pe-0 d-flex flex-column align-items-end">
                            <Sort />
                            <p className="d-lg-none mb-0 mt-5">0 </p>
                        </Col>
                    </Row>
                    {/* Fourth row */}
                    <Row className="align-items-center mt-4 py-3 border-bottom justify-content-between">
                        {/* folder image */}
                        <Col className="d-none d-lg-block" lg={1}>
                            <Folder />
                        </Col>
                        {/* first item */}
                        <Col className="ps-0 text-start" xs={6} lg={6}>
                            {/* name */}
                            <p className="mb-0">Time Management Tools</p>
                            {/* date */}
                            <p className="my-2 d-lg-none">277 View, Jan 4, 2022</p>
                            {/* number of items */}
                            <p><span className="d-lg-none"><Folder /></span> 0 items </p>
                        </Col>
                        {/* date */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>Jan 4, 2022</p>
                        </Col>
                        {/* views */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>58</p>
                        </Col>
                        {/* favorites */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>0</p>
                        </Col>
                        {/* contributors */}
                        <Col lg={1} className="d-none d-lg-block">
                            <p>Anonymous</p>
                        </Col>
                        {/* sort button */}
                        <Col lg={1} xs={4} className="pe-0 d-flex flex-column align-items-end">
                            <Sort />
                            <p className="d-lg-none mb-0 mt-5">0 </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        // if not true render "loading"
        return (
            <h1 className={"text-center blink-1 loading"}>James Consulting...</h1>
        )
    }

}