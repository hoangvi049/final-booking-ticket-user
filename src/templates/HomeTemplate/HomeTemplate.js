import React, { Fragment } from "react";
import { Route } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <HomeLayout>
            <Component {...propsRoute}></Component>
          </HomeLayout>
        );
      }}
    />
  );
};

export default HomeTemplate;
