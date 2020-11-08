import { StyleSheet } from 'react-native';

const bgColor = "#ff90aa";

export default StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: bgColor,
        padding: 10,
    },
    input: {
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        fontSize: 40,
        height: 40,
        color: 'white',
    },
    bigText: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        color: 'white',
        marginTop: '20%',
        marginBottom: 100,
    },
    smallText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        marginTop: '5%',
        marginBottom: 50,
    },
    centerer: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    }
});