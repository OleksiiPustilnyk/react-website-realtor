import CardListItem2 from './CardListItem2'
import cardArray2 from '../../utils/cardArray2'
import { Row } from 'react-bootstrap'

type Props = {}

const CardList2 = (props: Props) => {
    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ padding: '40px 75px' }}>
                {cardArray2.map(({ id, title, desc, image }) => (
                    <div key={id}>
                        <CardListItem2
                            id={id}
                            title={title}
                            desc={desc}
                            image={image}
                        />
                    </div>
                ))}
            </Row>
        </>
    )
}
export default CardList2
