import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import GlobalStyles from '../styles/GlobalStyles';

// Receiving 'route' to get parameters
export default function ProductDetailComponent({ route, navigation }: { route: any, navigation: any }) {
  
  // *** UPDATED: Get the specific product passed from Home ***
  const { product } = route.params || { 
      product: { 
          name: 'Product Name', 
          price: 0, 
          oldPrice: 0, 
          discount: 0, 
          image: null 
      } 
  };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(450);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('Red');

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => { if (quantity > 1) setQuantity(quantity - 1); };

  // *** UPDATED: Show popup with specific details ***
  const handleAddToCart = () => {
      Alert.alert(
          "Added to Cart",
          `Product: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal Price: $${product.price * quantity}`,
          [
              { text: "OK", onPress: () => console.log('Added') },
              { text: "Go Home", onPress: () => navigation.navigate('Home') }
          ]
      );
  };

  return (
    <SafeAreaView style={GlobalStyles.fullScreen}>
      <ScrollView>
        {/* Navigation Back */}
        <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.goBack()}>
           <Ionicons name="chevron-back" size={30} color="#555" />
        </TouchableOpacity>

        {/* Product Image - Now Dynamic */}
        <View style={GlobalStyles.productImageWrapper}>
            {/* Show the passed image */}
            <Image source={product.image} style={GlobalStyles.detailImage} />
        </View>

        <View style={GlobalStyles.productInfoContainer}>
            {/* Dynamic Name */}
            <Text style={GlobalStyles.productMainTitle}>{product.name}</Text>
            
            <View style={GlobalStyles.priceRow}>
                <View style={GlobalStyles.priceGroup}>
                    {/* Dynamic Prices */}
                    <Text style={GlobalStyles.currentPrice}>${product.price}</Text>
                    <Text style={GlobalStyles.oldPrice}>${product.oldPrice}</Text>
                    <Text style={GlobalStyles.discountText}>({product.discount}% off)</Text>
                </View>
                
                <TouchableOpacity style={GlobalStyles.likeWrapper} onPress={toggleLike}>
                    <Ionicons name={liked ? "heart" : "heart-outline"} size={28} color={Colors.red} />
                    <Text style={GlobalStyles.likeCountText}>{likeCount} Likes</Text>
                </TouchableOpacity>
            </View>

            <View style={GlobalStyles.divider} />

            {/* Sizes */}
            <Text style={GlobalStyles.optionLabel}>Size</Text>
            <View style={GlobalStyles.optionRow}>
                {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                    <TouchableOpacity 
                        key={size} 
                        style={[GlobalStyles.sizeBox, selectedSize === size && GlobalStyles.sizeBoxSelected]}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text style={selectedSize === size ? GlobalStyles.sizeTextSelected : GlobalStyles.sizeText}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={GlobalStyles.divider} />

            {/* Colors */}
            <Text style={GlobalStyles.optionLabel}>Color</Text>
            <View style={GlobalStyles.optionRow}>
                <TouchableOpacity 
                    style={[GlobalStyles.colorDot, { backgroundColor: '#C0392B' }, selectedColor === 'Red' && GlobalStyles.colorDotSelected]} 
                    onPress={() => setSelectedColor('Red')} 
                />
                <TouchableOpacity 
                    style={[GlobalStyles.colorDot, { backgroundColor: '#2ECC71' }, selectedColor === 'Green' && GlobalStyles.colorDotSelected]} 
                    onPress={() => setSelectedColor('Green')} 
                />
                <TouchableOpacity 
                    style={[GlobalStyles.colorDot, { backgroundColor: '#0057D8' }, selectedColor === 'Blue' && GlobalStyles.colorDotSelected]} 
                    onPress={() => setSelectedColor('Blue')} 
                />
            </View>

            <View style={GlobalStyles.divider} />

            {/* Quantity */}
            <View style={GlobalStyles.priceRow}>
                <Text style={GlobalStyles.optionLabel}>Quantity</Text>
                <View style={GlobalStyles.qtyContainer}>
                    <TouchableOpacity style={GlobalStyles.qtyButton} onPress={decreaseQty}><Text>-</Text></TouchableOpacity>
                    <Text style={GlobalStyles.qtyValue}>{quantity}</Text>
                    <TouchableOpacity style={GlobalStyles.qtyButton} onPress={increaseQty}><Text>+</Text></TouchableOpacity>
                </View>
            </View>
        </View>
      </ScrollView>

      {/* Add to Cart */}
      <TouchableOpacity style={GlobalStyles.addToCartBtn} onPress={handleAddToCart}>
          <Text style={GlobalStyles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}