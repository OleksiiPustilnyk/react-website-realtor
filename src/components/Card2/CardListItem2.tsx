import { Card, CardGroup, Col, Row } from 'react-bootstrap'

import './CardListItem2.scss'

type Props = {
    id: number

    title: string
    desc: string
    image: string
}

const CardListItem2 = ({ id, title, desc, image }: Props) => {
    return (
        <>
            <CardGroup style={{ margin: '25px' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ borderRadius: '0' }}
                />
                <Card
                    style={{
                        border: 'none',
                        borderRadius: '0',
                        padding: '35px',
                    }}
                >
                    <Card.Body>
                        <Card.Text
                            className="card-title-custome"
                            style={{ margin: '0' }}
                        >
                            {title}
                        </Card.Text>
                        <div className="black-box-line">
                            <div className="black-box-icon-line"></div>
                        </div>
                        <Card.Text className="card-city">{desc}</Card.Text>
                        <button className="btnDefaultGreen">
                            Read article
                            <span className="btn-icon-arrow-left-white"></span>
                        </button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}
export default CardListItem2
