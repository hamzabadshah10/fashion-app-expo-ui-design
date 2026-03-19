import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const GlobalStyles = StyleSheet.create({
  /* =========================
     1. GENERAL & CONTAINERS
  ========================= */
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  authContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
    padding: 30,
    justifyContent: 'center',
  },

  /* =========================
     2. HOME HEADER
  ========================= */
  headerContainer: {
    backgroundColor: Colors.primaryBlue,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 4, 
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    letterSpacing: 1,
  },
  headerIconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconSpacing: {
    marginLeft: 20, 
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#2ECC71',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
  },

  /* =========================
     3. HOME BANNER (Blue - Exact Layout)
  ========================= */
  bannerContainer: {
    backgroundColor: Colors.primaryBlue,
    height: 190, // Taller to fit the image
    paddingHorizontal: 25, // Padding for the text
    marginBottom: 10,
    position: 'relative', // Needed for absolute positioning children
    overflow: 'hidden', // Clips the image if it goes out of bounds
    justifyContent: 'center', // Vertically center the text
  },
  bannerTextContainer: {
    width: '60%', // Limit text to 60% width so it doesn't hit the image
    zIndex: 2, // Keeps text ABOVE the image
  },
  bannerTextBig: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32, // Better spacing for stacked text
  },
  bannerTextSmall: {
    color: '#E0E0E0', 
    marginTop: 8,
    fontSize: 14,
    fontStyle: "italic"
  },
  shopLink: {
    color: '#2ECC71', // Bright Green
    marginTop: 30,
    fontSize: 15,
    marginBottom: 30,

  },
  // The Image positioned to the Right
  bannerImage: {
    width: 270,  
    height: 200, // Slightly taller than container to anchor at bottom
    resizeMode: 'contain', // Keeps the woman's proportions
    position: 'absolute', // Takes it out of flow
    right: -45,    // Pushes to the right edge
    bottom: -4,   // Pushes to the bottom edge
    zIndex: 1,     // Sits BEHIND the text/dots
  },
  // Dots at bottom left
  dotsContainer: {
    position: 'absolute',
    bottom: 15,
    left: 25, // Aligned with the text padding
    flexDirection: 'row',
    zIndex: 3, // Sits on TOP of everything
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginRight: 6,
  },
  activeDot: {
    backgroundColor: '#fff',
  },

  /* =========================
     4. CATEGORIES (FIXED SIZING & ACTIVE STATE)
  ========================= */
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  catItemContainer: {
    alignItems: 'center',
  },
  catCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'transparent', // Default border invisible
    overflow: 'hidden',
  },
  // When active, we change border color, NOT background to ensure image visibility
  selectedCatCircle: {
    borderColor: Colors.primaryBlue, 
    backgroundColor: '#E8F0FE', // Slight blue tint for active state
  },
  // Explicit size to ensure image never disappears
  catImage: {
    width: 40,  
    height: 40, 
    resizeMode: 'contain',
  },
  catText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: '#333',
  },

  /* =========================
     5. SUMMER OFFER (FULL BANNER)
  ========================= */
  offerCard: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#069149ff',
    overflow: 'hidden',
  },
  offerFullImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },

  /* =========================
     6. GRID
  ========================= */
  sectionTitle: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    color: Colors.primaryBlue,
    fontSize: 15,
    textTransform: 'uppercase',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    elevation: 2,
  },
  prodGridImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  cardSub: {
    fontSize: 12,
    color: 'grey',
    marginTop: 3,
  },

  /* =========================
     7. EXTRAS
  ========================= */
  logoWrapper: { alignItems: 'center', marginBottom: 40 },
  inputLabel: { color: '#fff', fontSize: 14, marginTop: 15, marginBottom: 5 },
  inputField: { borderBottomWidth: 1, borderBottomColor: '#fff', color: '#fff', fontSize: 16, paddingVertical: 5, marginBottom: 5 },
  dateDropdown: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#fff', paddingVertical: 5 },
  dateText: { color: '#fff' },
  whiteButton: { backgroundColor: '#fff', paddingVertical: 15, borderRadius: 5, alignItems: 'center', marginTop: 30 },
  whiteButtonText: { color: Colors.primaryBlue, fontWeight: 'bold', fontSize: 16 },
  googleButton: { backgroundColor: '#fff', paddingVertical: 15, borderRadius: 5, alignItems: 'center', marginTop: 0, flexDirection: 'row', justifyContent: 'center' },
  googleIconText: { color: Colors.red, fontWeight: 'bold', fontSize: 20, marginRight: 10 },
  forgotText: { color: '#fff', textAlign: 'right', fontSize: 12, marginTop: 5 },
  orText: { color: '#fff', textAlign: 'center', marginVertical: 15 },
  bottomLink: { color: '#fff', textAlign: 'center', marginTop: 20, textDecorationLine: 'underline' },
  
  /* =========================
     8. PRODUCT DETAIL PAGE
  ========================= */
  backButton: { position: 'absolute', top: 10, left: 15, zIndex: 10 },
  
  productImageWrapper: { 
      alignItems: 'center', 
      marginTop: 20, 
      marginBottom: 20,
      height: 300, // Fixed height area for image
      justifyContent: 'center',
  },
  // NEW: Style for the big image on detail page
  detailImage: {
      width: 250,
      height: 300,
      resizeMode: 'contain',
  },

  productInfoContainer: { padding: 20 },
  productMainTitle: { fontSize: 22, color: '#333', fontWeight: 'bold', marginBottom: 10 },
  
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  priceGroup: { flexDirection: 'row', alignItems: 'center' },
  currentPrice: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  oldPrice: { textDecorationLine: 'line-through', color: Colors.red, marginHorizontal: 10, fontSize: 18 },
  discountText: { color: Colors.red, fontSize: 14, fontWeight: 'bold' },
  
  likeWrapper: { alignItems: 'center' },
  likeCountText: { fontSize: 10, color: 'grey' },
  
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 15 },
  
  optionLabel: { fontSize: 16, color: '#333', marginBottom: 10, fontWeight: '600' },
  optionRow: { flexDirection: 'row', marginBottom: 10 },
  
  sizeBox: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  sizeBoxSelected: { backgroundColor: Colors.primaryBlue },
  sizeText: { color: '#000' },
  sizeTextSelected: { color: '#fff' },
  
  colorDot: { width: 30, height: 30, borderRadius: 15, marginRight: 15 },
  colorDotSelected: { borderWidth: 2, borderColor: '#333' },
  
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: { width: 35, height: 35, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', borderRadius: 5 },
  qtyValue: { marginHorizontal: 15, fontSize: 18, fontWeight: 'bold' },
  
  addToCartBtn: { backgroundColor: '#2ECC71', height: 60, justifyContent: 'center', alignItems: 'center' },
  addToCartText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default GlobalStyles;