import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Row, Col } from 'reactstrap';

import List from './List';
import Chart from './Chart';

import sampleData from './data';
import PredictForm from './PredictForm';

const LinearRegression = () => {
  const [data, setData] = useState(sampleData);
  const [prediction, setPrediction] = useState();

  let linearModel;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    trainModel();
  };

  const trainModel = async () => {
    // Define a model for linear regretion
    linearModel = tf.sequential();

    // Prepare a Model for training: Loss + optimizer
    linearModel.add(tf.layers.dense({ units: 1, inputShape: 1 }));
    linearModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Training Data
    const arr_xs = [];
    const arr_ys = [];

    for (let item of data) {
      arr_xs.push(item.x);
      arr_ys.push(item.y);
    }

    const xs = tf.tensor1d(arr_xs);
    const ys = tf.tensor1d(arr_ys);
    await linearModel.fit(xs, ys);
  };

  const predict = val => {
    const output = linearModel.predict(tf.tensor2d([val], [1, 1]));
    const prediction = Array.from(output.dataSync())[0] || '';
    return prediction;
  };

  const handlePredict = val => {
    val = parseInt(val);
    setPrediction(predict(val));
  };

  return (
    <Row>
      <Col>
        <PredictForm handlePredict={handlePredict} prediction={prediction} />
        <List data={data} />
      </Col>
      <Col>
        <Chart data={data} />
      </Col>
    </Row>
  );
};

export default LinearRegression;
