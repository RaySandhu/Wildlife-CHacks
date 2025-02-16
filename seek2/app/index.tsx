// app/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Image,TouchableOpacity, Pressable } from 'react-native';

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
	const [state1, setState1]  = useState(0);

	useEffect(() => {
		//Runs on the first render
		//And any time any dependency value changes

		


	  }, [ state1]);

	return (
		<View style={styles.container}>
			{state1== 0 && 
			<div>
			<Text style={styles.title}>Welcome to EcoTourism!</Text>
			
			<Pressable onPress={()=>{setState1(1)}}>
				  <Image 
					  source={{ uri: 'https://media.istockphoto.com/id/1306235331/vector/simplified-world-map-vector-illustration.jpg?s=612x612&w=0&k=20&c=upPEHqLBNiakoRE4qBO0hfFiuINfNKg-3SZyhSraKP0=' }} // URL of the image
					  style={{ width: 700,height:500 }}
					/>
			</Pressable>

			<Pressable onPress={()=> {console.log("Hello world")}}></Pressable>

			</div>}
			{state1==1 &&  <Pressable onPress={()=>{setState1(0)}}><Image 
					  source={{ uri: 'https://dummyimage.com/16:9x1080/' }} // URL of the image
					  style={{ width: 500,height:500 }}
					/></Pressable> }
			{state1 == 2 && <div>
				
				</div>}
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
		margin:"auto"
	},  button: {
		alignItems: "center",
		justifyContent: "center",
	  },
});
