import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types/navigation';
import CharacterListScreen from './screens/CharacterListScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import AddCharacterScreen from './screens/AddCharacterScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CharacterList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2a2a2a',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="CharacterList"
          component={CharacterListScreen}
          options={{ 
            title: 'Wuthering Waves',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={({ route }) => ({
            title: route.params?.character?.name || 'Personaje',
          })}
        />
        <Stack.Screen
          name="AddCharacter"
          component={AddCharacterScreen}
          options={{
            title: 'Agregar Personaje',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
