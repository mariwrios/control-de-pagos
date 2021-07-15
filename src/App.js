import {Login} from './components/auth/Login'
import { HomeDelegado } from './components/delegado/home/HomeDelegado';
import { ProfileDelegado } from './components/delegado/profile/ProfileDelegado';

function App() {
  return (
    <div >
      <Login/>
      <HomeDelegado/>
      <ProfileDelegado/>
    </div>
  );
}

export default App;
