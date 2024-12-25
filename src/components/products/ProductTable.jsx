import { motion } from "framer-motion";
import {Edit, Search, Trash2} from 'lucide-react';
import { useState } from "react";

const PRODUCT_DATA=[
    {id:1, name:'Wireless Earbuds', category:'Electronics',price:59.99, stock:143, sales:1200 },
    {id:2, name:'Leather Wallet', category:'Accessories',price:39.99, stock:89, sales:800 },
    {id:3, name:'Smart Watch', category:'Electronics',price:199.99, stock:56, sales:650 },
    {id:4, name:'Yoga Mart', category:'Fitness',price:29.99, stock:210, sales:950 },
    {id:5, name:'Coffee Maker', category:'Home',price:79.99, stock:78, sales:720 },
]

const ProductTable = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(PRODUCT_DATA);

    const filteredProducts = (e) =>{
        const searchVal = e.target.value;
        setSearch(searchVal);
        const filteredData = PRODUCT_DATA.filter((product)=> product.name.toLowerCase().includes(searchVal.toLowerCase()) || product.category.toLowerCase().includes(searchVal.toLowerCase()))
        setProducts(filteredData);
    }



  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border border-gray-700 rounded-xl p-6 mb-8"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.3}}
    >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
            <div className="relative">
                <input type="text" placeholder="Search products..." className="bg-gray-700 text-white placholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onChange={filteredProducts} value={search}
                />
                <Search size={18} className="absolute top-3 left-3 text-gray-400"/>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-700">
                    {products.map((product)=>(
                        <motion.tr
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.3}} key={product.id}>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-300 ">{product.name}</td>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-300 ">{product.category}</td>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-300 ">{product.price}</td>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-300 ">{product.stock}</td>
                            <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-300 ">{product.sales}</td>
                            <td className="px-6 py-3 text-left text-xs text-gray-300">
                                <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                                    <Edit size={18} />
                                </button>
                                <button className="text-red-400 hover:text-red-300 mr-2">
                                    <Trash2 size={18} />
                                </button>
                            </td>
                    </motion.tr>
                    ))}
                    
                </tbody>

            </table>

        </div>

    </motion.div>
  )
}

export default ProductTable
