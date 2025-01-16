import Sidebar from "./components/Sidebar"
import Overview from "./pages/OverviewPage";
import ProductPage from "./pages/ProductsPage";
import ProductsPage from "./pages/ProductsPage";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";

function App({name="this is test"}) {
  console.log(name);
  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* BG for all pages */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className=" absolute inset-0 backdrop-blur-sm" />
        </div>

        <Sidebar />

        <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/users' element={<UsersPage />} />
        </Routes>
      </div>
    </>
  )
  
}

export default App;
