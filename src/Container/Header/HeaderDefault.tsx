import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../components/Logo/Logo'

import './HeaderDefault.scss'

type Props = {}

const HeaderDefault = (props: Props) => {
    return (
        <>
            <Container className="containerPer" fluid>
                <Row xs={3}>
                    <Col xs={{ span: 2, offset: 1 }}>
                        <Logo />
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>menu</Col>
                    <Col>View properties</Col>
                </Row>
            </Container>
        </>
    )
}
export default HeaderDefault
