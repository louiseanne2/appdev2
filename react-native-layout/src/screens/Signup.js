import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


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

      <View style={styles.footer}>
        <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
        </View>
        
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.facebook}>
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.socialText}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.google}>
            <Ionicons name="logo-google" size={20} color="#000" />
            <Text style={styles.socialTextGoogle}>Login with Google</Text>
            </TouchableOpacity>
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
        paddingHorizontal: 30,
        paddingBottom: 30,
    },
    signupButton: {
        backgroundColor: '#7CEFA3',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    signupButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },


    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    orText: {
        marginHorizontal: 10,
        color: '#666',
        fontWeight: '600',
    },


    socialContainer: {
        gap: 12,
    },

    facebook: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1877F2',
        paddingVertical: 12,
        borderRadius: 10,
        gap: 10,
    },

    google: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        gap: 10,
    },

    socialText: {
        color: '#fff',
        fontWeight: '600',
    },

    socialTextGoogle: {
        color: '#000',
        fontWeight: '600',
    },

    });
