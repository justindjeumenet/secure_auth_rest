import React from 'react';
import SignUpComponent from "../components/SignUpComponent";
import {Paper} from "@material-ui/core";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";


export default function SignUp() {

  return (
      <HomeContainer>
          <Container>
              <Paper>
                <SignUpComponent/>
              </Paper>
          </Container>
      </HomeContainer>
  );
}
