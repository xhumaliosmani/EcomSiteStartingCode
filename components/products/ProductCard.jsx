import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductCard({ product, onWishlistUpdate }) {
  const [isHovered, setIsHovered] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [wishlistItems, setWishlistItems] = useState([]);

  

  return (
    <div
      className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product._id}`}>
        <div className="relative sm:h-[22rem] h-[26rem] w-full">
          <Image
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            fill // Replaces layout="fill"
            style={{ objectFit: "cover" }} // Replaces objectFit="cover"
            priority={true} // Adds priority to the image
          />
          {isHovered && (
            <div className="absolute inset-0 top-[75%] flex justify-between items-center px-4">
              <button
                onClick={toggleWishlist}
                className="p-2 bg-white rounded-full hover:bg-red-100 transition-colors duration-200"
              >
                <Heart
                  className={`h-6 w-6 ${
                    isInWishlist ? "text-red-500 fill-current" : "text-red-500"
                  }`}
                />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                <Plus className="h-6 w-6 text-blue-500" />
              </button>
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-sm font-medium text-gray-800 truncate">
            {product.name}
          </h2>
          <p className="text-xs text-slate-400 mt-1">{product.brand}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm font-semibold text-gray-900">
              CHF {product.price.toFixed(2)}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-gray-500 line-through">
                CHF {product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
