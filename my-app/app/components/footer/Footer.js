'use client'
// bootstrap components
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// image components
import FacebookIcon from '../images/facebook';
import TwitterIcon from '../images/twitter';
// css
import Styles from "./footer.module.css"
// my component
import ContactForm from '../form/ContactForm';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            {/* Contact Form Section */}
            <div className={Styles.footerTop}>
                {/* contact form component */}
               <ContactForm />
            </div>
            {/* Business Section */}
            <div className={`${Styles.footerBottom} m-0 `}>
                <Row className={`${Styles.footerBottomRow} mx-auto my-5`}>
                    {/* first column */}
                    <Col lg={6} className='mb-5'>
                        {/* business name */}
                        <h2>JAMES CONSULTING</h2>
                        {/* unordered list of business info */}
                        <ul className='mt-lg-4'>
                            {/* address */}
                            <li>500 Terry Francine Street,</li>
                            {/* city,state,zip */}
                            <li>San Francisco, CA 94158</li>
                            {/* email */}
                            <li>Mail: info@mysite.com</li>
                            {/* phone number */}
                            <li>Tel: 123-456-7890</li>
                        </ul>
                    </Col>
                    {/* second column */}
                    <Col lg={3} className='d-none d-lg-block'>
                        {/* title */}
                        <h2>MENU</h2>
                        {/* unordered list of nav itmes */}
                        <ul className='mt-lg-4'>
                            <Nav.Link href="/about" className='mb-4 mb-lg-0  '>About</Nav.Link>
                            <Nav.Link href="/projects" className='mb-4 mb-lg-0 ' >Projects</Nav.Link>
                            <Nav.Link href="/services" className='mb-4 mb-lg-0 '>Services</Nav.Link>
                            <Nav.Link href="/plans-pricing" className='mb-4 mb-lg-0 '>Plans & Pricing</Nav.Link>
                            <Nav.Link href="/tools-tips" className='mb-4 mb-lg-0 '>Tools & Tips</Nav.Link>
                            <Nav.Link href="/contact-us" className='mb-4 mb-lg-0 '>Contact</Nav.Link>
                        </ul>
                    </Col>
                    {/* third column */}
                    <Col lg={3} className='mb-4 d-lg-flex justify-content-between flex-column'>
                        <div>
                            {/* title */}
                            <h2>SOCIALS</h2>
                            {/* unordered list of social icons */}
                            <ul className='d-flex align-items-center '>
                                {/* facebook */}
                                <Nav.Link href="" className='mb-4 mb-lg-0 me-3 '><FacebookIcon /></Nav.Link>
                                {/* twitter */}
                                <Nav.Link href="" className='mb-4 mb-lg-0 '><TwitterIcon /></Nav.Link>
                            </ul>
                        </div>
                         {/* copyright */}
                        <div>
                            <p>© 2035 by JAMES CONSULTING.
                                Powered and secured by Wix</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}