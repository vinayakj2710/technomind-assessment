import Card from 'react-bootstrap/Card';

const CardUi = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Text>
                {props.children}<br/>
            </Card.Text>
            <Card.Link href="#" className='text-primary underline'>{props.link}</Card.Link>
        </Card.Body>
    </Card>
    </>
  )
}

export default CardUi;
