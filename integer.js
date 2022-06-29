import React from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
export default class Integer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: 0, factorielle: '', prime: false }
    }

    handleChange = (a) => {
        let newA = parseInt(a);
        this.setState({ a: newA });
    }

    factorielle = (a) => {
        if (!isNaN(a)) {
            let total = 1;
            while (a > 1) { // 1 pour économiser une boucle (par rapport à 0)
                total *= a;
                a--;
            }
            this.setState({ factorielle: total });
        }
    }

    prime = (a) => {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                this.setState({ prime: false });
                return false;
            }
        }
        this.setState({ prime: true });
    }

    handleSubmit = (a) => {
        this.factorielle(a);
        this.prime(a);
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Nombre"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleChange} />
                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => this.handleSubmit(this.state.a)}>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text>Factorielle: {this.state.factorielle}</Text>
                    <Text>Nombre premier: {this.state.prime ? "Oui" : "Non"}</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})