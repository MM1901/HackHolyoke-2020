import * as React from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Exercise.style';

const bgColor = "#88aaff";

const phrases = ["I know that ", "Despite that, I am proud of myself for getting up today", "I am worthy"];
function Page_2(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.smallText}>Read aloud:</Text>
            <Text style={styles.bigText}>{phrases[props.route.params.index]}{props.route.params.text}</Text>
            <View style={styles.centerer}>
                <Icon raised name='arrow-forward' color={bgColor} size={50} onPress={() => {
                    if (props.route.params.index < 2) {
                        props.navigation.navigate('Page_2', { text: "", index: props.route.params.index + 1 });
                    } else {
                        props.navigation.navigate('Page_3');
                    }
                }} />
            </View>
        </SafeAreaView>
    );
}

export default Page_2;