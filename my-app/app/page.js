'use client'
// react
import { useEffect, useState } from 'react';
// my component
import Testimonials from './components/testimonials/testimonials';
// bootstrap components
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// css
import styles from './page.module.css'
// images
import Client1 from './components/images/client1';
import Client2 from './components/images/client2';
import Client3 from './components/images/client3';
import Client4 from './components/images/client4';


export default function Home() {
  const [render, setRender] = useState(false);

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

      <main className={styles.main}>
        {/* Introduction Section - developing strategies  */}
        <section className='d-flex justify-content-center align-items-end' >
          <Container className={`${styles.firstDiv} animation`}  >
            <Row>
              <Col>
                <div>
                  {/* sub title */}
                  <h3 >Developing Innovative Strategies</h3>
                  {/* title */}
                  <h1 className='fw-light mt-3 mb-4 my-lg-5'>ACHIEVING GROWTH</h1>
                  {/* button; link to a booking*/}
                  <Button className='bg-transparent border border-black py-3 px-5 fw-semibold'>Book A Consultation</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/*Second Section: services, projects, clients */}
        <section className='py-5 px-3 text-center'>
          <Container className='my-lg-5'>
            <Row xs={1} lg={3}>
              {/* services box */}
              <Col className='my-5 px-lg-5' >
                {/* title */}
                <h2 className='fw-normal animation'>SERVICES</h2>
                {/* description */}
                <p className='my-4 my-lg-5 animation'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                {/* more info button */}
                <Button className='bg-transparent border border-black px-5 py-3 fw-semibold animation'>More Info</Button>
              </Col>
              {/* projects box */}
              <Col className='my-5 px-lg-5' >
                {/* titles */}
                <h2 className='fw-normal animation'>PROJECTS</h2>
                {/* description */}
                <p className='my-4 my-lg-5 animation'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                {/* more info button */}
                <Button className='bg-transparent border border-black px-5 py-3 fw-semibold animation'>More Info</Button>
              </Col>
              {/* clients box */}
              <Col className='my-5 px-lg-5' >
                {/* title */}
                <h2 className='fw-normal animation'>CLIENTS</h2>
                {/* decription */}
                <p className='my-4 my-lg-5 animation'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                {/* more info button */}
                <Button className='bg-transparent border border-black px-5 py-3 fw-semibold animation'>More Info</Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/*Third Section: about us */}
        <section className='py-5 px-3 text-center'>
          <Container >
            <Row>
              <Col className='py-3 my-lg-5'>
                {/* title */}
                <h2 className='fw-normal my-4 animation' >ABOUT US</h2>
                {/* desctiption */}
                <p className='w-lg-50 fw-light animation'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                {/* desctiption */}
                <p className='w-lg-50 fw-light animation'>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                {/* learn more button */}
                <Button className='bg-transparent border border-black px-5 py-3 fw-semibold mt-3 animation'>Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>


        {/* Fourth Section: our clients */}
        <section className='text-center py-5 '>
          <Container>
            <Row>
              <Col>
                {/* title */}
                <h2 className='fw-normal my-4 mb-lg-5 animation'>OUR CLIENTS</h2>
                {/* list of clients */}
                <ul className='d-block d-lg-flex justify-content-lg-evenly p-0 animation'>
                  <li className='my-4 my-lg-5'><Client1 /></li>
                  <li className='my-4 my-lg-5'><Client2 /></li>
                  <li className='my-4 my-lg-5'><Client3 /></li>
                  <li className='my-4 my-lg-5'><Client4 /></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Fifth Section: testimonials */}
        <section className='py-5' >
          <Container className='my-lg-4'>
            <Row >
              <Col>
                {/* title */}
                <h2 className='text-center mt-5 animation'>TESTIMONIALS</h2>
                {/* testimonial component*/}
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    )
  } else {
    // if render is not true then render "loading" 
    return (
      <h1 className={"text-center blink-1 loading"}>James Consulting...</h1>
    )
  }
}
