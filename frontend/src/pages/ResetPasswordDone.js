import React from 'react';
import ResetPasswordDoneComponent from "../components/ResetPasswordDoneComponent";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function SignUp() {

  return (
      <HomeContainer>
        <Container>
           <ResetPasswordDoneComponent/>
        </Container>

      </HomeContainer>
  );
}

