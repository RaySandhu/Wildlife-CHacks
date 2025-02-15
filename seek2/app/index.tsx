// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LandingPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to EcoTourism!</Text>
			<Text>This is the landing page.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
