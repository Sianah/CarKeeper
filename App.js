import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of free-to-use car images (replace with actual image paths)
  const carImages = [
    require('./path_to_car1.jpg'),
    require('./path_to_car2.jpg'),
    require('./path_to_car3.jpg'),
    // ... add more images as needed
  ];

  const handleImageTap = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleImageTap}>
      <Image source={carImages[currentImageIndex]} style={styles.carImage} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
});

