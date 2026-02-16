import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../assets/login.png')} />
            <Text style={styles.headerText}>LOGIN</Text>
        </View>


        <View style={styles.content}></View>


        <View style={styles.footer}></View>



    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87cefa',
    },
    header: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    content: {
        flex: 2,
        borderWidth: 1,
    },
    footer: {
        flex: 1,
        borderWidth: 1,
    },
});
