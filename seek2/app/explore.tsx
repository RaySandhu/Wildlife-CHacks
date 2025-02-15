// app/explore.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExplorePage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Eco-Tourism Explore</Text>
			<Text>Discover eco-tourism destinations and experiences.</Text>
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
