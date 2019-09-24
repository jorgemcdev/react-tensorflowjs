import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const List = ({ data }) => {
  return (
    <>
      <Table bordered striped>
        <caption>Data</caption>
        <thead>
          <tr>
            <th>Temp</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => a.x - b.x)
            .map((el, i) => (
              <tr key={i}>
                <td>{el.x}</td>
                <td>{el.y}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;
