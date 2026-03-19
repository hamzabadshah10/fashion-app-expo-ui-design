import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import GlobalStyles from '../styles/GlobalStyles';

export default function HomeComponent({ navigation }: { navigation: any }) {
  const [selectedCategory, setSelectedCategory] = useState('MEN');

  // 1. CATEGORY DATA
  const categories = [
    { id: 1, name: 'MEN', image: require('../image/men.png') }, 
    { id: 2, name: 'WOMEN', image: require('../image/women.png') }, 
    { id: 3, name: 'KIDS', image: require('../image/kids.png') }, 
    { id: 4, name: 'OFFER ZONE', image: require('../image/offer.png') }, 
  ];

  // 2. PRODUCT DATA
  const productsData: any = {
    MEN: [
      { id: 1, name: "Men's T Shirts", count: '420 Items', price: 50, oldPrice: 70, discount: 33, image: require('../image/tshirt.png') },
      { id: 2, name: "Running Shoes", count: '85 Items', price: 120, oldPrice: 150, discount: 20, image: require('../image/shoes.png') },
      { id: 3, name: "Nike Tracksuits", count: '45 Items', price: 90, oldPrice: 110, discount: 18, image: require('../image/tracksuit.png') },
      { id: 4, name: "Men's Watch", count: '10 Items', price: 250, oldPrice: 350, discount: 28, image: require('../image/watch.png') },
    ],
    WOMEN: [
      { id: 5, name: "Women Jeans", count: '123 Items', price: 60, oldPrice: 80, discount: 25, image: require('../image/jeans.png') },
      { id: 6, name: "Handbags", count: '50 Items', price: 150, oldPrice: 200, discount: 25, image: require('../image/bag.png') },
      { id: 7, name: "Heels", count: '30 Items', price: 85, oldPrice: 100, discount: 15, image: require('../image/heels.png') },
      { id: 8, name: "Dresses", count: '90 Items', price: 110, oldPrice: 140, discount: 21, image: require('../image/dress.png') },
    ],
    KIDS: [
      { id: 9, name: "Kids Toys", count: '200 Items', price: 25, oldPrice: 35, discount: 28, image: require('../image/toy.png') },
      { id: 10, name: "School Bags", count: '40 Items', price: 40, oldPrice: 55, discount: 27, image: require('../image/schoolbag.png') },
      { id: 11, name: "Small Shoes", count: '30 Items', price: 30, oldPrice: 45, discount: 33, image: require('../image/kidshoe.png') },
      { id: 12, name: "Hats", count: '15 Items', price: 10, oldPrice: 15, discount: 33, image: require('../image/hat.png') },
    ],
    'OFFER ZONE': [
      { id: 13, name: "Summer Deal", count: '50% Off', price: 100, oldPrice: 200, discount: 50, image: require('../image/summer.png') },
      { id: 14, name: "Winter Sale", count: '30% Off', price: 70, oldPrice: 100, discount: 30, image: require('../image/winter.png') },
      { id: 15, name: "Flash Sale", count: '70% Off', price: 30, oldPrice: 100, discount: 70, image: require('../image/sale.png') },
      { id: 16, name: "Bundle", count: '2 for 1', price: 50, oldPrice: 100, discount: 50, image: require('../image/bundle.png') },
    ]
  };

  const handleCategoryPress = (catName: string) => {
    setSelectedCategory(catName);
  };

  return (
    <SafeAreaView style={GlobalStyles.homeContainer}>
      
      {/* --- HEADER --- */}
      <View style={GlobalStyles.headerContainer}>
        {/* LEFT: Menu + HOME Title */}
        <View style={GlobalStyles.headerLeft}>
            <TouchableOpacity>
               <Ionicons name="menu" size={30} color={Colors.white} />
            </TouchableOpacity>
            <Text style={GlobalStyles.headerTitle}>HOME</Text>
        </View>
        
        {/* RIGHT: Icons */}
        <View style={GlobalStyles.headerIconGroup}>
           <TouchableOpacity>
             <View>
               <Ionicons name="notifications" size={26} color={Colors.white} />
               <View style={GlobalStyles.badgeContainer}>
                 <Text style={GlobalStyles.badgeText}>2</Text>
               </View>
             </View>
           </TouchableOpacity>
           
           <TouchableOpacity style={GlobalStyles.headerIconSpacing}>
             <Ionicons name="basket" size={26} color={Colors.white} />
           </TouchableOpacity>

           <TouchableOpacity style={GlobalStyles.headerIconSpacing}>
             <Ionicons name="ellipsis-vertical" size={26} color={Colors.white} />
           </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* --- BLUE BANNER (With Girl Image) --- */}
        <View style={GlobalStyles.bannerContainer}>
           <View style={GlobalStyles.bannerTextContainer}>
             <Text style={GlobalStyles.bannerTextBig}>NEW</Text>
             <Text style={GlobalStyles.bannerTextBig}>ARRIVALS</Text>
             <Text style={GlobalStyles.bannerTextSmall}>200+ New Items</Text>
             <TouchableOpacity>
                <Text style={GlobalStyles.shopLink}>Shop it -{'>'}</Text>
             </TouchableOpacity>
           </View>
           
           {/* Background Image: Woman (Corrected) */}
           <Image 
             source={require('../image/top.png')} 
             style={GlobalStyles.bannerImage} 
           />

           {/* Dots */}
           <View style={GlobalStyles.dotsContainer}>
             <View style={[GlobalStyles.dot, GlobalStyles.activeDot]} />
             <View style={GlobalStyles.dot} />
             <View style={GlobalStyles.dot} />
           </View>
        </View>

        {/* --- CATEGORIES --- */}
        <View style={GlobalStyles.categoryRow}>
           {categories.map((cat) => (
             <CategoryItem 
                key={cat.id}
                name={cat.name} 
                imageSource={cat.image} 
                isActive={selectedCategory === cat.name} 
                onPress={() => handleCategoryPress(cat.name)} 
             />
           ))}
        </View>

        {/* --- SUMMER OFFER (FULL BANNER) --- */}
        <View style={GlobalStyles.offerCard}>
            <Image 
                source={require('../image/banner.png')} 
                style={GlobalStyles.offerFullImage} 
            />
        </View>

        {/* --- TOP SELLING GRID --- */}
        <Text style={GlobalStyles.sectionTitle}>TOP SELLING ({selectedCategory})</Text>
        <View style={GlobalStyles.gridContainer}>
            
            {productsData[selectedCategory].map((item: any) => (
                <TouchableOpacity 
                    key={item.id}
                    style={GlobalStyles.productCard} 
                    // PASSING DATA HERE
                    onPress={() => navigation.navigate('ProductDetail', { product: item })}
                >
                    <Image 
                        source={item.image} 
                        style={GlobalStyles.prodGridImage} 
                    />
                    <Text style={GlobalStyles.cardTitle}>{item.name}</Text>
                    <Text style={GlobalStyles.cardSub}>{item.count}</Text>
                </TouchableOpacity>
            ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable Category Item
const CategoryItem = ({ name, imageSource, isActive, onPress }: any) => (
    <TouchableOpacity style={GlobalStyles.catItemContainer} onPress={onPress}>
        <View style={[GlobalStyles.catCircle, isActive && GlobalStyles.selectedCatCircle]}>
            {/* CATEGORY IMAGE RESIZED */}
            <Image 
                source={imageSource} 
                style={{ width: 65, height: 90, resizeMode: 'contain', borderRadius: 30}} 
            />
        </View>
        <Text style={GlobalStyles.catText}>{name}</Text>
    </TouchableOpacity>
);