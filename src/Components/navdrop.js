import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navdrop =(props)=>{
    
       if(props.logstate==true){
        return( 
           <div>
            <NavDropdown title={props.profilename}  className="justify-content-end" id="basic-nav-dropdown">
            <NavDropdown.Item href="photos">Photos</NavDropdown.Item>
            <NavDropdown.Item href="profile">Your Profile</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item  href={props.goto}>{props.text}</NavDropdown.Item>
            </NavDropdown>
           </div>
        
            )
       }else {
           return(
            <div>
            <NavDropdown title={props.profilename}  className="justify-content-end" id="basic-nav-dropdown">
            <NavDropdown.Item href="Signup">Sign Up</NavDropdown.Item>
         
         <NavDropdown.Divider />
            <NavDropdown.Item  href={props.goto}>{props.text}</NavDropdown.Item>
         </NavDropdown>
        </div>
           )
          
       
       }
        
}

export default Navdrop