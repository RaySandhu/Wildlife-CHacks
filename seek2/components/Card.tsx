import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 20, // added bottom margin for better separation
    maxWidth:500,
    minWidth:500
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 15, // increased space between image and text
  },
  content: {
    flex: 1,
    justifyContent: 'space-between', // ensures title, description, and button are well-spaced
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // darker color for better readability
  },
  description: {
    fontSize: 14,
    color: '#666', // lighter color for description
    marginVertical: 8, // added vertical margin for better spacing
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#227c9d',
    borderRadius: 6,
    alignItems: 'center', // ensures button text is centered
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Card;
