import React from 'react';
import SignUpDoneComponent from '../components/SignUp_DoneComponent';
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function SignUp() {

  return (
      <HomeContainer>
        <Container>
           <SignUpDoneComponent/>
        </Container>

      </HomeContainer>
  );
}

