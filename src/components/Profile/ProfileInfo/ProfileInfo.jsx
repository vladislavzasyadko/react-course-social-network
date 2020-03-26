import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
//import pmodule from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div><img src={props.profile.photos.large} alt="#" /></div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.fullName}</div>
      <ProfileStatus status={"Hello my friends!"}/>
    </div>
  );
};

export default ProfileInfo;
