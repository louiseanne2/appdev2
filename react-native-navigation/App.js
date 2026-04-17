import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{message}</Text>

      <Button>
        title="Go to Details with name"
        onPress={() => navigation.navigate('Details', {name: 'Louise'})}
      </Button>
      
      <Button>
        title="Push Details Again"
        onPress={() => navigation.push('Details')}
      </Button>
    </View>
  )
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Hello, {name}</Text>

      <Button>
        title="Go Back"
        onPress={() => navigation.goBack()}
      </Button>

      <Button>
        title="Update Name"
        onPress={() => navigation.setParams({name: 'Updated Louise'})}
      </Button>

      <Button 
        title="Send Message Back"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: { message: 'Hello from Details' },
            merge: true,
          })
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
          options={{name:'Default User'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}