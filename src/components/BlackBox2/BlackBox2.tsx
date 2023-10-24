import { Col, Row } from 'react-bootstrap'

import './BlackBox2.scss'

type Props = {}

const BlackBox2 = (props: Props) => {
    return (
        <>
            <div className="container-black-box2">
                <div className="bg-black-box">
                    <div className="black-box-city">
                        Join our mailing list today
                    </div>
                    <h2 className="black-box-title">
                        Insider offers & new listings in your inbox every week.
                    </h2>
                    <div className="black-box-line">
                        <div className="black-box-icon-line"></div>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Insert your email ...*"
                    />
                </div>
            </div>
        </>
    )
}
export default BlackBox2
