import React, { Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/Feed';
import CreateHistory from './screens/CreatePost';
import Profile from './screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions= {({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name == 'Feed'){
                iconName = focused ? 'book' : 'book-outline';
              } else if ( route.name === 'CreatePosty'){
                iconName = focused ? 'create' : 'create-outline';
              } else if ( route.name === 'Profile'){
                iconName = focused ? 'profile' : 'create-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
          >
          <Tab.Screen name="INDICE" component={Feed} />
          <Tab.Screen name="CREAR HISTORIA" component={CreateHistory}/>
          <Tab.Screen name="PERFIL" component={Profile}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
