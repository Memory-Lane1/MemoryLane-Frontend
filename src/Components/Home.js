import React from 'react'
import { BrowserRouter as Router,  Redirect, Switch, Route, Link, useRouteMatch, useParamsLink } from 'react-router-dom'
import EnhanceImageUpload from './EnhanceImageUpload'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import StartingCards from './StartingCards'


const Home = () => {
    // let match= useRouteMatch();
    return (
        <div className='home'>
            <Row className='mb-3'>
                <Col>
                    <div className='front-img'>
                        <h1>We use AI technology to restore astronomical photos automatically</h1>
                    </div>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <div className='ext'></div>
                </Col>
                
                <Col>
                    <Link to='/enhance'>
                        <StartingCards  Title='Enhance Image' Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ." Src="./images/comparison.png" Direction='lets go' Redirect='/enhance'  />
                    </Link>
                </Col>
                <Col>
                    <Link to='/restore'>
                    <StartingCards Title='Restore Image' Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." Src="./images/comparison.png" Direction='lets go' Redirect ='/restore' />
                    </Link>
                </Col>
                <Col>
                    <div className='ext'></div>
                </Col>
            </Row>

            <Switch>
                <Route path='/enhance' ><Redirect to='/enhance'></Redirect></Route>
                <Route path='/restore' ><Redirect to='/restore'></Redirect></Route>
                {/* <Route path={`${match.path}/restore`} component='RestoreImageUpload' /> */}
            </Switch>
        </div>
            
    )
}

export default Home
