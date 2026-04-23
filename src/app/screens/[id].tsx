import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import  projects  from '@/constants/Projects'
import SignInScreen from '@/pages/SignInScreen'
import { Stack} from 'expo-router'




export default function tom() {
    const { id } = useLocalSearchParams();

    if(id===projects[0].id) {

        return (
        <>  
        <Stack.Screen
         options={{headerTitle: projects[0].id, headerStyle: { backgroundColor: '#1e293b' }, headerTitleStyle: { color: '#f1f5f9' }, headerTintColor: '#f1f5f9',}} />
        <SignInScreen />
        </>
        )
    }
    return (
        <>  
            <Stack.Screen 
         options={{headerTitle: "404 Page ⚔️", headerStyle: { backgroundColor: '#1e293b' }, headerTitleStyle: { color: '#f1f5f9' }, headerTintColor: '#f1f5f9',}} />

            
            <View>
            <Text>404! Page</Text>
            </View>
        </>
  )
}