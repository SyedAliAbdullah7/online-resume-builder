import Home from './Componnets/HomePage/home';
import Form from './Componnets/Form/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestTemplate from './Componnets/CVTemplates/guestTemplate';
import CombinedForm from './Componnets/Form/sign';
import Main from './Componnets/HomePage/main';
import UserTemplate from './Componnets/CVTemplates/UserTemplate';
import AdminDashboard from './Componnets/Admin/admin';


function App() {

  const trueChoice = true;
  const falseChoice = false;

  return (
    <Router>
      <Routes>
        <Route path='/admin' element={<AdminDashboard/> }  />
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<CombinedForm status={falseChoice} />} />
        <Route path='/sign-in' element={<CombinedForm status={trueChoice} />} />
        <Route path='/user' element={<Main />}/>
        <Route path='/guest/form' element={<Form ResumeResult= "/guest/form/resume" />}/>
        <Route path='/user/form' element={<Form ResumeResult= "/user/form/resume" />}/>
        <Route path='/guest/form/resume' element={<GuestTemplate />} />
        <Route path='/user/form/resume' element={<UserTemplate />} />
      </Routes>
      
    </Router>
  );
}

export default App;
