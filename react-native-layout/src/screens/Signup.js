import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputText}>
            <Text style={styles.message}>Already have an account?</Text>
            <Text style={styles.link}> Login</Text>
        </View>
      </View>


      <View style={styles.content}>
        <TextInput placeholder="Name" style={styles.inputContainer} />
        <TextInput placeholder="Email" style={styles.inputContainer} />
        <TextInput placeholder="Password" style={styles.inputContainer} secureTextEntry />
        <TextInput placeholder="Confirm Password" style={styles.inputContainer} secureTextEntry />
      </View>


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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, 
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputText: {
        flexDirection: 'row',
        marginTop: 10,
    },
    message: {
        fontSize: 16,
    },
    link: {
        fontSize: 16,
        color: '#1e90ff',
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
        marginBottom: 20,
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

    footer: {
        flex: 1,
    }
});
