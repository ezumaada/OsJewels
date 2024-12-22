import React from 'react';
import ItemCard from '../../components/itemcard/ItemCard'; // Import your ItemCard component
import { Link } from 'react-router-dom';
import products from '../../data/productData'; 


const Nomos = () => {
    // Filter products based on the category prop
  const categoryProducts = products.filter((product) => product.category === "nomos");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize"> Olelynggard = Luxury</h1>
      <p className='my-6 text-xl pr-[20vw]'>Experience the elegance of the Ole Lynggaard Collection at Os Jewelers. <br /> This collection showcases the finest Scandinavian craftsmanship, featuring pieces that are both timeless and modern. From intricate bracelets to stunning necklaces, each piece is crafted with the utmost precision and care. Ole Lynggaard jewelry is not only beautiful but also versatile, making it the perfect addition to any jewelry collection.</p>
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

export default Nomos