import {motion} from 'framer-motion'
import Header from '../components/common/Header'
import { User2Icon, UserCheck, UserCheck2, UserCog2, UserMinus, UserMinus2, UserPlus, UserRoundX, UserRoundXIcon, Users, UserX } from 'lucide-react'
import StatCard from '../components/common/StatCard'
import UserTable from '../components/users/UserTable'

function UsersPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title={"Users"} />

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            >
                <StatCard name='Total Users' icon={Users} value='152,845' color='#6366F1'/>
                <StatCard name='New Users Today' icon={UserPlus} value='152' color='#10b981'/>
                <StatCard name='Active Users' icon={UserCheck} value='98112' color='#f59e0b'/>
                <StatCard name='Churn Rate' icon={UserX} value='2.4%' color='#ec4899'/>
            </motion.div>

            <div className='mb-8'>
                <UserTable />
            </div>

        </main>
    </div>
  )
}

export default UsersPage
