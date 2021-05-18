import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAPIdata } from "./action";
import ShowData from "./ShowData";
import Button from "@material-ui/core/Button";

// class App extends Component {
const App = (props) => {
  // render() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.fetchAPIdata()}
      >
        Fetch Data From API
      </Button>
      <ShowData />
    </div>
  );
  // }
};
const mapStateToProps = (state) => ({
  apiData: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAPIdata: () => dispatch(fetchAPIdata()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
