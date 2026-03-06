import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

export default function Todo() {

    const [search, setSearch] = useState('') 
    const [todo, setTodo] = useState('')


    const [todosList, setTodos] = useState([
        { id: 1, text: 'Learn React Native', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
    ]);

    const filteredTodos = todosList.filter(item => item.text.includes(search));

    const addTodo = () => {
        setTodos ([
            {
                id: Date.now().toString(),
                text: todo,
                completed: false,
            },
            ...todosList
        ])
        setTodo('')
    }

    const deleteTodo = (id) => {
        setTodos(todosList.filter(item => item.id !== id))
    }

    const confirmDelete = (id) => {
        Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', style: 'destructive', onPress: () => deleteTodo(id) },
        ])
    }

    const toggleTodo =(id) => {
        setTodos(todosList.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
    }

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Todo</Text>

            {/* Search Bar */}
            <TextInput 
            
                placeholder="Search todos..." 
                style={styles.searchTodos} 
                value={search}
                onChangeText={setSearch}
            />

            <ScrollView>
                {filteredTodos.map(item => (
                    <TouchableOpacity style={styles.todosContainer} key={item.id}>
                        <View style={styles.todoRow} onPress={() => toggleTodo(item.id)}>
                            
                            <View style={styles.todoLeft}>
                                <Ionicons name="checkmark-circle-outline" size={24} />
                                <Text 
                                    style={styles.todoText} 
                                    numberOfLines={1} 
                                    ellipsizeMode="tail"
                                >
                                    {item.text}
                                </Text>
                            </View>

                           
                            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                                <Ionicons name="trash-outline" size={24} color="#ff6347" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        placeholder='Add a todo...' 
                        style={styles.input} 
                        value={todo} 
                        onChangeText={setTodo} />

                    <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                        <Ionicons name="add-outline" size={24} color="#fff" />
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    searchTodos: {
        marginTop: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
    },
    todosContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    todoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    todoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 18,
        marginLeft: 10,
        maxWidth: '80%', 
        flexShrink: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 50,
    },
    input: {
        backgroundColor: '#f5f5f5',
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 15,
        width: '85%',
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#1e90ff',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});