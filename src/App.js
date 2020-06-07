import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%'
  },
  appBar: {
    background: '#151515'
  },
  font: {
    color: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <nav className="display_flex">
          <ElevationScroll {...this.props}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.font} variant="h4">Cinema</Typography>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </nav>
        <section>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="App-bar">
                Hellow World
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
        </section>
        <section>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
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
        </section>
        <hr></hr>
        <footer>
          <div className="App">
            <div className="App-header2">
              <p className="question-title" variant="inherit">질문이 있으신가요? 고객 센터에 문의하세요.</p>
                <div id="question_menu">
                  <ul>
                    <li><a href="#" target="_self" variant="h6">자주 묻는 질문</a></li>
                    <li><a href="#" target="_self" variant="h6">고객 센터</a></li>
                    <li><a href="#" target="_self" variant="h6">계정</a></li>
                    <li><a href="#" target="_self" variant="h6">회원 약관</a></li>
                    <li><a href="#" target="_self" variant="h6">문의하기</a></li>
                    <li><a href="#" target="_self" variant="h6">개인 정보</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
