import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logout from '../screens/logout';
import Create from '../screens/create';
import Favorites from '../screens/favorites';
import Feed from '../screens/feed'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () =>{

   return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused? 'home': 'home-outline';
            } else if (route.name === 'Create') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Favorites'){
              iconName = focused ? 'heart':'heart-outline';
            } else if (route.name === 'Logout'){
              iconName = focused ? 'cog':'cog-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#119596',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <Tab.Screen name="Create" component={Create} options={{headerShown:false}}/>
        <Tab.Screen name="Favorites" component={Favorites} options={{headerShown:false}}/>
        <Tab.Screen name="Logout" component={Logout} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}

export default BottomTabNavigator
