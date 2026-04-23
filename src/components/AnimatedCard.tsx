import {View, Text, Pressable} from 'react-native'
import React from 'react'
import Animated, {FadeInDown, InterpolateConfig} from 'react-native-reanimated'
import { Link } from 'expo-router'

interface AnimatedCardProps {
  id: string;
  description: string;
  delay: number;
}

const AnimatedCard = ({id, description, delay}: AnimatedCardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(800).springify()}
    >

      <Link href={`screens/${id}`} asChild>
        <Pressable>
          <View className='bg-slate-200 rounded-lg p-4 m-2'>
            <Text className='card-title font-bold'>{id}</Text>
            <Text className='card-description'>{description}</Text>
          </View> 
        </Pressable>
      </Link>
    </Animated.View>
  )
}

export default AnimatedCard