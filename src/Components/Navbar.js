import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navdrop from './navdrop'


class Navbar1 extends Component {
    state={
        logstate:false,
        session:null,
        name:"Log In",
        whereto:"Login",
        show:"Log In"
    }
    togglechange=(doesshow)=>{
        if(doesshow==false){
               this.setState({
                logstate:true,
                session:null,
                name:"Profile",
                whereto:"/",
                show:"Log Out"
            })

        }else{
            this.setState({
                logstate:false,
                session:null,
                name:"Log In",
                whereto:"Login",
                show:"Log In",
            })
        }
      
    }
    togglelogHandler=()=>{
        const doesshow=this.state.logstate;
        this.setState({logstate:!doesshow});
        this.togglechange(doesshow);
      }
    
    render(){
    
    return (
        <Navbar  expand="lg">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="home"><img src="./images/memoryLane.png" height="50px"></img>Memory Lane</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="link">About us</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <button onClick={this.togglelogHandler}>toggle</button>
                <Navdrop logstate={this.state.logstate} text={this.state.show} goto={this.state.whereto} profilename={this.state.name} changed={this.togglelogHandler}/>
           
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )}
}

export default Navbar1
