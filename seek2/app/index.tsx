// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

const callFlaskAPI = async () => {
	try {
		const response = await fetch('http://localhost:5000/');
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function LandingPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to EcoTourism!</Text>
			<Text>This is the landing page.</Text>
			<Button title="Call Flask API" onPress={callFlaskAPI} />
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
