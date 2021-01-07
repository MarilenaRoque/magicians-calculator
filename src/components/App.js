import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operator: null,
    };
  }

  handleClick = buttonName => {
    const data = calculate(this.state, buttonName);
    console.log(data);
    this.setState(
      data,
    );
  }

  render() {
    const { total, next, operator } = this.state;
    return (
      <>
        <button type="button" onClick={() => this.handleClick('7')}>Click Me</button>
        <Display next={next ? next.toString() : '0'} total={total} operator={operator} />
        <ButtonPanel />
      </>
    );
  }
}
