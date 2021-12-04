import React, {useState} from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { ProSidebar, SidebarHeader,  SidebarFooter, SidebarContent,Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../main';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import { FaHome, FaGem, FaStickyNote, FaBlog, FaQuestionCircle, FaNewspaper} from 'react-icons/fa';
import Logo from '../../Images/logo_1.png'
import {MdContactMail} from 'react-icons/md'
import {RiTeamLine} from 'react-icons/ri'
import {HiChat} from 'react-icons/hi'
import './sidebar.css'


const renderSignIn = (status)=>{
  if(status.isSignedIn){
    return(
      <>
      <MenuItem icon={<span className='fa fa-user-circle'/>}>
        Profile <Link to={"/profile/"+status.userId}/>
      </MenuItem>

      <MenuItem icon={<span className='fa fa-sign-in'/>}>
        Logout <Link to="/logout"/>
      </MenuItem> 
      </>
    )
  }else{
    return(
      <>
      <MenuItem icon={<span className='fa fa-sign-in'/>}>
        Login <Link to="/login"/>
      </MenuItem>
      <MenuItem icon={<span className='fa fa-sign-in'/>}>
        Signup <Link to="/signup"/>
      </MenuItem>
      </>
    )
  }

}

const renderSignInTop = (status)=>{
  if(status.isSignedIn){
    return(
      <>
      <SubMenu title='Add' icon={<span className='fa fa-plus-circle'/>}>
        <MenuItem>Image Resolution <Link to="/imageResolution"/></MenuItem>
        <MenuItem>Add Blog <Link to='/addBlog' /></MenuItem>
      </SubMenu>
    
      </>
    )
  }
  else return(
    <>
    </>
  )
}

function Sidebar({collapsed, toggled, handleToggleSidebar, auth}){
return(
<ProSidebar breakPoint='md' collapsed={collapsed} 
          toggled={toggled} onToggle={handleToggleSidebar}
>

    <SidebarHeader>
        MemoryLane
        
    </SidebarHeader>
    
    <SidebarContent>
  <Menu iconShape="square">
    <MenuItem icon={<FaHome />}>
      Home <Link to="/home"/>
    </MenuItem>
    

    {renderSignInTop(auth)}
    


    <MenuItem icon={<RiTeamLine />}>
      About Us <Link to="/aboutUs"/>
    </MenuItem>
    
   <MenuItem icon={<FaNewspaper />}>
      News <Link to="/news"/>
    </MenuItem>
 

    <MenuItem icon={<MdContactMail />}>
      Contact Us <Link to="/contact"/>
    </MenuItem>
    
    
    {renderSignIn(auth)}
    

  </Menu>
  </SidebarContent>
  <SidebarFooter>
      <p>All rights reserved</p>
  </SidebarFooter>
</ProSidebar>
)
}
const mapStateToProps = state =>{
  return{
    auth:state.auth
  }
}


export default connect(mapStateToProps, null)(Sidebar);
