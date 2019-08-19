import React from 'react';
import AccountActivationComponent from "../components/AccountActivationComponent";
import {Paper} from "@material-ui/core";
import HomeContainer from "../components/HomeContainer";
import Container from "@material-ui/core/Container";

export default function AccountActivate(props) {
  const key = props.match.params.key;
  console.log(key);
  return (
      <HomeContainer>
          <Container>
              <Paper>
                 <AccountActivationComponent/>
              </Paper>
          </Container>
      </HomeContainer>
  );
}
