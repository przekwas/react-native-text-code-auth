import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-7ab66.cloudfunctions.net';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            code: ''
        };
    }

    handleSubmit = async () => {

        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
        
            firebase.auth().signInWithCustomToken(data.token);
        
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
                    <FormLabel>Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button
                    title="Sign In"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        marginLeft: 25,
        textDecorationLine: 'underline'
    }
});

export default SignInForm;