import {motion} from 'framer-motion'
import { Search } from 'lucide-react'
import { useState } from 'react';


const USER_DATA = [
    {id:1, name:'John Doe', email:'john@example.com', role:'Customer', status:'Active'},
    {id:2, name:'John Smith', email:'jane@example.com', role:'Admin', status:'Active'},
    {id:3, name:'Bob Johnson', email:'bob@example.com', role:'Customer', status:'Inactive'},
    {id:4, name:'Alice Brown', email:'alice@example.com', role:'Customer', status:'Active'},
    {id:5, name:'Charlie Wilson', email:'charlie@example.com', role:'Moderator', status:'Active'},
];

const UserTable = () => {

    const [userSearch, setUserSearch] = useState('');
    const [users,setUsers] = useState(USER_DATA);

    const filteredUsers = (e) =>{
        const searchVal = e.target.value;
        setUserSearch(searchVal);
        const filteredUsers = USER_DATA.filter((user)=> user.email.toLowerCase().includes(searchVal.toLowerCase()) || user.name.toLowerCase().includes(searchVal.toLowerCase()));
        setUsers(filteredUsers);
    }

  return (
    <motion.div className="bg-gray-800 backdrop-blur-md rounded-lg p-6 border border-gray-700">
        <div className='flex justify-between items-center mb-4'>    
            <h2 className='text-xl font-medium text-gray-100'>Users</h2>
            <div className='relative'>
                <input type="text" placeholder="Search user..." className="bg-gray-700 text-white placeholder-gray-100 pr-4 pl-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={filteredUsers} value={userSearch}/>
                <Search size={18} className='absolute top-3 left-3' />
            </div>
        </div>
        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left uppercase font-medium text-xs tracking-wider text-gray-400'>Name</th>
                        <th className='px-6 py-3 text-left uppercase font-medium text-xs tracking-wider text-gray-400'>Email</th>
                        <th className='px-6 py-3 text-left uppercase font-medium text-xs tracking-wider text-gray-400'>Role</th>
                        <th className='px-6 py-3 text-left uppercase font-medium text-xs tracking-wider text-gray-400'>Status</th>
                        <th className='px-6 py-3 text-left uppercase font-medium text-xs tracking-wider text-gray-400'>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {users.map((user)=>(
                        <motion.tr initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} key={user.id}>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='flex items-center'>
                                    <div className='flex-shrink-0 size-10'>
                                        <div className='size-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold'> 
                                            {user.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <div className='text-sm font-medium text-gray-100'>
                                            {user.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='px-6 py-4 text-left text-gray-400'>{user.email}</td>
                            <td className='px-6 py-4 text-left text-white'><span className='bg-indigo-600 rounded-lg px-2 py-1/2'>{user.role}</span></td>
                            <td className='px-6 py-4 text-left text-white'><span className={`${user.status == 'Active'? 'bg-green-500': 'bg-red-500'} rounded-lg px-2 py-1/2`}>{user.status}</span></td>
                            <td className='px-6 py-4 text-left text-gray-100'>
                                <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                    Edit
                                </button>
                                <button className='text-red-400 hover:text-red-300'>
                                    Delete
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

export default UserTable
