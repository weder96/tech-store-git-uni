
import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';

const RecoverPassPage = () => {    
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
                <div className="flex flex-column align-items-center justify-content-center">
                    
                    <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">                            
                                <h3 className="text-600 font-medium">Recover Password</h3>
                            </div>

                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText id="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                
                                <div className="flex align-items-center justify-content-between mb-2 gap-5">
                                    
                                </div>
                                <Button label="Sent reset password" className="w-full p-3 text-xl mb-2" onClick={() => setVisible(true)}></Button>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer " onClick={() => navigate('/auth/create')} style={{ color: 'var(--primary-color)' }}>
                                    Or Create a New Account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Dialog header="Reset Password sent" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-2">
                    The steps to reset your password has been sent to your email.
                </p>
                <a className="font-medium no-underline ml-2 text-right cursor-pointer mt--3" onClick={() => navigate('/auth/login')} style={{ color: 'var(--primary-color)' }}>
                    Please, try to Login again 
                </a>
            </Dialog>
        </>
        
    );
};

export default RecoverPassPage;