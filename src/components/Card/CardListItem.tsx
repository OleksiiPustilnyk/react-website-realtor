import { Card, CardGroup, Col, Row } from 'react-bootstrap'

import './CardListItem.scss'

type Props = {
    id: number
    city: string
    title: string
    quantityBedrooms: number
    quantityBathrooms: number
    area: number
    image: string
}

const CardListItem = ({
    id,
    city,
    title,
    quantityBedrooms,
    quantityBathrooms,
    area,
    image,
}: Props) => {
    return (
        <>
            <CardGroup style={{ margin: '25px' }}>
                <Card
                    style={{
                        border: 'none',
                        borderRadius: '0',
                        padding: '35px',
                    }}
                >
                    <Card.Body>
                        <Card.Text className="card-city">{city}</Card.Text>
                        <Card.Text
                            className="card-title-custome"
                            style={{ margin: '0' }}
                        >
                            {title}
                        </Card.Text>
                        <div className="black-box-line">
                            <div className="black-box-icon-line"></div>
                        </div>
                        <Row>
                            <Col sm={6}>
                                <Card.Text className="card-desc">
                                    Bedrooms
                                </Card.Text>
                                <Card.Text className="card-title-custome">
                                    {quantityBedrooms}
                                    <span className="card-icon-bedroom"></span>
                                </Card.Text>
                            </Col>
                            <Col sm={6}>
                                <Card.Text className="card-desc">
                                    Bathrooms
                                </Card.Text>
                                <Card.Text className="card-title-custome">
                                    {quantityBathrooms}
                                    <span className="card-icon-bathrooms"></span>
                                </Card.Text>
                            </Col>
                            <Col sm={6}>
                                <Card.Text className="card-desc">
                                    Area
                                </Card.Text>
                                <Card.Text className="card-title-custome">
                                    {area}
                                    <sup>2</sup>
                                    <span className="card-icon-area"></span>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ borderRadius: '0' }}
                />
            </CardGroup>
        </>
    )
}
export default CardListItem
