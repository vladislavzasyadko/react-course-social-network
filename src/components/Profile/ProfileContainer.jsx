import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer';
import { withRouter, Redirect } from "react-router-dom";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 6268;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if(!this.props.isAuth){
      return <Redirect to={'/login'}/>
    }
    return <div>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getUserProfile ,
})(WithUrlDataComponent);
