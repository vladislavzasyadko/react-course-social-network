import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer';
import { withRouter} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 6268;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataComponent = withRouter(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    getUserProfile ,
  }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {
//   getUserProfile ,
// })(WithUrlDataComponent);
