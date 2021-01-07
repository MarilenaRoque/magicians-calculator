import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operator: null,
    };
  }

  render() {
    const { total, next, operator } = this.state;
    return (
      <>
        <Display content={next} total={total} operator={operator} />
        <ButtonPanel />
      </>
    );
  }
}
