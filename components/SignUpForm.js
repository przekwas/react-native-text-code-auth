import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-7ab66.cloudfunctions.net';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: ''
        };
    }

    handleSubmit = async () => {

        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button
                    title="Sign Up"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }

};

export default SignUpForm;