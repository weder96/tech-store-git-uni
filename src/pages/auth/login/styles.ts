// Estilos inline para simplificar. Em um projeto real, use arquivos CSS.
const styles : { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f2f5', // Um fundo neutro para a página
        padding: '20px',
    },
    loginBox: {
        display: 'flex',
        width: '900px', // Largura total da caixa de login
        minHeight: '550px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px', // Bordas arredondadas para o contêiner principal
        overflow: 'hidden'
    },
    leftPanel: {
        flex: 1,
        background: 'linear-gradient(to bottom right, #6a11cb, #2575fc)', 
        padding: '50px 40px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
    },    
    leftPanelAbstractBefore: {
        content: '""',
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '100px',
        height: '100px',        
        opacity: 0.2,
    },
    rightPanel: {
        flex: 1.2, 
        background: 'white',
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputGroup: {
        position: 'relative',
        marginBottom: '1.5rem',
    },
    inputIcon: {
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        color: '#aaa',
    },
    inputText: {
        paddingLeft: '40px', 
        width: '100%',
        borderRadius: '8px', 
        borderColor: '#ced4da',
    },
    signInButton: {
        background: '#6a11cb', 
        borderColor: '#6a11cb',
        width: '100%',
        padding: '0.75rem',
        borderRadius: '8px',
        fontSize: '1rem',
    }
};

export default styles;