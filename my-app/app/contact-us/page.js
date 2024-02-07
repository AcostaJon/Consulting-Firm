// bootstrap component
import { Container } from 'react-bootstrap'
// css
import styles from "./page.module.css"

export default function ContactUs() {
    return (
        <>
            <Container className={`${styles.contact} text-center border border-1 bg-light py-5 `} >
                {/* title */}
                <h1 className="fw-bold tracking-in-expand ">WE'RE HERE FOR YOU </h1>
                {/* description */}
                <p className='fw-light tracking-in-expand text-secondary   '>A PROFESSIONAL WILL ANSWER</p>
            </Container>
        </>
    )
}
