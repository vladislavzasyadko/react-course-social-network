import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile, updateStatus, getStatus} from './../../redux/profileReducer';
import { withRouter} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 6269;//my id
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    </div>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  status: state.profileData.status
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataComponent = withRouter(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    getUserProfile , getStatus, updateStatus
  }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {
//   getUserProfile ,
// })(WithUrlDataComponent);
