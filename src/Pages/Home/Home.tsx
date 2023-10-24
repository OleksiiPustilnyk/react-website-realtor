import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import HeaderDefault from '../../Container/Header/HeaderDefault'

import ImageHomeTextBG1 from '../../assets/images/img-with-text-1.jpeg'
import ImageHomeTextBG2 from '../../assets/images/img-with-text-2.jpeg'
import ImageHomeBanner1 from '../../assets/images/img-banner-1.jpeg'

import BlackBox from '../../components/BlackBox/BlackBox'
import CardList from '../../components/Card/CardList'
import CardVideoList from '../../components/CardVideo/CardVideoList'
import CardList2 from '../../components/Card2/CardList2'

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

                    <div className="container-fullscreen">
                        <div className="home-bg-img">
                            <Row>
                                <Col md={8}>
                                    <BlackBox />
                                </Col>
                            </Row>
                            <Col
                                md={{ span: 2, offset: 10 }}
                                className="btn-block"
                            >
                                <button className="btnDefaultGreen">
                                    View properties
                                    <span className="btn-icon-arrow-left-white"></span>
                                </button>
                            </Col>
                        </div>
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
                        <Row style={{ margin: '0 75px' }}>
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
                        <div className="img-bg">
                            <Col
                                md={{ span: 2, offset: 10 }}
                                className="btn-block"
                            >
                                <button className="btnDefaultBlack">
                                    View properties
                                    <span className="btn-icon-arrow-left-white"></span>
                                </button>
                            </Col>
                        </div>
                    </div>

                    <div className="container-with-green-bg">
                        <div className="green-bg">
                            <h2 className="green-bg-heading">Guided tour</h2>
                            <div className="black-box-line">
                                <div className="black-box-icon-line"></div>
                            </div>
                            <CardVideoList />
                        </div>
                    </div>

                    <Row className="justify-content-md-center container-without-bg">
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
                        <Col xs lg="8" className="fusion-heading-left">
                            <div className="fusion-heading-left-text">
                                <h1 className="fusion-heading-left-title">
                                    Risus eget auctor faucibus adipiscing dolor
                                    nibh egestas morbi nullam. Eu imperdiet
                                    eleifend nullam ut interdum.
                                </h1>
                            </div>
                        </Col>
                    </Row>

                    <div className="container-with-bg">
                        <img src={ImageHomeBanner1} alt="" />
                        <Row style={{ margin: '0 75px' }}>
                            <Col sm={10} className="titleMain">
                                Latest articles
                            </Col>
                            <Col sm={2}>
                                <button className="btn-viewProperties-withoutBorder-green">
                                    View all articles
                                    <span className="icon-btn-viewProperties-green"></span>
                                </button>
                            </Col>
                        </Row>
                        <CardList2 />
                    </div>

                    <div className="container-fullscreen">
                        <div className="home-bg-img-2">
                            <Row>
                                <Col md={8}>
                                    <BlackBox />
                                </Col>
                            </Row>
                            <Col
                                md={{ span: 2, offset: 10 }}
                                className="btn-block"
                            >
                                <button className="btnDefaultGreen">
                                    View properties
                                    <span className="btn-icon-arrow-left-white"></span>
                                </button>
                            </Col>
                        </div>
                    </div>

                    <div className="container-without-bg">
                        <Row className="justify-content-md-center">
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
                            <Col xs lg="6">
                                <img
                                    src={ImageHomeTextBG2}
                                    alt=""
                                    className="img-with-text"
                                />
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fullscreen">
                        <div className="home-bg-img-2">
                            <Row>
                                <Col md={8}>
                                    <BlackBox />
                                </Col>
                            </Row>
                            <Col
                                md={{ span: 2, offset: 10 }}
                                className="btn-block"
                            >
                                <button className="btnDefaultGreen">
                                    View properties
                                    <span className="btn-icon-arrow-left-white"></span>
                                </button>
                            </Col>
                        </div>
                    </div>

                    <div className="container-with-bg">
                        <Row style={{ margin: '0 75px' }}>
                            <Col sm={10} className="titleMain">
                                Our clients
                            </Col>
                        </Row>
                        <Row
                            style={{
                                margin: '0 75px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Col xs={3} className="ourClients-block">
                                <span className="icon-company-hemisferio"></span>
                            </Col>
                            <Col xs={3} className="ourClients-block">
                                2 of 3
                            </Col>
                            <Col xs={3} className="ourClients-block">
                                3 of 3
                            </Col>
                        </Row>
                        <Row
                            style={{
                                margin: '20px 75px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Col xs={3}>1 of 3</Col>
                            <Col xs={3}>2 of 3</Col>
                            <Col xs={3}>3 of 3</Col>
                        </Row>
                    </div>
                </Container>
            </main>
        </>
    )
}
export default Home
