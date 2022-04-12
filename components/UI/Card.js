import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
    return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '85%',
        backgroundColor: 'grey',
        margin: 10
    }
});