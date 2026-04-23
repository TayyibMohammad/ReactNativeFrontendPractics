import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import projects from '@/constants/Projects'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import AnimatedCard from '@/components/AnimatedCard'

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-slate-600'>
        <ScrollView className="flex-1" contentContainerClassName="p-4">
          {
            projects.map((project) => (
              <AnimatedCard
                id={project.id}
                description={project.desc}
                delay={project.delay}
              />
            ))

          }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}