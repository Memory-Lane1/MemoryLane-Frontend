import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const SignUp = () => {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName] = useState("");
    const [confirm, setConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function validateForm(){
        return email.length>0&& password.length>0&&password==confirm&&firstName.length>0&&lastName.length>0&& phone.length>0&&age>0&&country.length>0;
    }

    const onSubmitClick = (e)=>{
        e.preventDefault()
        console.log("You pressed SignUp")
        let opts = {
          'email': email,
          'name': firstName+" "+lastName,
          'PhoneNo':phone,
          'age':age,
          'country':country,
          'password': password
        }
        console.log(opts)
        fetch('http://localhost:5000/register', {
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
        <div className='signup-component'>
            <h1 className="txt">Sign Up</h1>
            <h4 className="txt">Register here to get Started</h4>
            <Card style={{ width: '40 rem' }}>
                <Card.Body>
                    <Form>
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control  placeholder="Last Name"  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
                        </Form.Group>
                        {/* <Row className="mb-3">
                            

                            
                        </Row> */}
                        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group> */}

                        <Row className="mb-3 mid-row">
                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control  value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type='integer' value={age} onChange={(e)=>setAge(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control value={country} onChange={(e)=>setCountry(e.target.value)} />
                            </Form.Group>
                        </Row>

                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <div className="d-grid gap-2">
                            <Button size="sm" type="submit" disable={!validateForm()} onClick={onSubmitClick}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUp
