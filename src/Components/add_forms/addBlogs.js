import React, { Component } from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import {Link} from 'react-router-dom'
import './add_forms.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import ReactQuill from 'react-quill';
import {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import ImageCompress from 'quill-image-compress';
import {spaces, toolbarOptions, formats} from '../variables'
import { ToastContainer, toast } from 'react-toastify';
import { zoomOut, slideInDown, slideInUp, bounce, flipInX, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import 'react-toastify/dist/ReactToastify.css';
Quill.register('modules/imageCompress', ImageCompress);

const styles = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  slideInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
    flipInX: {
      animation: 'x 1s',
      animationName: Radium.keyframes(flipInX, 'flipInX')
    },
}

class addBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          description: '',
          title:'',
         
          files:[],
          duration:null,
          errors:{
            description:'',
        
            title:'',
            duration:null
          }


       } 
        this.handleEditorChange = this.handleEditorChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    
      }
      modules = {
        toolbar:toolbarOptions,
        imageCompress: {
          quality: 0.7,
          maxWidth: 500,
          maxHeight: 500, 
          imageType: 'image/jpeg', 
          debug: true
        }
      }
      
      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: event.target.value
        });
      }
      
      handleEditorChange(value) {
        this.setState({ description: value })
      }

      notify = (message) => toast.warning(message);
      notifyS = (message) => toast.success(message);
      notifyF = (message) => toast.error(message, );

      handleSubmit = async (event)=>{
        event.preventDefault();
        // const isValid = this.formValidation();
        console.log(this.state);
        const newBlog = {
                heading: this.state.title,
                description: this.state.description,
                author: this.props.auth.userId,
                duration:this.state.duration
              }
                console.log(newBlog);
                try{
                      await this.props.postBlog(newBlog);
                      console.log(this.props.blogs);
                }
                catch(error){
                  console.log(error);
                }


              // if(this.props.blogs.postFail)
              //   this.notifyF("Some Error occured while posting try again.");
              // else
              //   this.notifyS('Blog posted successfully!!')
            
            
              // console.log("Invalid input");
              // // this.notify("Atleast one category should be in your followed spaces list . you can follow required space to publish this blog!!");
            
            
        }
      
      
      
      formValidation = () =>{
        const{title,description, duration} = this.state;
        let titleError="",  descriptionError="", durationError="", error;
        if(!title.trim()){
            titleError = "Title is required";
            error = true;            
        }

        
        if(!description.trim()||description==="<p><br></p>"){
          descriptionError = "Description is required";
          error = true;            
        }
        
        if(!duration || isNaN(duration) || duration<=0 ){
          durationError = "Duration should be a positive numeric value";
          error = true;
        }
        
        this.setState(prevState => ({
            errors:{
                title:titleError,
                description: descriptionError,
                duration: durationError
            }
        }))
        
        return !error;
    }
      
      
      
      render() {
        return (
           
            <div className="forms__section">
                <Container>
                <Col md={12} className="contact__main__content">
                        <Row>
                            <Breadcrumb className="mb-4 page__navigation__breadCrump">
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Add Blog</BreadcrumbItem>
                            </Breadcrumb>
                        </Row>
                        <div>
                            <Jumbotron className='form-jumbotron'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="form__icon"></span>Title</Form.Label>
                                        <input name="title" className="form-control" type="text" value={this.state.title} placeholder="Give a descriptive title." onChange={this.handleInputChange} />
                                        <div className="invalid__feedback">{this.state.errors.title}</div>
                                    </Form.Group>

                                   
                                    <Form.Group>
                                    <Form.Label><span className="form__icon"></span>Describe content Here</Form.Label>
                                    <ReactQuill 
                                        style={{backgroundColor: 'white'}} theme="snow"  value={this.state.description} onChange={this.handleEditorChange} 
                                        modules={this.modules} formats= {formats}/>
                                        <div className="invalid__feedback">{this.state.errors.description}</div>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label><span className="form__icon"></span>Read Duration (in minutes)</Form.Label>
                                        <input name="duration" className="form-control" type="text" value={this.state.duration} placeholder="Expected read duration of Blog in minutes." onChange={this.handleInputChange} />
                                        <div className="invalid__feedback">{this.state.errors.duration}</div>
                                    </Form.Group>
                                    <Button className='mt-4' onClick={this.handleSubmit} variant="info"><span className='fa fa-paper-plane mr-3' />Publish Blog</Button>
                            </Form>
                          </Jumbotron>
                        </div>
                
                </Col>
                </Container>
                <ToastContainer 
                  autoClose={false}
                  />
          </div>
         
        )
      }
}

export default addBlogs;