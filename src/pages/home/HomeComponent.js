import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mustafiz's Home</title>
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
