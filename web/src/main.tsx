import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EncryptPayload from "./pages/EncyptPayload.tsx";
import DecryptPayload from "./pages/DecryptPayload.tsx";
import ViewLogs from "./pages/ViewLogs.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App/>} />
                <Route path="encrypt" element={<EncryptPayload/>} />
                <Route path="decrypt" element={<DecryptPayload/>} />
                <Route path="logs" element={<ViewLogs/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
