import { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image'; 
import logo from '../../../assets/img/logo/logo2.png'
import { useNavigate } from 'react-router-dom';
import toastStore from '../../../store/toast/ToastStore';

const TwoFactorAuthScreen = () => {
    const [authCode, setAuthCode] = useState('');
    const navigate = useNavigate();

    const checkedValue = ( authCode: string) => {
      console.log('Código de autenticação:', authCode)
      if(authCode==='123456'){
        navigate("/homeTech");
      } else{
        setAuthCode('')
        const errorMessage = "O valor digitado , não corresponde ao que foi enviado, digite novamente!!!";
        toastStore.exibirMensagensErro([errorMessage])
      }
    }

    const header = (
        <div className="text-center py-5">            
            <Image 
                src={logo}
                alt="Tech Uni Store"                 
                height="300px" 
                className="mb-3"
            />           
        </div>
    );

    const footer = (
        <div className="pt-3">
            <Button 
                disabled={authCode.length !== 6}
                label="Verify" 
                className="w-full p-button-success" 
                onClick={() => checkedValue(authCode)} 
            />
        </div>
    );

    return (
        <div className="flex justify-content-center align-items-center min-h-screen bg-gray-100 p-4">
            <Card 
                title={<h2 className="text-2xl font-semibold text-center">Two-factor authentication</h2>}
                style={{ width: '25rem' }}
                header={header}
                footer={footer} 
            >
                <div className="field mb-4">
                    <div className="flex justify-content-between align-items-center mb-2">
                        <label htmlFor="authCode" className="font-medium">Authentication code</label>
                        <a href="#" className="text-sm text-blue-500 hover:text-blue-700">What's this?</a>
                    </div>
                    <InputText 
                        id="authCode" 
                        value={authCode} 
                        onChange={(e) => setAuthCode(e.target.value)} 
                        className="w-full"
                        type="password" 
                        placeholder="••••••" 
                        aria-describedby="authCode-help" 
                    />                    
                </div>
            </Card>
        </div>
    );
}

export default TwoFactorAuthScreen;