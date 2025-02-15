import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	GestureResponderEvent,
	ImageSourcePropType,
} from 'react-native';

type AnimalButtonProps = {
	name: string;
	asset: ImageSourcePropType; // The asset for the animal image
	onPress: (event: GestureResponderEvent) => void;
};

const AnimalButton: React.FC<AnimalButtonProps> = ({
	name,
	asset,
	onPress,
}) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Image source={asset} style={styles.image} />
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 8,
		backgroundColor: '#f0f0f0',
		marginVertical: 8,
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	text: {
		marginTop: 8,
		fontSize: 16,
		fontWeight: '600',
		textAlign: 'center',
	},
});

export default AnimalButton;
