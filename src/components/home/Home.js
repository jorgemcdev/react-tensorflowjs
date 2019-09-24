import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import linearImage from './linear.png';
import objectsImage from './objects.png';

const Index = () => (
  <>
    <Row>
      <Col className="mt-4 mb-4">
        <h2>Reactjs Tensorflow samples</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="text-white bg-danger">
          <CardImg top width="100%" src={linearImage} alt="Card image cap" />

          <CardBody>
            <CardTitle>
              <h3>Linear Regression</h3>
            </CardTitle>
            <CardSubtitle>Tensorflow.js</CardSubtitle>
            <CardText>
              In statistics, linear regression is a linear approach for
              modelling the relationship between a scalar
            </CardText>
            <Link className="btn btn-secondary" role="button" to="/linear">
              View
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col className="align-self-center">
        <Card className="text-white bg-info">
          <CardImg top width="100%" src={objectsImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <h3>Object Detection</h3>
            </CardTitle>
            <CardSubtitle>COCO-SSD model</CardSubtitle>
            <CardText>
              This model detects objects defined in the COCO dataset, which is a
              large-scale object detection, segmentation, and captioning dataset
            </CardText>
            <Link className="btn btn-secondary" role="button" to="/objects">
              View
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
);
export default Index;
