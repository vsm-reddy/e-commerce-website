import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Earrings from './Earrings';
import Rings from './Rings';
import Necklaces from './Necklaces';
import AboutUs from './AboutUs'; // Import the new AboutUs component
import Store from './Store';
import ContactUs from './ContactUs';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/earrings" element={<Earrings />} />
                    <Route path="/rings" element={<Rings />} />
                    <Route path="/necklaces" element={<Necklaces />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/store" extract element={<Store/>}/>
                    <Route path="/contact" extract element={<ContactUs/>}/>

                </Routes>
            </div>
        </Router>
    );
}

const Account = () => {
    const [isRegister, setIsRegister] = useState(false);
    const navigate = useNavigate();

    const switchToRegister = () => {
        setIsRegister(true);
    };

    const switchToLogin = () => {
        setIsRegister(false);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    isRegister ? (
                        <RegisterForm switchToLogin={switchToLogin} />
                    ) : (
                        <LoginForm switchToRegister={switchToRegister} />
                    )
                }
            />
            <Route path="/register" element={<RegisterForm switchToLogin={() => navigate('/')} />} />
            <Route path="/login" element={<LoginForm switchToRegister={() => navigate('/register')} />} />
        </Routes>
    );
};

export default App;
