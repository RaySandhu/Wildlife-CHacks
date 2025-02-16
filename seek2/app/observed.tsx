// app/observed.tsx
import React from 'react';
import { View, Text, Alert, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AnimalButton from '../components/AnimalButton';
import { useState } from 'react';
import { useEffect } from 'react';

import Card from '@/components/Card';

const animalInfo = [ {
    title: "Seal",
    thumbNail:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Pinniped_collage.jpg",
   
    buyLink: "https://simple.wikipedia.org/wiki/Pinniped",
	timesSaw: 4,
	desc: "Seals suck and kill penguins but not all of them"
  },{
    title: "Whale",
    thumbNail:
      "https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg",
  
    buyLink: "https://en.wikipedia.org/wiki/Whale",
	timesSaw: 4,
	desc: "Whales brake everyone's jaw but die to sharks"
  },


]


export default function ObservedPage() {
	const handlePress = () => {
		Alert.alert('Animal Selected', 'You tapped on the animal button!');
	};

	const[state1,setState1] = useState(0);

		  if (state1==0) {
	return ( 
		
		<View style={styles.container}>
			
			<Text style={styles.title}>Observed Animals</Text>
				{animalInfo.map((p)=>(
					      <div>
          
						  <Card
							image={p.thumbNail}
							title={p.title}
							description={p.desc}
							link={p.buyLink}
							
						  />
						</div>
					
				))}

			{/* <Button title="Click me" onPress={()=>{setState1(1)}}/> */}
			{/* <AnimalButton name='Duck' asset={duck} onPress={handlePress} />
			<AnimalButton name='Cat' asset={cat} onPress={handlePress} />
			<AnimalButton name='Dawg' asset={dog} onPress={handlePress} /> */}
			</View>
			
		
	);
	// If there was time, this would be explored for future developement
} if (state1==1) {
	return <div>
	<Text>Hello</Text>
	<Button title="Click me" onPress={()=>{setState1(0)}}/>
	</div>
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		alignItems: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
