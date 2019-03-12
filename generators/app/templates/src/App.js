import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import {getSample} from './state/reducers';
import {setSample} from './state/actions';

class App extends Component {

  static propTypes = {
    name: PropTypes.string
  };

  handleChangeName = e => {
    this.props.setSample(e.target.value);
  };

  render() {
    const {name} = this.props;
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
      What's your name? <input className="App-sample-input"
    autoFocus
    onChange={this.handleChangeName}/>
    </p>
    <p>
    {name ? (
        <React.Fragment>
        Welcome to React + Redux {name}!
    <br/>
    </React.Fragment>
  ) : null}
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
      >
      Learn React
    </a>
    </header>
    </div>
  );
  }
}

const mapStateToProps = state => ({
  name: getSample(state)
});

const mapDispatchToProps = {
  setSample
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
