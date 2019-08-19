import React from 'react';
import ResetPasswordComponent from "../components/ResetPasswordComponent";
import {Paper} from "@material-ui/core";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function ResetPassword() {
  return (
      <HomeContainer>
          <Container>
              <Paper>
                 <ResetPasswordComponent/>
              </Paper>
          </Container>
      </HomeContainer>
  );
}
