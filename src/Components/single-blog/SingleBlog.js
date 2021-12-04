import React, { Component, useState } from "react";
import { Link  } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Collapse,
  ButtonGroup,
  Button,
  CardImg,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
  Label,
  Jumbotron,
  CardHeader,
} from "reactstrap";
import { baseUrl, frontendBaseUrl } from "../../shared/baseUrl";
import Loading from "../loading";
import { LocalForm, Control, Errors } from "react-redux-form";
import { ToastContainer, toast } from 'react-toastify';
import { zoomOut, slideInDown, slideInUp, bounce, flipInX, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import 'react-toastify/dist/ReactToastify.css';
import profilePic from "../../Images/profile_pic.png";
import "../single-blog/SingleBlog.css";

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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;

const RenderTags = ({ question }) =>
  question.tagNames.map((tag) => {
    return (
      <Badge pill className="mr-2" color="primary">
        {tag}
      </Badge>
    );
  });


class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shareModalOpen: false,

    };
  }

 
  onShareClicked() {
    this.setState({
      shareModalOpen: !this.state.shareModalOpen,
    });
  }

  
  render() {


    // let url = baseUrl + "users/" + this.props.blog.author._id + "/image";
    const setAlternateImage = (e) => {
      console.log(e.target);
      e.target.src = profilePic;
      console.log("Done task");
    };

    if (this.props.isLoading ) {
      return <Loading type="spokes" color="grey" />;
    } else if (this.props.errMess ) {
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      </div>;
    }
    return (
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="single-blog-heading">
              {this.props.blog.heading}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col
                className="mb-3 single-question-profile"
                xs={4}
                md={3}
                lg={2}
              >
              { /* <CardImg
                  onError={setAlternateImage}
                  className="single-question-profile-pic"
                  src={url}
                />
                */
              }
                <CardSubtitle className="single-question-profile-name">
                  <Link to={`/profile/${this.props.blog.author._id}`}>
                    @{this.props.blog.author.user_name}
                  </Link>
                </CardSubtitle>
                <CardText className="single-question-profile-name text-muted">
                  {" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(this.props.blog.createdAt)))}
                </CardText>
                <CardText className="single-question-profile-name text-muted">
                  {" "}
                  {this.props.blog.duration} min read{" "}
                </CardText>
              </Col>
              <Col xs={12} md={9} lg={10}>
                <Row>
                  <Col className="mb-5">
                    <RenderTags question={this.props.blog} />
                  </Col>
                  <Col xs={12}>
                    <div
                      className="editor__content"
                      dangerouslySetInnerHTML={{
                        __html: this.props.blog.description,
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <ButtonGroup className="ml-4">
            
                <Button color="success" onClick={() => this.onShareClicked()}>
                  <span className="fa fa-lg fa-share"></span>
                </Button>
              </ButtonGroup>
            </Row>
          </CardBody>
        </Card>
   
        <ToastContainer/>
        <Modal
          isOpen={this.state.shareModalOpen}
          toggle={() => this.onShareClicked()}
        >
          <ModalHeader toggle={() => this.onShareClicked()}>
            Let's Share this !!
          </ModalHeader>
          <ModalBody>
            <FacebookShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
              quote={"Can you answer this ??"}
              hashtag={"#Poogle"}
            >
              <FacebookIcon round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
              separator={"\n"}
            >
              <WhatsappIcon round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <TelegramShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
            >
              <TelegramIcon round></TelegramIcon>
            </TelegramShareButton>
            <LinkedinShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
              source={"WWW.poogle.com"}
            >
              <LinkedinIcon round></LinkedinIcon>
            </LinkedinShareButton>
            <TwitterShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
              hashtags={"#Poogle"}
            >
              <TwitterIcon round></TwitterIcon>
            </TwitterShareButton>
            <RedditShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              title={"Can you answer this ??"}
            >
              <RedditIcon round></RedditIcon>
            </RedditShareButton>
            <PinterestShareButton
              url={
                frontendBaseUrl+"blog-" +
                this.props.blog._id +
                "-" +
                this.props.blog.heading
              }
              description={"Can you answer this ??"}
              title={"Can you answer this ??"}
            >
              <PinterestIcon round></PinterestIcon>
            </PinterestShareButton>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.onShareClicked()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    
    );
  }
}

export default SingleBlog;