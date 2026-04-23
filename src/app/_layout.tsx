import { Stack } from 'expo-router'

import "../styles/homeStyles.css"

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: 'Front-End Practice🔥🔥',
                    headerStyle: { backgroundColor: '#1e293b' },
                    headerTitleStyle: { color: '#f1f5f9' },
                }}
            />

            <Stack.Screen
                name='screens/[id]'
                
            />
        </Stack>
    )
}