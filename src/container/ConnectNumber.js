import {connect} from "react-redux"
import {NUMBER,FLOAT} from '../actions/number'
import Numbers from '../components/Number'

const mapStateToProps = (state) => ({
    number:state.number.number
})

const mapDispatchToProps = (dispatch) => ({
    onClickNU:()=>dispatch({type:NUMBER}),
    onClickFL:()=>dispatch({type:FLOAT})
})

const ConnectNumber = connect(
    mapStateToProps,
    mapDispatchToProps
)(Numbers)

export default ConnectNumber


