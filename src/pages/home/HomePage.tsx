
import { observer } from "mobx-react";
import { Button } from 'primereact/button';

import toastStore from '../../store/toast/ToastStore'
import messageStore from '../../store/messages/MessageStore'
import { InputText } from "primereact/inputtext";
import { useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
const HomePage = (props: any) => {
  console.log('props :', props)
  const [count, setCount] = useState(0);

  const showSuccess = () => {
    const successMessage = 'Teste Sucesso';
    toastStore.exibirMensagensSucesso([successMessage])
  }

  const showInfo = () => {
    const successInfo = 'Teste Info';
    toastStore.exibirMensagensInfo([successInfo])
  }

  const showWarn = () => {
    const successWarn = 'Teste Warnning';
    toastStore.exibirMensagensWarn([successWarn])
  }

  const showError = () => {
    const successError = 'Teste Error';
    toastStore.exibirMensagensErro([successError])
  }

  const showSuccessMessagePlain = () => {
    const successMessage = 'Teste Message Plain';
    messageStore.exibirMensagensSucesso([successMessage])
  }

  const showSuccessWarnPlain = () => {
    const successMessage = 'Teste Warn Message Plain';
    messageStore.exibirMensagensWarn([successMessage])
  }

  const showSuccessErrorPlain = () => {
    const successMessage = 'Teste Warn Message Plain';
    messageStore.exibirMensagensErro([successMessage])
  }

  const showSuccessInfoPlain = () => {
    const successMessage = 'Teste Warn Message Plain';
    messageStore.exibirMensagensInfo([successMessage])
  }



  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" className="logo" alt="React logo" />
          </a>
          <a href="https://primereact.org/" target="_blank">
            <img src="/primereact.svg" className="logo" alt="Prime React logo" />
          </a>
        </div>
        <h1>Vite + PrimeReact</h1>
        <div>
          <h2>PrimeReact Typescript Issue Template 2</h2>
          <p>
            Please create a test case and attach the link to the to your github
            issue report.
          </p>
        </div>
        <div className="card">
          <Button
            icon="pi pi-plus"
            className="mr-2"
            label="Increment"
            onClick={() => setCount((count) => count + 1)}
          ></Button>
          <InputText type="text" value={count.toString()} />
          <p>
            Edit <code>src/App.tsx</code> and save to test PrimeReact
            <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
            <i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i>
            <i className="pi pi-search" style={{ fontSize: '2rem' }}></i>
            <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <div className="grid">
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button onClick={showSuccessMessagePlain} label="Message Plain Success" severity="success" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold ">
              <Button onClick={showSuccessInfoPlain} label="Message Plain Info" severity="info" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold ">
              <Button onClick={showSuccessWarnPlain} label="Message Plain Warn" severity="warning" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold ">
              <Button onClick={showSuccessErrorPlain} label="Message Plain Error" severity="danger" />
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Primary" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Secondary" severity="secondary" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Success" onClick={showSuccess} severity="success" icon="pi pi-check" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Info" onClick={showInfo} severity="info" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Warning" onClick={showWarn} severity="warning" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Help" severity="help" />
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 border-round-sm  font-bold">
              <Button label="Danger" onClick={showError} severity="danger" />
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(HomePage)
