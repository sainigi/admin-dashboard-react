import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { Box,  DollarSign, TrendingUp, TriangleAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import SalesTrendChart from '../components/products/SalesTrendChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import ProductTable from '../components/products/ProductTable';

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
        >
          <StatCard name='Total Products' icon={Box} value='12,34' color='#6366F1'/>
          <StatCard name='Top Selling' icon={TrendingUp} value='89' color='#10b981'/>
          <StatCard name='Low Stock' icon={TriangleAlert} value='23' color='#f59e0b'/>
          <StatCard name='Total Revenue' icon={DollarSign} value='$543210' color='#ec4899'/>
        </motion.div>

        {/* PRODUCT TABLE */}

        <div className='mb-8 grid grid-cols-1'>
          <ProductTable />
        </div>

        {/* CHARTS */}
        <div className='grid col-span-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      

      </main>
      
    </div>
  )
}

export default ProductsPage;
