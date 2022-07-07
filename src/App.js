import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main';
import HomePage from './pages/home';
import ServicePage from './pages/service';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import {  ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import AppTheme from './style/theme/main';

// import "@fontsource/montserrat/"
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';



function App() {
  return (
    <ThemeProvider theme={createTheme(AppTheme)}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='service' element={<ServicePage />} />
            <Route path='about' element={<AboutPage />} />
          </Route>
          <Route path='/contact' element={<ContactPage />} />
          {/* <Route path='*' element={<ContactPage />} /> */}
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
