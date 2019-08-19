import React from 'react';
import ChangePasswordComponent from "../components/ChangePasswordComponent";
import {Paper} from "@material-ui/core";
import HomeContainer from "../components/HomeContainer";


export default function ChangePassword() {

  return (
      <HomeContainer>
          <Paper>
             <ChangePasswordComponent/>
          </Paper>
      </HomeContainer>
  );
}