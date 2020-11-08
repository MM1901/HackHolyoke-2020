import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#eecc55";

function Page_1(props) {
    const [text, setText] = useState('');
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.bigText}>What is something you are genuinely happy about today?</Text>
            <TextInput style={styles.input} onChangeText={text => setText(text)} placeholder="I got..." />
            <View style={styles.centerer}>
                <Icon raised name='arrow-forward' color={bgColor} size={50} onPress={() => props.navigation.navigate('Page_2', { text: text, index: 0 })} />
            </View>
        </SafeAreaView>
    );
}

export default Page_1;