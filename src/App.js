import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button, CardSection } from './component/common';
import LoginForm from './component/LoginForm';


class App extends Component{

    state={loggedIn:null}

        componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDhPJMPgUt_O4NvHCfnoNB8uL71G-RLOmk",
            authDomain: "terasol.firebaseapp.com",
            projectId: "terasol",
            storageBucket: "terasol.appspot.com",
            messagingSenderId: "80969650443",
            appId: "1:80969650443:web:cbb1886579bde51879920e",
            measurementId: "G-YD5WGZXMF0"
        });
            
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else{
                this.setState({ loggedIn: false }); 
            }
        });
        }
    
    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>
                            Log Out
                        </Button>
                        </CardSection>
                );
            case false:
                return <LoginForm />
            default:
                <Spinner />
        }

    }
    

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;