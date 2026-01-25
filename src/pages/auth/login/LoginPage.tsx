import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import styles from './styles';
import toastStore from '../../../store/toast/ToastStore';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';

// Definindo a interface para os dados do formulário
interface FormData {
    username: string;    
    password: string;       
}

const LoginPage = () => {    
    const [rememberMe,setRememberMe] = useState(false);
    const navigate = useNavigate();
    

    const onSubmit = (data:any) => {
        console.log('data :', data) 
        localStorage.setItem("username", data.username);
        console.log('username :', data.username) 
        console.log('password :', data.password) 
        if(data.username==='Admin' && data.password==='Admin123'){
            navigate('/homeTech');        
        } else{            
            const errorMessage = "O valor digitado , não corresponde ao username e password, digite novamente!!!";
            toastStore.exibirMensagensErro([errorMessage])
        }  
        reset();          
    };     


    const loadRememberMe = (checked: boolean) => {
        localStorage.setItem("rememberMe", checked.toString());
        setRememberMe(checked)
    };

    const onClickForgotPass = () => {
        navigate('/auth/recover-pass');
    };

    const onClickCreateAccount = () => {
        navigate('/auth/create');
    };

      const defaultValues : FormData = {
        username: '',        
        password: ''               
    };   

    const { control, formState: { errors }, handleSubmit, reset } = useForm<FormData>({ defaultValues });
    
   
    const getFormErrorMessage = (name: keyof FormData) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>;
    };

  
    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>                
                <div style={styles.leftPanel}>
                    <h1 className="text-4xl font-bold mb-3">Welcome back!</h1>
                    <p className="text-lg text-gray-200">
                        You can sign in to access with your existing account.
                    </p>
                </div>
                
                <div style={styles.rightPanel}>
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sign In</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">                                    
                            <Controller name="username" control={control} rules={{ required: 'userName is required.' }} 
                            render={({ field, fieldState }) => (
                                <IconField iconPosition="left">
                                    <InputIcon className="pi pi-user"> </InputIcon>
                                    <InputText id={field.name} {...field} autoFocus 
                                              className={classNames({ 'p-invalid': fieldState.invalid })} 
                                              placeholder='Tip Your userName *'/>
                                </IconField>
                            )} />                                    
                            {getFormErrorMessage('username')}
                        </div>

                                                    
                        <div className="field">                                    
                                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />                                                                            
                                {getFormErrorMessage('password')}
                        </div>

                        <div className="flex align-items-center justify-content-between mb-5">
                            <div className="field-checkbox flex align-items-center">
                                <Checkbox 
                                    inputId="rememberMe" 
                                    checked={rememberMe} 
                                    onChange={(e: any) => loadRememberMe(e.checked)} 
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-gray-700">Remember me</label>
                            </div>
                            <a href="#" className="text-sm font-medium" style={{color: '#6a11cb'}} onClick={() => onClickForgotPass()}>Forgot password?</a>
                        </div>

                        <Button 
                            label="Sign In" 
                            style={styles.signInButton}
                            className="p-button-lg" 
                            type='submit'                             
                        />

                        <div className="mt-5 text-center">
                            <p className="text-gray-600">
                                New here? <a href="#" className="font-medium" style={{color: '#6a11cb'}} onClick={() => onClickCreateAccount()}>Create an Account</a>
                            </p>
                        </div>
                    </form>
                </div>                
            </div>
        </div>
    );
}

export default LoginPage;