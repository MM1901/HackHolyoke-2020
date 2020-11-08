import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#ff90aa";

function Page_1(props) {
    const [text, setText] = useState('');
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.bigText}>What is making you angry?</Text>
            <TextInput style={styles.input} onChangeText={text => setText(text)} placeholder="I can't..." />
            <View style={styles.centerer}>
                <Icon raised name='arrow-forward' color={bgColor} size={50} onPress={() => props.navigation.navigate('Page_2', { text: text, index: 0 })} />
            </View>
        </SafeAreaView>
    );
}

export default Page_1;