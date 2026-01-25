import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import './form.css';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

// Definindo a interface para os dados do formulário
interface FormData {
    name: string;
    email: string;
    password: string;
    date: Date | null;
    country: string | null;
    accept: boolean;
}

const CreateUserPage = () => {    
    const [visible, setVisible] = useState(false);    
    const [countries, setCountries] : any = useState([]);  
    const defaultValues : FormData = {
        name: '',
        email: '',
        password: '',
        date: null,
        country: null,
        accept: false
    };   
    
    useEffect(() => {
        setCountries([ {name: "Brazil"}, {name: "USA"}]);
    }, []);

    const navigate = useNavigate();
    const { control, formState: { errors }, handleSubmit, reset } = useForm<FormData>({ defaultValues });

    const onSubmit = (data:any) => {
        console.log(data);  // You can handle the form submission logic here
        reset();
    };

    const getFormErrorMessage = (name: keyof FormData) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>;
    };
    return (
        <>
            <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
                <div className="flex flex-column align-items-center justify-content-center">
                    <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                                <h3 className="text-600 font-medium text-center mb-5">Create New Account</h3>
                                
                                <div className="field">                                    
                                    <Controller name="name" control={control} rules={{ required: 'Name is required.' }} 
                                    render={({ field, fieldState }) => (
                                        <IconField iconPosition="left">
                                            <InputIcon className="pi pi-user"> </InputIcon>
                                            <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} placeholder='Tip Your Name *'/>
                                        </IconField>
                                    )} />                                    
                                    {getFormErrorMessage('name')}
                                </div>
                                
                                <div className="field">                                                                        
                                        <Controller name="email" control={control}
                                            rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                            render={({ field, fieldState }) => (
                                                <IconField iconPosition="left">
                                                    <InputIcon className="pi pi-envelope"> </InputIcon>
                                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} placeholder='Email*'/>
                                                </IconField>    
                                            )} />                                                                         
                                        {getFormErrorMessage('email')}
                                </div>

                                <div className="field">                                    
                                        <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                            <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                                        )} />                                                                            
                                        {getFormErrorMessage('password')}
                                </div>

                                <div className="field">                                    
                                    <Controller name="date" control={control} render={({ field }) => (
                                        <Calendar id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon  placeholder='DD/MM/YYYY'/>
                                    )} />                                                                      
                                </div>

                                <div className="field">                                    
                                        <Controller name="country" control={control} render={({ field }) => (
                                            <Dropdown id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} options={countries} optionLabel="name" />
                                        )} />                                                                            
                                </div>

                                <div className="field-checkbox">
                                    <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                        <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                    <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                                </div>                                                                               
                                
                                <Button 
                                    label="Create a New Account" 
                                    className="w-full p-3 text-xl mb-2"                                       
                                    type="submit" />
                                    
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer " onClick={() => navigate('/auth/login')} style={{ color: 'var(--primary-color)' }}>
                                    Or Login
                                </a>
                            </div>                        
                        </form>
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

export default CreateUserPage;
