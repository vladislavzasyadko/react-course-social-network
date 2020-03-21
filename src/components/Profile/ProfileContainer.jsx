import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer';
import { withRouter} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  getUserProfile ,
})(WithUrlDataComponent);
