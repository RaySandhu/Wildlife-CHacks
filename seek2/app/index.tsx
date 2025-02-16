// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  S3Client,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import * as FileSystem from 'expo-file-system';

const uploadFile = async () => {
  const s3Client = new S3Client({
    region: 'us-east-2',
    credentials: {
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    },
  });
  const bucketName = 'alanayy-chacks-2025';
  const fileName = 'test.png';
  const fileUri = FileSystem.documentDirectory + fileName;

  try {
    const fileContent = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: Buffer.from(fileContent, 'base64'),
      ContentEncoding: 'base64',
      ContentType: 'image/png',
    };

    await s3Client.send(new PutObjectCommand(params));

    console.log('File uploaded successfully');
  } catch (error) {
    console.error(error);
  }
};

export default function LandingPage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to EcoTourism!</Text>
			<Text>This is the landing page.</Text>
      <Button title="Click me!" onPress={uploadFile} />
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
