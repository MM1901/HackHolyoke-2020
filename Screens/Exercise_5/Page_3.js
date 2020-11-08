import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#ff90aa";

function Page_3(props) {
    React.useEffect(() => {
        let timer = setTimeout(() => {
            for (let i = 0; i < 3; ++i) {
                navigation.dispatch({ type: 'Navigation/BACK' });
            }
        }, 1200);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bigText}>Well done!</Text>
        </SafeAreaView>
    );
}

export default Page_3;