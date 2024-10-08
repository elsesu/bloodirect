import HomePage from "./components/pages/home/home-page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";
import ContactPage from "./components/pages/contact/contact-page";
import Admin from "./components/layouts/admin";
import Dashboard from "../src/components/views/admin/dashboard";
import AdminDonateBlood from "../src/components/views/admin/admin-donate-blood";
import AdminNeedBlood from "../src/components/views/admin/admin-need-blood";
import AdminHostBloodDrive from "../src/components/views/admin/admin-host-blood-drive";
import AdminNeedHelp from "../src/components/views/admin/admin-need-help";
import SignUp from "./components/pages/signUp/SignUp";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import { AuthProvider } from "./components/hooks/useAuth";

export default function App() {
    return (
        <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/host-blood-drive" element={<HostBloodDrivePage />} />
                    <Route path="/donate-blood" element={<DonateBloodPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/need-blood" element={<NeedBloodPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />}>
                        <Route index element={<Dashboard />} />
                        <Route path="donate-blood" element={<AdminDonateBlood />} />
                        <Route path="need-blood" element={<AdminNeedBlood />} />
                        <Route path="host-blood-drive" element={<AdminHostBloodDrive />} />
                        <Route path="need-help" element={<AdminNeedHelp />} />
                    </Route>
                </Routes>
     
        </AuthProvider>
    );
}
