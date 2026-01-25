import { Route, Routes } from 'react-router';



import MyOrdersPage from '../pages/order/MyOrdersPage';

import Error500 from '../common/Error';
import Error403 from '../common/Forbiden';
import NotFound from '../common/NotFound';


import HooksUseState from '../hooks/HooksUseState';


import PrivateRoute, { ProtectedRouteProps } from "./PrivateRoute";
import LoginPage from '../pages/auth/login/LoginPage';
import RecoverPassPage from '../pages/auth/recover-pass/RecoverPassPage';
import CreateUserPage from '../pages/auth/create/CreateUserPage';
import TwoFactorAuthScreen from '../pages/auth/verify-code/TwoFactorAuthScreen';
import HomeTech from '../pages/home/HomeTech';
import CatalogPage from '../pages/catalog/CatalogPage';
import ProductPage from '../pages/product/ProductPage';
import ProductDetails from '../components/views/products/productDetails';
import HomePage from '../pages/home/HomePage';



function Routs(props: any) {
  const { toggleTheme } = props;

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: false,
    authenticationPath: '/auth/login',
    redirectPath: "/error500",
    setRedirectPath: LoginPage
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage toggleTheme={toggleTheme} />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/recover-pass' element={<RecoverPassPage />} />
        <Route path='/auth/create' element={<CreateUserPage />} />
        <Route path='/auth/verify' element={<TwoFactorAuthScreen />} />


        <Route path='/homeTech' element={<HomeTech />} />
        <Route path='/orders' element={<MyOrdersPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/product/:code' element={<ProductPage />} />
        <Route path='/product/details/:code/:id' element={<ProductDetails />} />
        <Route path='/hooksUseState' element={<HooksUseState />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/error500' element={<Error500 />} />
        <Route path='/error403' element={<Error403 />} />
        <Route path='/home' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<HomePage />} />} />
      </Routes>
    </div>
  );
};

export default Routs;