const mongooses = require("mongoose");
const productSchema = new mongooses.Schema(
  {
    // --- 1. Basic Info ---
    imageInfo: {
      imgName: { type: String, require: true },
      imgUrl: { type: String, require: true },
      thumbnailUrl: String,
    },

    productDetails: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
        // TIP: For AI, store details like "Soft cotton fabric, perfect for summer days."
      },
      category: {
        type: String,
        required: true, // e.g., "Men", "Women", "Kids", "Accessories"
      },
      subCategory: {
        type: String, // e.g., "T-Shirt", "Jeans", "Sneakers"
      },

      // --- 2. Pricing & Stock ---
      price: {
        type: String,
        required: true,
      },
      salePrice: {
        type: String, // AI will prioritize this if user asks for "Cheap/Discounted" items
      },
      totalStock: {
        type: String,
        required: true,
      },

      // --- 3. AI Context Fields (Crucial for Chatbot) ---
      // These help the AI filter recommendations smartly.

      brand: { type: String }, // e.g., "Nike", "Adidas", "GoShop"

      colors: [String], // e.g., ["Red", "Black"] -> AI handles "Show me red shirts"

      sizes: [String], // e.g., ["S", "M", "L", "XL", "UK 9"]

      tags: [String],
      // ⭐ MOST IMPORTANT FOR AI:
      // Store keywords like: ["Summer", "Party", "Wedding", "Formal", "Cotton", "Breathable"]
      // When user asks "Outfit for a wedding", AI looks for "Wedding" tag here.
      averageReview: { type: Number, default: 0 }, // AI can say "This is highly rated!"
    },
  },
  { timestamps: true }
);

module.exports = mongooses.model("products", productSchema);
