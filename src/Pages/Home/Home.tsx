import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import HeaderDefault from '../../Container/Header/HeaderDefault'
import ImageHomeBG1 from '../../assets/images/img-bg-home-1.jpeg'
import ImageHomeBG2 from '../../assets/images/img-bg-home-2.jpeg'

import ImageHomeTextBG1 from '../../assets/images/img-with-text-1.jpeg'

import CardList from '../../components/Card/CardList'

import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <HeaderDefault />
            <main className="mainHome">
                <Container fluid="xxl">
                    <Row className="justify-content-md-center container-with-bg">
                        <Col xs lg="7" className="title">
                            <div className="title-text">
                                <h1 className="title-qoute">
                                    “Architecture should speak of its time and
                                    place, but yearn for timelessness.”
                                </h1>
                                <p className="title-author">– Frank Gehry</p>
                            </div>
                        </Col>
                        <Col xs lg="3" className="title2">
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
                                    <span className="btn-icon-viewProperties-green"></span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <div className="home-bg">
                        <img src={ImageHomeBG1} alt="" className="img-bg" />
                        <Row>
                            <Col md={8}>
                                <div className="container-black-box">
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

                        <Col md={{ span: 2, offset: 10 }} className="btn-block">
                            <button className="btnDefaultGreen">
                                View properties
                                <span className="btn-icon-arrow-left-white"></span>
                            </button>
                        </Col>
                    </div>
                    <div className="container-without-bg">
                        <Row className="justify-content-md-center">
                            <Col xs lg="6">
                                <img
                                    src={ImageHomeTextBG1}
                                    alt=""
                                    className="img-with-text"
                                />
                            </Col>
                            <Col xs lg="5" className="white-cont-block">
                                <h5 className="white-cont-block-title">
                                    Bibendum morbi ac et porttitor.
                                </h5>
                                <h2 className="white-cont-block-heading">
                                    Morbi lobortis netus ac eget at montes.
                                </h2>
                                <p className="white-cont-block-text">
                                    Ut sed semper velit commodo, tortor
                                    malesuada. Malesuada nisl pharetra a sit
                                    augue nec bibendum morbi. Ac et, porttitor
                                    est elit mauris scelerisque et lobortis
                                    eget. Orci nunc pellentesque diam.
                                </p>
                                <button className="btnDefaultGreen">
                                    Buy Avada now
                                    <span className="btn-icon-arrow-left-white"></span>
                                </button>
                            </Col>
                        </Row>
                    </div>

                    <div className="container-with-bg">
                        <Row>
                            <Col md={4}>Available properties</Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <button className="title2-btn">
                                    View all properties
                                    <span className="btn-icon-viewProperties-green"></span>
                                </button>
                            </Col>
                        </Row>
                        <CardList />
                    </div>

                    <div className="home-bg">
                        <img src={ImageHomeBG2} alt="" className="img-bg" />
                        <Col
                            md={{ span: 2, offset: 10 }}
                            className="btn-block-2"
                        >
                            <button className="btnDefaultGreen">
                                View properties
                                <span className="btn-icon-arrow-left-white"></span>
                            </button>
                        </Col>
                    </div>
                </Container>
            </main>
        </>
    )
}
export default Home
