import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from '../../components/Logo/Logo'

import './HeaderDefault.scss'
import Menu from '../../components/Menu/Menu'

type Props = {}

const HeaderDefault = (props: Props) => {
    return (
        <>
            <header className="headerDefault">
                <Container className="containerPer" fluid>
                    <Row xs={3}>
                        <Col xs={{ span: 2, offset: 1 }}>
                            <Logo />
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <Menu />
                        </Col>
                        <Col md={{ span: 2, offset: 1 }}>
                            <button className="btnDefaultBlack">
                                View properties
                                <span className="icon-home"></span>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
export default HeaderDefault
