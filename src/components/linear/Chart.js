import React, { Component } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
} from 'recharts';

const Chart = ({ data }) => (
  <ScatterChart
    width={500}
    height={400}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <CartesianGrid />
    <XAxis type="number" dataKey="x" name="temp" unit=" Cº" />
    <YAxis type="number" dataKey="y" name="sales" unit=" eur" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Scatter name="Ice Creams" data={data} fill="#8884d8" />
  </ScatterChart>
);

export default Chart;
