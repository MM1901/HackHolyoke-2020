import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#88aaff";

function Page_2(props) {
    React.useEffect(() => {
        let timer = setTimeout(() => {
            for (let i = 0; i < 2; ++i) {
                navigation.dispatch({ type: 'Navigation/BACK' });
            }
        }, 1200);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bigText}>Have a good day</Text>
        </SafeAreaView>
    );
}

export default Page_2;