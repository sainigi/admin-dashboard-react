import{motion} from "framer-motion";
import{PieChart,Legend, Cell, Pie, Tooltip, ResponsiveContainer} from "recharts";


const categoryData = [
    {name: 'Electronics', value: 4500},
    {name: 'Clothing', value: 3200},
    {name: 'Home & Garden', value: 2800},
    {name: 'Books', value: 2100},
    {name: 'Sports & Outdoor', value: 1900},
];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border border-gray-700 rounded-xl p-6"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.3}}>

        <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                    <Pie
                        data={categoryData}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {categoryData.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{
                            backgroundColor:"rgba(31,41,55,0.8)",
                            borderColor:"#4B5563",
                        }}
                        itemStyle={{color:"#E5E7EB"}}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}

export default CategoryDistributionChart
