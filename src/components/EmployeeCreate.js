import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';


class EmployeeCreate extends React.Component {


    onButtonPress() {

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="name"
                        placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;
