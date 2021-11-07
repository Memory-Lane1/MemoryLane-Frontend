import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const StartingCards = ({Title,Text,Src,Direction,Redirect}) => {
    // let history= useHistory();
    // const routeChange=()=>{
        
    //     history.push({Redirect});
    // }
    return (
        <div className='startingcards'>
            <Link to={Redirect}>
            <Card style={{ width: '18rem' }} className='redirectCards'>
                <Card.Img variant="top" src={Src} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                    {Text}
                    </Card.Text>
                    <Button  variant="primary" >{Direction}</Button>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default StartingCards
