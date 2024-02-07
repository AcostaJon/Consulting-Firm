// bootstrap components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// image component
import Map from '../images/map';
// css 
import styles from './ContactForm.module.css'

export default function ContactForm() {

    // handle form submit 
    const handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault()
        // show alert modal
        alert("message submitted!")
    };

    return (
        // Form
        <Form noValidate  onSubmit={handleSubmit} className={`${styles.form} mx-auto`} id='form'>
            {/* First Row */}
            <Row className="my-3 justify-content-space-between">
                <h2 className='text-center my-5 py-lg-4 fw-light'>CONTACT</h2>
                <Form.Group className='mb-3' as={Col} lg="6" controlId="validationCustom01">
                    {/* label: first name */}
                    <Form.Label>First name</Form.Label>
                    {/* input: first name */}
                    <Form.Control className='bg-transparent border border-start-0 border-end-0 border-top-0 text-white'
                        required
                        type="text"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' as={Col} lg="6" controlId="validationCustom02">
                    {/* label: last name */}
                    <Form.Label>Last name</Form.Label>
                    {/* input: last name */}
                    <Form.Control className='bg-transparent border border-start-0 border-end-0 border-top-0 text-white'
                        required
                        type="text"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            {/* Second Row */}
            <Row className="mb-3 justify-content-space-between">
                <Form.Group className='mb-3' as={Col} lg="6" controlId="validationCustom03">
                    {/* label: email */}
                    <Form.Label>Email</Form.Label>
                    {/* input : email */}
                    <Form.Control className='bg-transparent border border-start-0 border-end-0 border-top-0 text-white' type="email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' as={Col} lg="6" controlId="validationCustom04">
                    {/* label: subject */}
                    <Form.Label>Subject</Form.Label>
                    {/* input: subject */}
                    <Form.Control className='bg-transparent border border-start-0 border-end-0 border-top-0 text-white' type="text" required />
                </Form.Group>
            </Row>
            {/* Fourth Row */}
            <Row className="mb-3 mb-lg-5 justify-content-space-between align-items-end">
                <Form.Group className='mb-3 mb-lg-0' controlId="validationCustom05">
                    {/* label: message */}
                    <Form.Label>Message</Form.Label>
                    {/* input: message */}
                    <Form.Control className='bg-transparent border border-start-0 border-end-0 border-top-0 mb-3 mb-lg-0 text-white' as="textarea" rows={6} />
                </Form.Group>
                {/* submit button */}
                <button type="submit" className='bg-white text-black border border-0 d-flex align-items-center justify-content-center py-4 mt-lg-5 ' lg={2} size='md' >Submit</button>
            </Row>
            {/* Map Image*/}
            <div className='mx-auto text-center my-5'>
                {/* map image component */}
                <Map fluid />
            </div>
        </Form>
    )
}