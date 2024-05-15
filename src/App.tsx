import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/chat";
import AuthLayout from "./pages/auth/authlayout";
import Login from "./pages/auth/login";
import AdminLayout from "./pages/admin/admin.layout";
import AdminChat from "./pages/admin/admin.chat";
import DashboardAdmin from "./pages/admin/dashboard";
import LoginAdmin from "./pages/admin/login";
// import MaintenancePage from "./pages/mantenance";
import MainLayout from "./pages/main.layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        {/* <Route path="*" element={<MaintenancePage />} /> */}
        <Route path="/" element={<MainLayout />}>
          <Route path="chat" element={<ChatPage />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />
          <Route path="" element={<AdminLayout />}>
            <Route path="adminavatara" element={<DashboardAdmin />} />
            <Route path="history" element={<AdminChat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
