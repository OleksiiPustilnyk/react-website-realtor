import { Card, CardGroup } from 'react-bootstrap'

type Props = {
    id: number
    city: string
    name: string
    quantityBedrooms: number
    quantityBathrooms: number
    area: number
    image: string
}

const CardListItem = ({
    id,
    city,
    name,
    quantityBedrooms,
    quantityBathrooms,
    area,
    image,
}: Props) => {
    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{city}</Card.Title>
                        <Card.Text>{name}</Card.Text>
                        <Card.Title>{quantityBedrooms}</Card.Title>
                        <Card.Title>{quantityBathrooms}</Card.Title>
                        <Card.Title>{area}</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}
export default CardListItem
