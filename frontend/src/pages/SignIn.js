import React from 'react';
import SignInComponent from "../components/SignInComponent";
import {Paper} from "@material-ui/core";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function SignIn() {

  return (
      <HomeContainer>
          <Container>
              <Paper>
              <SignInComponent/>
          </Paper>
          </Container>
      </HomeContainer>
  );
}
