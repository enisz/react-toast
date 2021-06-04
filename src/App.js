import { ToastContextProvider } from './context/ToastContext';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <ToastContextProvider>
      <Home />
    </ToastContextProvider>
  );
}
