import { Col, Row } from 'react-bootstrap'

import './BlackBox.scss'

type Props = {}

const BlackBox = (props: Props) => {
    return (
        <>
            <div className="container-black-box">
                <div className="bg-black-box">
                    <div className="black-box-city">
                        San Francisco, United States
                    </div>
                    <h2 className="black-box-title">Cozy beach house</h2>
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
                                <h3 className="black-box-col-title">Area</h3>
                                <div className="black-box-parameters">
                                    2300<sup>2</sup>
                                    <span className="black-box-icon-area"></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlackBox
