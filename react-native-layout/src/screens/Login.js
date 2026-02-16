import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../assets/login.png')} />
            <Text style={styles.headerText}>LOGIN</Text>
        </View>


        <View style={styles.content}>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={22} color="grey" style={styles.icon} />
                <TextInput placeholder="Email" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={22} color="grey" style={styles.icon} />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
            </View>
        </View>


        <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.inputText}>
                <Text style={styles.message}> Don't have an account?</Text>
                <Text style={styles.link}> Sign Up</Text>
            </View>
        </View>



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
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '90%',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:10,
        paddingHorizontal: 15,
        height: 50 
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    footer: {
        flex: 1,
    },
    loginButton: {
        color: 'white',
        fontSize: 18,
        backgroundColor: '#1e90ff',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20,
    },
    inputText: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    message: {
        fontSize: 16,
    },
    link: {
        fontSize: 16,
        color: '#1e90ff',   
    },
});
