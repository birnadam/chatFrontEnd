import React, { Component } from "react";
import SignIn from "./components/SignIn";
import Brand from "./components/Brand";
import Wrapper from "./components/Wrapper";
import Container from "./Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Brand title='VIDI' />
        <Container>
          <SignIn />
        </Container>
      </Wrapper>
    );
  }
}

export default App; 