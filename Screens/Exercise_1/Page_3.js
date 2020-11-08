import styles from './Exercise.style';
import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

const bgColor = "#eecc55";

function Page_3(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bigText}>Well Done</Text>
        </SafeAreaView>
    );
}

export default Page_3;