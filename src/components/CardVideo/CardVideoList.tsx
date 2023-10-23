import CardVideoListItem from './CardVideoListItem'
import cardVideoArray from '../../utils/cardVideoArray'
import { Row } from 'react-bootstrap'

type Props = {}
const CardVideoList = (props: Props) => {
    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ padding: '40px 0' }}>
                {cardVideoArray.map(({ id, desc, title, image }) => (
                    <div key={id}>
                        <CardVideoListItem
                            id={id}
                            desc={desc}
                            title={title}
                            image={image}
                        />
                    </div>
                ))}
            </Row>
        </>
    )
}
export default CardVideoList
