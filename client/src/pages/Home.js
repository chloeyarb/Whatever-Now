import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
    return (
        <Container fluid="md">
            <Row className='justify-content-md-center'>
                <Col md="auto">
                    Welcome to Whatever Now
                    <div>
                        <img src='/img/heropic.png'
                            className='img-fluid'
                            style={{ maxWidth: '30rem' }}
                            alt='heropic' />
                    </div>
                    {/* <div>Are mission statement being that Media its-self has a week self- life at best, with that being because of the overabundance of news or that People’s attention span is not that long. So why not have a social media Page that reflex that. With our app “What-3ver Now” that is our goal to achieve. With a little thing where every post and convo for that week is burned after. The week starts Sunday at 12est and ends Sunday 12est. Not ever post will last a week full week. Now it might see like we are going after a “Free-Speech” app as many others have done with their disdain for how Twitter or others have there Policys for posting content, but I assure you here we do intend to “watch posts” to see if any nefarious or malicious posts or comments are poste
                    </div> */}
                    <div className="mb-2">
                        <Button variant="primary" size="lg">
                            Login
                        </Button>{' '}
                        <Button variant="primary" size="lg">
                            Sign Up
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>


    )
}

export default Home