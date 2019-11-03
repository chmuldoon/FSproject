import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import { fetchPost } from "../../actions/post_actions";

const mapStateToPros = state => {
  let currentUser = state.entities.users[state.session.id];

}