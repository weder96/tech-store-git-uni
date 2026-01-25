import Routs from './routers/Routes'

import 'primereact/resources/themes/lara-dark-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './App.css';

import { PrimeReactProvider } from 'primereact/api';

import { Toast } from 'primereact/toast';

import { Messages } from 'primereact/messages';
import toastStore from './store/toast/ToastStore'
import messageStore from './store/messages/MessageStore'
import React from 'react';
import { Footer } from './components/views/footers/footer';


export default function App() {
  return (
    <>
      <React.StrictMode>
        <PrimeReactProvider> 
          <div className='app'>                    
            <Routs />
            <Messages ref={(elem: any) => (messageStore.message = elem)} />
            <Toast ref={(el: any) => (toastStore.toast = el)} />   
            <Footer />                   
          </div>         
        </PrimeReactProvider>
      </React.StrictMode>
    </>
  )
}
