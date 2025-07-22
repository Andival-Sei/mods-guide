import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import WelcomePage from './pages/WelcomePage/WelcomePage.tsx';
import CommonInstructionsPage from './pages/CommonInstructionsPage/CommonInstructionsPage.tsx';
import PreInstallPage from './pages/PreInstallPage/PreInstallPage.tsx';
import InstallModsPart1Page from './pages/InstallModsPart1Page/InstallModsPart1Page.tsx';
import ChangelogPage from './pages/ChangelogPage/ChangelogPage.tsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/commoninstructions" element={<CommonInstructionsPage />} />
            <Route path="/preinstall" element={<PreInstallPage />} />
            <Route path="/installmodspart1" element={<InstallModsPart1Page />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
