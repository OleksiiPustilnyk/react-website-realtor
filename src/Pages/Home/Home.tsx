import { Col, Container, Row } from 'react-bootstrap'
import HeaderDefault from '../../Container/Header/HeaderDefault'
import ImageHomeBG1 from '../../assets/images/img-bg-home-1.jpeg'

import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <HeaderDefault />
            <main className="mainHome">
                <Container fluid="xxl">
                    <Row xs={1} md={2} className="container-title">
                        <Col className="title">
                            <div className="title-text">
                                <h1 className="title-qoute">
                                    “Architecture should speak of its time and
                                    place, but yearn for timelessness.”
                                </h1>
                                <p className="title-author">– Frank Gehry</p>
                            </div>
                        </Col>
                        <Col className="title2">
                            <div className="title2-text">
                                <h5 className="title2-heading">
                                    Bibendum morbi ac et porttitor.
                                </h5>
                                <p className="title2-paragraph">
                                    Ut sed semper velit commodo, tortor
                                    malesuada. Malesuada nisl pharetra a sit
                                    augue nec bibendum morbi. Ac et, porttitor
                                    est elit mauris scelerisque et lobortis
                                    eget.
                                </p>
                                <button className="title2-btn">
                                    View properties
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <div className="home-bg">
                        <img src={ImageHomeBG1} alt="" className="img-bg" />
                        <Row>
                            <Col md={7}>
                                <div className="container-title">
                                    <div className="bg-black-box">
                                        <div className="black-box-city">
                                            San Francisco, United States
                                        </div>
                                        <h2 className="black-box-title">
                                            Cozy beach house
                                        </h2>
                                        <div className="black-box-line">
                                            <div className="black-box-icon-line"></div>
                                        </div>

                                        <div className="black-box-col">
                                            <Row>
                                                <Col sm={3}>
                                                    <h3 className="black-box-col-title">
                                                        Bedrooms
                                                    </h3>
                                                    <div className="black-box-parameters">
                                                        3
                                                        <span className="black-box-icon-bedroom"></span>
                                                    </div>
                                                </Col>
                                                <Col sm={3}>
                                                    <h3 className="black-box-col-title">
                                                        Bathrooms
                                                    </h3>
                                                    <div className="black-box-parameters">
                                                        2
                                                        <span className="black-box-icon-bathrooms"></span>
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <h3 className="black-box-col-title">
                                                        Area
                                                    </h3>
                                                    <div className="black-box-parameters">
                                                        2300<sup>2</sup>
                                                        <span className="black-box-icon-area"></span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>
        </>
    )
}
export default Home
