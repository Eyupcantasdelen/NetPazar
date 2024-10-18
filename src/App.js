import { Footer, Navbar } from "./components";
import {Outlet,Navigate,Route,Routes,useLocation} from "react-router-dom"
import {About,Auth,Companies,CompanyProfile,FindProducts,ProductDetail,UploadProduct,UserProfile} from "./pages"
function Layout (){
     const user=true;
     const location=useLocation();
    return user ? (<Outlet/>):(<Navigate to="user-auth" state={{from:location}} replace/>)
}

function App() {
  const user={};
  return (
    <main>
      <Navbar/>
      <Routes>
          <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/find-products" replace={true}/>}/>
              <Route path="/find-products" element={<FindProducts/>}/>
              <Route path="/companies" element={<Companies/>}/>
              <Route path={user?.user?.accountType==="seeker" ?"/user-profile":"/user-profile:id"} element={<UserProfile/>}/>
              
              
              <Route path={"/company-profile"} element={<CompanyProfile/>}/>
              <Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>  
              <Route path={"/upload-product"} element={<UploadProduct/>}/>
              <Route path={"/product-detail/:id"} element={<ProductDetail/>}/>
          </Route>
          <Route path="about-us" element={<About/>}/>
          <Route path="user-auth" element={<Auth/>}/>

      </Routes>
      {user && <Footer/>}
    </main> 
  
  );
}

export default App;
