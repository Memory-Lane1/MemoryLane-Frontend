import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = () => {
    return (
        <div className='login-component'>
            <h1 className="txt">Login</h1>
            <h4 className="txt">Sign in here to get Started</h4>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button size="sm" type="submit">
                                Submit
                            </Button>
                        </div>
                        
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
