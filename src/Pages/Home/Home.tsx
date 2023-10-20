import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import HeaderDefault from '../../Container/Header/HeaderDefault'
import ImageHomeBG1 from '../../assets/images/img-bg-home-1.jpeg'
import ImageHomeBG2 from '../../assets/images/img-bg-home-2.jpeg'

import ImageHomeTextBG1 from '../../assets/images/img-with-text-1.jpeg'

import BlackBox from '../../components/BlackBox/BlackBox'
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
                        <Col xs lg="7" className="fusion-heading-left">
                            <div className="fusion-heading-left-text">
                                <h1 className="fusion-heading-left-qoute">
                                    “Architecture should speak of its time and
                                    place, but yearn for timelessness.”
                                </h1>
                                <p className="fusion-heading-left-author">
                                    – Frank Gehry
                                </p>
                            </div>
                        </Col>
                        <Col xs lg="3" className="fusion-heading-right">
                            <div className="fusion-heading-right-text">
                                <h5 className="fusion-heading-right-heading">
                                    Bibendum morbi ac et porttitor.
                                </h5>
                                <p className="fusion-heading-right-paragraph">
                                    Ut sed semper velit commodo, tortor
                                    malesuada. Malesuada nisl pharetra a sit
                                    augue nec bibendum morbi. Ac et, porttitor
                                    est elit mauris scelerisque et lobortis
                                    eget.
                                </p>
                                <button className="btn-viewProperties-withoutBorder-green">
                                    View properties
                                    <span className="icon-btn-viewProperties-green"></span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <div className="home-bg">
                        <img src={ImageHomeBG1} alt="" className="img-bg" />
                        <Row>
                            <Col md={8}>
                                <BlackBox />
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
                        <Row className="title-and-btn">
                            <Col sm={10} className="titleMain">
                                Available properties
                            </Col>
                            <Col sm={2}>
                                <button className="btn-viewProperties-withoutBorder-green">
                                    View all properties
                                    <span className="icon-btn-viewProperties-green"></span>
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
