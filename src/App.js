import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main';
import HomePage from './pages/home';
import ServicePage from './pages/service';
import AboutPage from './pages/about';
import Loginpage from './pages/signin';
import Signuppage from './pages/signup';
import ContactPage from './pages/contact';
import Waitlist from './pages/waitlist';
import Waitlistform from './pages/waitlistForm';
import {  ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import AppTheme from './style/theme/main';


// import "@fontsource/poppins/"
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

// import UnitPage from './pages/unit';
import DocumentationPage from './pages/documentation';



function App() {
  return (
<ThemeProvider theme={createTheme(AppTheme)}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='service' element={<ServicePage />} />
            <Route path='about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/doc' element={<DocumentationPage />} />
          </Route>
          <Route path='/login' element={<Loginpage/>} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/form' element={<Waitlistform />} />
          {/* <Route path='/unit' element={<UnitPage />} /> */}
          {/* <Route path='*' element={<ContactPage />} /> */}
        </Routes>
      </BrowserRouter>

    </ThemeProvider>  );
}

export default App;
