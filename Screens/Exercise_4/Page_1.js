import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#88aaff";

function Page_1(props) {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.bigText}>So glad you are calm. Why don't you close your eyes, sit, and let thoughts pass through, and when you're ready to get to your day, you can continue.</Text>
            <View style={styles.centerer}>
                <Icon raised name='arrow-forward' color={bgColor} size={50} onPress={() => props.navigation.navigate('Page_2')} />
            </View>
        </SafeAreaView>
    );
}

export default Page_1;