"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import ProductDetailsSinglePage from "@/components/ProductDetailsSinglePage.jsx";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allReviews, setAllReviews] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const addItem = useCartStore((state) => state.addItem);

  const { productId } = params;

 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500 bg-red-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <ProductDetailsSinglePage
      product={product}
      averageRating={averageRating}
      allReviews={allReviews}
      isInWishlist={isInWishlist}
      handleAddToCart={handleAddToCart}
      toggleWishlist={toggleWishlist}
    />
  );
}
