// app/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='observed'
				options={{
					title: 'Observed',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='list' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Landing',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='compass' color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
}
