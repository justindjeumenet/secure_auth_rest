import React from 'react';
import ResetPasswordConfirmComponent from "../components/ResetPasswordConfirmComponent";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function ResetPasswordConfirm() {

  return (
      <HomeContainer>
        <Container>
           <ResetPasswordConfirmComponent/>
        </Container>

      </HomeContainer>
  );
}
