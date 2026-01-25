import { Button } from "primereact/button";
import { useState } from "react";

const HooksUseState = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="flex flex-wrap align-items-center justify-content-center">
                <p className="font-italic border-round border-1 surface-overlay p-4">
                    Entendendo o Hooks useEffect React<br/><br/>
                    https://react.dev/reference/react/useEffect
                </p>
            </div>
            
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
};


export default HooksUseState;