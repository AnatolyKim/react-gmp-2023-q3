import React from 'react';
import './Counter.css'

class Counter extends React.Component {
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
      { className: 'counter'},
      React.createElement('button', { onClick: () => this.decrement() }, '<'),
      React.createElement('span', { className: 'count'}, this.state.count),
      React.createElement('button', { onClick: () => this.increment() }, '>'),
    );
  }
}

export default Counter;