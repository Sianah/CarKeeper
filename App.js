import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carImages = [
    require('./car1.jpg'),
    require('./car2.jpg'),
    require('./car3.jpg'),
    require('./car4.jpg'),
    require('./car5.jpg'),
    require('./car6.jpg'),
    require('./car7.jpg'),
    require('./car8.jpg'),
    require('./car9.jpg'),
    // ... add more images as needed
  ];

  const handleImageTap = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Car Keeper</Text>
      <TouchableOpacity onPress={handleImageTap}>
        <Image source={carImages[currentImageIndex]} style={styles.carImage} resizeMode="contain" />
        <Text>A simple app. For simple things.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carImage: {
    width: 300, 
    height: 300,

  },
});

