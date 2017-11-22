import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends React.Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input 
              label="name"
              placeholder="Jane"
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
            <Input 
                label="Phone"
                placeholder="555-555-5555"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="friday" value="friday" /> 
            <Picker.Item label="Saturday" value="saturday" /> 
            <Picker.Item label="Sunday" value="sunday" /> 
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
