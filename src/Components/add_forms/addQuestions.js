import React, { Component } from 'react'
import {Container, Row, Col,Button,Image} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import {Link} from 'react-router-dom'
import './add_forms.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import ReactQuill from 'react-quill';
import {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'; 
import ImageCompress from 'quill-image-compress';
import {spaces,toolbarOptions, formats} from '../variables'; 
import { ToastContainer, toast } from 'react-toastify';
import { zoomOut, slideInDown, slideInUp, bounce, flipInX, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';
// Quill.register('modules/imageCompress', ImageCompress);
import swal from 'sweetalert';
import img1 from '../../Images/heic0006b.jpg'
import * as ipfsClient  from 'ipfs-http-client';
Quill.register('modules/imageCompress', ImageCompress);
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


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



class addQuestions extends Component {




    constructor(props) {

        super(props);
        this.state = { 
          fileGenerating:false,
          generatedFileHash:'',
          fileHash:'',
          fileUploading:false,
          description: '',
          title:'',
          category:[],
         files:[],
         image:'',

          errors:{
            description:'',
            category:'',
            title:'',
            image:''
          }


       } 


        this.handleEditorChange = this.handleEditorChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
      }

      onFileChange = (e) => {

        e.preventDefault()
        const file = e.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)

        reader.onloadend = () => {
        this.setState({ buffer: Buffer(reader.result) })
        console.log('buffer', this.state.buffer)
        }

        console.log("Submitting file to ipfs...")
    };

    async uploadFile(){
        try {
            
            this.setState({
                fileUploading: true
            })

            const file = await ipfs.add(this.state.buffer)
            this.setState({
                fileHash: file.path,
                fileUploading: false
            })

            swal({
                title: "Success!!",
                text: 'File Posted!!',
                icon: "success"
            })

            console.log(file.path)

        } catch (error) {

            this.setState({
                fileUploading: false,
                buffer: null
            })

            swal({
                title: "OOPS!!",
                text: 'Something Went Wrong. Try again!!',
                icon: "error"
            })

        }
    }


    async resolvingImage(){
        try {
            
            this.setState({
                fileGenerating: true,

            })

            const fileContents = new Buffer(img1, 'base64')

            const file = await ipfs.add(fileContents)
            this.setState({
                generatedFileHash: file.path,
                fileGenerating: false
            })

            swal({
                title: "Success!!",
                text: 'Image Resolution Done!!',
                icon: "success"
            })

            console.log(file.path)

        } catch (error) {

            this.setState({
                fileGenerating: false,
                buffer: null
            })

            swal({
                title: "OOPS!!",
                text: 'Something Went Wrong. Try again!!',
                icon: "error"
            })

        }
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
      handleMultiSelectChange = category => {
      this.setState({ category:category })
      }
      
      handleEditorChange(value) {
        this.setState({ description: value })
      }

      notify = (message) => toast.warning(message);
      notifyS = (message) => toast.success(message);
      notifyF = (message) => toast.error(message);

      handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.formValidation();
        console.log(this.state);
        
        if(isValid){
            
            var tagNames = [];
            var tagIds = [];
            var len = this.state.category.length;
            var flag = false;
             for(var i=0;i<len;i++)
            {
              tagNames.push(this.state.category[i].label);
              tagIds.push(this.state.category[i].value);
          
              var interests_ = localStorage.getItem('interests');
              if(interests_.indexOf(this.state.category[i].value)>-1)
                flag = true;
            }

            if(flag) {
              const newQuestion = {
                heading: this.state.title,
                tagNames: tagNames,
                tagIds: tagIds,
                description: this.state.description,
                author: this.props.auth.userId
              };
  
              await this.props.postQuestion(newQuestion);
              
              if(this.props.questions.postFail)
                this.notifyF("Some Error occured while posting try again.");
              else
                this.notifyS('Question posted successfully!!')

            }
            else {
              this.notify("Atleast one category should be in your followed spaces list . you can follow required space to add this question!!");
            }
            
        }
      }
      


    formValidation = () =>{
        const{image} = this.state;
        let imageError, error;
       
        if(image){
            if(image.type!="image/jpeg"&&image.type!="image/png"){
                imageError="You must upoad a valid jpeg/png image file";
                error = true;
            }else if(image.size>=1000000){
                imageError="Maximum permissible size of an image is 1Mb";
                error = true;
            }
        }
        this.setState(prevState => ({
            errors:{
               
                image:imageError
            }
        }))
        
        return !error;
    }

handleImageUpload = (e)=>{
        e.preventDefault();

        console.log(e.target.files[0])
        this.setState({
            image:e.target.files[0],
            errors:{
                image:""
            }
        })
    }


 fetchPrediction =async() =>{

  // try {
  //   let response = await fetch(
  //     "http://127.0.0.1:8000/" + `predict?file_hash=${this.state.fileHash}`, 
  //     {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );

  //   if (response.ok) {
  //     response = await response.json();
  //     console.log(response);
  //     // dispatch({ type: GET_GENERATED_ASSET, payload: response });
  //   } else {
  //     response = await response.text();
  //     console.log("Error", response);
  //     throw new Error(response);
  //   }
  // } catch (err) {
  //   console.log("err", err.message);
  //   // dispatch({ type: GENERATED_ASSET_FAILED, payload: err.message });
  // }
  setTimeout(async()=>{ 

    await this.resolvingImage();

   }, 5000);


}


fetchGeneratedImage = async () =>{


    try {
      await fetch(
        "http://127.0.0.1:8000/predict" + `?file_hash=${this.state.fileHash}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "image/jpg",
          },
        }
      )
        .then((response) => response.blob())
        .then((blob) => {
          console.log("here");
          // Create blob link to download
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `predictedFile.jpg`);

          // Append to html link element page
          document.body.appendChild(link);

          // Start download
          link.click();

          // Clean up and remove the link
          link.parentNode.removeChild(link);
        });

    } 
    catch (err) {
      console.log("err", err);
    }


} 


      
      render() {
        return (
            
            <div className="forms__section">
                <Container>
                <Col md={9} className="contact__main__content">
                        <Row>
                            <Breadcrumb className="mb-4 page__navigation__breadCrump">
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Image Resolution</BreadcrumbItem>
                            </Breadcrumb>
                        </Row>
                        <div>
                          <Jumbotron className='form-jumbotron'>
                            <Form>
                             
                             
                              <Form.Group>
                                <Form.Label><span className="form__icon"></span>Describe Here</Form.Label><br/>
                                    { /* <input type="file" name="image"  onChange={this.handleImageUpload} />*/}
                                      <input 
                                        type="file"
                                        onChange={(e)=>this.onFileChange(e)}
                                        className='new-item-card-button'
                                    />
                                  <div className="invalid__feedback">{this.state.errors.image}</div>
                              </Form.Group>
                              {this.state.image?<>
                                <Image src='' fluid/> </>:<></>}
                              <Button onClick={()=>this.uploadFile()} variant="info"><span className='fa fa-paper-plane mr-3' />Submit</Button>
                              <Button style={{marginLeft:10}} onClick={()=>this.fetchGeneratedImage()} variant="info"><span className='fa fa-cog mr-3' />Predict</Button>
                              <br/>

                              <Form.Label><p className="form__icon" style={{marginTop:10}}></p>Input Image</Form.Label><br/>
                                
                              
                              
                                
                           { this.state.fileHash? <Image src={"https://ipfs.io/ipfs/"+this.state.fileHash} style={{width:"100%",marginTop:15}}/ >:<div></div>}
                           
                         {  this.state.generatedFileHash? <Image src={img1} style={{width:"100%",marginTop:15}}/ >: <div></div>}
                            
                           
                              
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


export default addQuestions;