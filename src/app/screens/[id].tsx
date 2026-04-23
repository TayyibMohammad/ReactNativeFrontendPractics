import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import  projects  from '@/constants/Projects'
import SignInScreen from '@/pages/SignInScreen'
import { Stack} from 'expo-router'
import Line from '@/components/Line'




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

            
            <View className='flex-1 bg-[#000000] items-center justify-center'>
                <View className="border-2 border-red-400 bg-slate-800 p-8 rounded-lg">
                    <Text className='color-red-600 font-bold text-2xl pb-4'>Error !! 404 Page Not Found</Text>
                    <Line/>
                    <Text className='color-slate-400 text-lg'>The page you are looking for does not exist.</Text>
                </View>
            </View>
        </>
  )
}