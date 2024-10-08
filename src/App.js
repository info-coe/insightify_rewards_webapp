import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RewardsIntro from './components/RewardsIntro';
import RewardsLogin from './components/RewardsLogin';
import RewardsOtpVerification from './components/RewardsOtpVerification';
import RewardsCreateAccount from './components/RewardsCreateAccount';
import RewardsHome from './components/RewardsHome';
import RewardsTier from './components/RewardsTier';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RewardsIntro />} />
        <Route path='login' element={< RewardsLogin/>} />
        <Route path='userverification' element={<RewardsOtpVerification />} />
        <Route path='createaccount' element={<RewardsCreateAccount />} />
        <Route path='rewardshome' element={<RewardsHome />} />
        <Route path='tier' element={<RewardsTier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
