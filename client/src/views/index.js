import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MainRoutes from "Routes/Main-Routes";
import 'Assets/styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <React.Fragment>
        <MainRoutes />
        <ToastContainer 
            position={toast.POSITION.BOTTOM_CENTER}
            autoClose={4000}
            pauseOnFocusLoss={false} />
    </React.Fragment>
);

export default App;