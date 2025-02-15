// app/observed.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ObservedPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Observed Animals</Text>
			<Text>Here you can view all the animals you’ve observed.</Text>
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
