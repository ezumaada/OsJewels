import React from 'react'
import products from '../../data/productData'; 

const Diamonds = () => {
      // Filter products based on the category prop
      const categoryProducts = products.filter((product) => product.category === "diamonds");
      return (
        <div className="container mx-auto px-4 py-8">
           <h1 className="text-3xl font-bold mb-6">Watch Collection</h1>
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Experience the elegance of our Watch Collection at Oster Jewelers. 
            This collection showcases the finest craftsmanship, featuring pieces 
            that are both timeless and modern. From classic chronographs to 
            sophisticated dress watches, each piece is crafted with the utmost 
            precision and care. Our watches are not only beautiful but also 
            versatile, making them the perfect addition to any collection.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/products">
            <button className="bg-black text-white px-6 py-2 rounded">
              View All Products
            </button></Link>
    
          </div>
        </div>
      )
}

export default Diamonds