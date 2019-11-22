import { connect } from "react-redux";
import Search from "./search";
import { fetchUsers } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return({
    users: Object.values(state.entities.users)
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));