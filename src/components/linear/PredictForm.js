import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const PredictForm = ({ handlePredict, prediction }) => (
  <Form>
    <FormGroup row>
      <Label for="number" sm={3}>
        Temperature:
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          name="number"
          id="number"
          onChange={e => handlePredict(e.target.value)}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="prediction" sm={3}>
        Prediction:
      </Label>
      <Col sm={4}>
        <p className="mt-2"> {prediction} </p>
      </Col>
    </FormGroup>
  </Form>
);

export default PredictForm;
