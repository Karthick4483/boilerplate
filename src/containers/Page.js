import React from "react";
import { connect } from "react-redux";
import { sayHello } from "../actions";

let Page = ({ title, list }) => (
  <>
    <h2>{title}</h2>
  </>
);

const mapStateToProps = (store) => ({
  title: store.contacts.title,
  list: store.contacts.list,
});

const mapDispatchToProps = (dispatch) => ({
  sayHelloWorld: () => {
    dispatch(sayHello());
  },
});

Page = connect(mapStateToProps, mapDispatchToProps)(Page);

export default Page;
