// bootstrap components
import { Button, Container, Row, Col } from "react-bootstrap";
// image component
import Circlecheck from "../components/images/circlecheck";
// css
import Styles from "./page.module.css"

export default function PlansPricing() {
    return (
            <div className={`${Styles.PlansPricing} text-center px-3 py-5`}>
                {/* Page Title */}
                <h1>GROWTH AND INNOVATIONS PLANS</h1>
                {/* Page Description */}
                <p>We help businesses improve their performance through innovation in products, services, and strategy.</p>

                {/* 3 Offers Section */}
                <section className="my-lg-5">
                    <Container>
                        <Row xs={1} lg={4} className="justify-content-between">
                            {/* Box 1 - Financial Strategy */}
                            <Col className="border border-1 border-dark-subtle bg-dark-subtle px-0 pt-4 pb-0 my-4">
                                {/* top  */}
                                <div className={Styles.cardContent}>
                                    {/* best value */}
                                    <span>Best Value</span>
                                    {/* name */}
                                    <h3 className="fw-light">Financial Strategy</h3>
                                    {/* price */}
                                    <h1 className="my-5">$100</h1>
                                    {/* description */}
                                    <p className="fw-light">Add value and maximize your competitive advantage</p>
                                    {/* length */}
                                    <p className="my-4 fw-light">Valid for 6 months</p>
                                    {/* link to offer */}
                                    <Button className="border border-0 py-3" href="/">Select</Button>
                                </div>
                                {/* bottom */}
                                <div className={Styles.accordion}>
                                    <div className="accordion" id="accordionExample">
                                        <div Name="accordion-item">
                                            <h2 className="accordion-header">
                                                  {/* :after | down arrow */}
                                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseThree">
                                                </button>
                                            </h2>
                                            {/* list of features */}
                                            <div id="collapseOne" className="accordion-collapse collapse bg-white" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul >
                                                        <li className="my-5"><Circlecheck /> 1 Monthly goal setting meeting</li>
                                                        <li className="my-5"><Circlecheck /> Unlimited individual sessions</li>
                                                        <li className="my-5"><Circlecheck /> Online Resources</li>
                                                        <li className="my-5"><Circlecheck /> Phone Support</li>
                                                        <li className="my-5"><Circlecheck /> Weekly newsletter</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* Box 2 - Management 101 */}
                            <Col className="border border-1 border-dark-subtle bg-dark-subtle px-0 pt-4 pb-0 my-4">
                                {/* top  */}
                                <div className={Styles.cardContent}>
                                <span className="invisible">Best Value</span>
                                {/* name */}
                                    <h3 className="fw-light">Management 101</h3>
                                    {/* price */}
                                    <h1 className="my-5">$50</h1>
                                    {/* description */}
                                    <p className="fw-light">Actualize your business model and boost your KPIs</p>
                                    {/* length */}
                                    <p className="my-4 fw-light">Valid for 3 months</p>
                                    {/* link to offer */}
                                    <Button className="border border-0 py-3" href="/">Select</Button>
                                </div>
                                {/* bottom */}
                                <div className={Styles.accordion}>
                                    <div className="accordion" id="accordionExample">
                                        <div Name="accordion-item">
                                            <h2 className="accordion-header">
                                                    {/* :after | down arrow */}
                                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
                                                </button>
                                            </h2>
                                            {/* list of features */}
                                            <div id="collapseTwo" className="accordion-collapse collapse bg-white" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul >
                                                        <li className="my-5"><Circlecheck /> 1 Monthly goal setting meeting</li>
                                                        <li className="my-5"><Circlecheck /> Unlimited individual sessions</li>
                                                        <li className="my-5"><Circlecheck /> Online Resources</li>
                                                        <li className="my-5"><Circlecheck /> Phone Support</li>
                                                        <li className="my-5"><Circlecheck /> Weekly newsletter</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* Box 3 - Data and Digital Sol */}
                            <Col className="border border-1 border-dark-subtle bg-dark-subtle px-0 pt-4 pb-0 my-4">
                                {/* top  */}
                                <div className={Styles.cardContent}>
                                <span className="invisible">Best Value</span>
                                {/* name */}
                                    <h3 className="fw-light">Data and Digital Sol</h3>
                                    {/* price */}
                                    <h1 className="my-5">$70</h1>
                                    {/* description */}
                                    <p className="fw-light">Harness the power of technology to upgrade your business</p>
                                    {/* length */}
                                    <p className="my-4 fw-light">Valid for 12 months</p>
                                    {/* link to offer */}
                                    <Button className="border border-0 py-3" href="/">Select</Button>
                                </div>
                                {/* bottom */}
                                <div className={Styles.accordion}>
                                    <div className="accordion" id="accordionExample">
                                        <div Name="accordion-item">
                                            <h2 className="accordion-header">
                                                 {/* :after | down arrow */}
                                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                </button>
                                            </h2>
                                            {/* list of features */}
                                            <div id="collapseThree" className="accordion-collapse collapse bg-white" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li className="my-5"><Circlecheck /> 1 Monthly goal setting meeting</li>
                                                        <li className="my-5"><Circlecheck /> Unlimited individual sessions</li>
                                                        <li className="my-5"><Circlecheck /> Online Resources</li>
                                                        <li className="my-5"><Circlecheck /> Phone Support</li>
                                                        <li className="my-5"><Circlecheck /> Weekly newsletter</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
    )
}