// app/observed.tsx
import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import AnimalButton from '../components/AnimalButton';


export default function ObservedPage() {
	const handlePress = () => {
		Alert.alert('Animal Selected', 'You tapped on the animal button!');
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Observed Animals</Text>
			<Text>Here you can view all the animals you’ve observed.</Text>

			{/* <AnimalButton name='Duck' asset={duck} onPress={handlePress} />
			<AnimalButton name='Cat' asset={cat} onPress={handlePress} />
			<AnimalButton name='Dawg' asset={dog} onPress={handlePress} /> */}
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
