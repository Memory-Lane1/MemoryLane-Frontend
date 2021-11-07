import React ,{useState}from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function validateForm(){
        return email.length >0 && password.length>0;
    }

    const onSubmitClick = (e)=>{
        e.preventDefault()
        console.log("You pressed login")
        let opts = {
          'email': email,
          'password': password
        }
        console.log(opts)
        fetch('http://localhost:5000/login', {
          method: 'post',
          headers:{
            "Content-Type":'application/json',
        },
          body: JSON.stringify(opts)
        }).then(r => r.json())
          .then(token => {
            if (token.access_token){
              console.log(token)          
            }
            else {
              console.log("Please type in correct username/password")
            }
          })
      }
    return (
        <div className='login-component'>
            <h1 className="txt">Login</h1>
            <h4 className="txt">Sign in here to get Started</h4>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                            <a href='#'>Forgot Password?</a>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button size="sm" type="submit" disabled={!validateForm()} onClick={onSubmitClick}>
                                Submit
                            </Button>
                        </div>
                        <div className='NoAccount'>
                            <p>Don't have an account? <a href='#'> Sign up</a></p>
                        </div> 
                        
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
