import { connect } from "react-redux";
import Hello from "../components/Hello.js";
import { ToCH, ToEN } from "../actions/change.js";

const mapStateToProps = state => {
  return {
    msg: state.change.content
  };
};

const mapDispatchToProps = dispatch => ({
  onClickCH: dispatch((dispatch, getState) => {
    setTimeout(() => {
      dispatch(ToCH);
    }, 1000);
  }),
  onClickEN: () => dispatch(ToEN)
});

const ConnectHello = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default ConnectHello;
