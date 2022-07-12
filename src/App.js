/*
 * @Author: Chunwei Lu
 * @Date: 2022-02-14 02:29:22
 * @LastEditTime: 2022-07-11 23:14:23
 * @LastEditors: Chunwei Lu
 * @FilePath: /minimal-react-webpack-babel-setup/src/App.js
 */
import React from 'react';
import { isEmpty } from 'lodash';
// import isEmpty from 'lodash/isEmpty';

const App = ({ title }) => (
  <div>{isEmpty(title) ? 'Empty title' : title}</div>
);

export default App;
