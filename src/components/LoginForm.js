import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';
import { emailChanged } from '../actions'

class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="********"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}



export default connect(null, { emailChanged })(LoginForm);
