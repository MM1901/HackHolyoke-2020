import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#88aaff";

function Page_3(props) {
    React.useEffect(() => {
        let timer = setTimeout(() => {
            for (let i = 0; i < 3; ++i) {
                props.navigation.goBack(null);
            }
        }, 1200);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bigText}>Good Job!</Text>
        </SafeAreaView>
    );
}

export default Page_3;