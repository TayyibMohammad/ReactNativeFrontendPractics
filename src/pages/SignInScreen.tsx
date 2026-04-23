import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


export default function SignInScreen() {
  return (
    
    <View className='flex-1 bg-[#15616d] items-center justify-center'>
        <View className="border-2 border-cyan-400 bg-slate-800 p-8 rounded-lg">
            <Text className="text-white text-xl font-bold text-center pb-4">Sign In</Text>
            <View className='mb-4'>
                <Text className="text-white">Email Or Username</Text>
                <TextInput
                    placeholder="Enter your email or username"
                    placeholderTextColor="#94a3b8"
                    className="text-white border-b border-cyan-400 focus:border-cyan-500"
        
                />

            </View>
            <View className='pb-7'>
                <Text className="text-white">Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#94a3b8"
                    className="text-white border-b border-cyan-400 focus:border-cyan-500"
                    secureTextEntry
                />

            </View>
            <View>
                <TouchableOpacity className="bg-cyan-500 py-2 px-4 rounded-lg">
                    <Text className="text-white text-center">Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}