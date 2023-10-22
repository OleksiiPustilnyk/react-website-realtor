import { Card, CardGroup, Col, Row } from 'react-bootstrap'

import './CardVideoListItem.scss'

type Props = {
    id: number
    desc: string
    title: string
    image: string
}

const CardVideoListItem = ({ id, desc, title, image }: Props) => {
    return (
        <>
            <CardGroup style={{ margin: '25px' }}>
                <div className="img-video">
                    <Card.Img
                        variant="top"
                        src={image}
                        style={{ borderRadius: '0' }}
                    />
                    <span className="icon-play"></span>
                </div>
                <Card
                    style={{
                        border: 'none',
                        borderRadius: '0',
                        padding: '30px',
                        backgroundColor: 'rgba(78, 109, 67, 1)',
                        color: 'white',
                    }}
                >
                    <Card.Body>
                        <Card.Text className="card-desc">{desc}</Card.Text>
                        <Card.Text
                            className="card-title-custome"
                            style={{ margin: '0' }}
                        >
                            {title}
                        </Card.Text>
                        <button
                            style={{ marginTop: '15px' }}
                            className="btnDefaultWhite"
                        >
                            View tour
                            <span className="btn-icon-arrow-left-green"></span>
                        </button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}
export default CardVideoListItem
