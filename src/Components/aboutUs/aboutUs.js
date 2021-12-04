import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { zoomOut, slideInDown, slideInUp, bounce, flipInX, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import "./aboutUs.css";
import Jaskaran from '../../Images/Jaskaran.png'
import Ishan from "../../Images/Ishan.jpeg";
import Tejen from "../../Images/Tejen.jpeg";
import Kunal from "../../Images/Kunal.jpeg";

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

function AboutUs() {
  return (
    <div className="container about">
      <div className="row">
        <Breadcrumb className="mt-3 ml-3">
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="row justify-content-center">
        <h2 className="dev-heading">
          <span className="fa fa-lg fa-code mr-4" />
          Developers
        </h2>
      </div>
      <div className="row justify-content-center dev-content">
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 mt-1 mb-4">
          <Card className="space dev-card">
            <CardBody>
              <CardTitle tag="h5" className="dev-name">
                Jaskaran Singh
              </CardTitle>
            </CardBody>
            <CardImg className="space-img" src={Jaskaran} />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-4 text-muted mt-2">
                Roles
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-4 text-muted">
                <span className="fa fa-star fa-lg question-icon mr-2" />{" "}
                Frontend Development
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <span className="fa fa-database fa-lg follower-icon mr-2" />{" "}
                Backend Development
              </CardSubtitle>
              <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/jaskaran-singh-351426192/"
                  className="col-2 fa fa-linkedin linked ml-2"
                />
                <Button
                  target="new"
                  href="https://github.com/jaskaran-23"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                />
                
                <Button
                  target="new"
                  href="mailto:jaskaran.2397@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 mt-1 mb-4">
          <Card className="space dev-card">
            <CardBody>
              <CardTitle tag="h5" className="dev-name">
                Kunal Mahajan
              </CardTitle>
            </CardBody>
            <CardImg className="space-img" src={Kunal} />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-4 text-muted mt-2">
                Roles
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-4 text-muted">
                <span className="fa fa-star fa-lg question-icon mr-2" />{" "}
                Frontend Development
              </CardSubtitle>
             
              <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/kunal-mahajan-431b97189/"
                  className="col-2 fa fa-linkedin linked ml-2"
                />
                <Button
                  target="new"
                  href="https://github.com/kunalmahajan12"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                />
                <Button
                  target="new"
                  href="mailto:jaskaran.2397@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 mt-1 mb-4">
          <Card className="space dev-card">
            <CardBody>
              <CardTitle tag="h5" className="dev-name">
                Ishaan Verma
              </CardTitle>
            </CardBody>
            <CardImg className="space-img" src={Ishan} />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-4 text-muted mt-2">
                Roles
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <span className="fa fa-database fa-lg follower-icon mr-2" />{" "}
                Backend Development
              </CardSubtitle>

              <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/ishaannverma/"
                  className="col-2 fa fa-linkedin linked ml-2"
                />
                <Button
                  target="new"
                  href="https://github.com/ishaannverma"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                />
                <Button
                  target="new"
                  href="mailto:jaskaran.2397@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-6 mt-1 mb-4">
          <Card className="space dev-card">
            <CardBody>
              <CardTitle tag="h5" className="dev-name">
                Tejen Prasadan
              </CardTitle>
            </CardBody>
            <CardImg className="space-img" src={Tejen} />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-4 text-muted mt-2">
                Roles
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-4 text-muted">
                <span className="fa fa-star fa-lg question-icon mr-2" />{" "}
                Frontend Development
              </CardSubtitle>
            
              <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/mwlite/in/tejen-pradhan-6495081bb"
                  className="col-2 fa fa-linkedin linked ml-2"
                />
                <Button
                  target="new"
                  href="https://github.com/tejenpradhan"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                />
                <Button
                  target="new"
                  href="mailto:jaskaran.2397@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
