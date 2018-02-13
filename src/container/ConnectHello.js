import {connect} from "react-redux"
import Hello from "../components/Hello.js"
import {TOCHINE,TOENGLISH} from '../actions/change.js'

const mapStateToProps = (state) => {
    return {
      msg:state.change.content
    }
  }

const mapDispatchToProps = (dispatch) => ({
    onClickCH:()=>dispatch({type:TOCHINE}),
    onClickEN:()=>dispatch({type:TOENGLISH})
})

const ConnectHello = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

export default ConnectHello


