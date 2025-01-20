
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { MusicProvider } from './contexts/MusicContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MusicProvider>
   <App />
  </MusicProvider>    
    <Toaster/>
  </BrowserRouter>,
 
)
