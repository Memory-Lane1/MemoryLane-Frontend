import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const Profile = () => {
    return (
        <div className="profile-component">
            <h1 className="txt">Your Profile</h1>
            <h4 className="txt">Edit your Profile Here!</h4>
            
            <Card className="bg-default-1 mb-20" style={{ width: '80%' }}>
                <Card.Header>
                <h2 className="title gr-text-6 text-center  ">Your information</h2>
               
                <Card.Body >
                    <Table striped bordered hover variant="dark" className="mb-3">
                                           <thead>
                            <tr>
                                <th>Account</th>
                                <th><a>Your@email</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>Your name</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>Yor name</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td >Your Age</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
               
                    <div className="d-grid gap-2 ">
                        <Button variant="primary" size="sm" type="submit">Log Out</Button>
                    </div>  
                    </Card.Header>
                </Card>   
                <Card className="mb-11" style={{ width: '80%' }}>
                <h2 className="title gr-text-6 text-center mb-4 ">Your information</h2>
                <Card.Body >
                    <Table striped bordered hover variant="dark" className="mb-4">
                                           <thead>
                            <tr>
                                <th>Previous Password</th>
                                <th><a></a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>New Password</td>
                                <td>Password</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Card.Body>
               
                    <div className="d-grid gap-2 ">
                        <Button variant="primary" size="sm" type="submit">Reset Password</Button>
                    </div>  
                </Card>  
                

        </div>
    )
}

export default Profile
