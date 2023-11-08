import React from 'react';
import styles  from './styles.module.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return React.createElement(
      'div',
      { className: styles.counter},
      React.createElement('button', { onClick: () => this.decrement(), className: styles.button }, '<'),
      React.createElement('span', { className: styles.count }, this.state.count),
      React.createElement('button', { onClick: () => this.increment(), className: styles.button }, '>'),
    );
  }
}
