import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div style={{backgroundColor:"#9370DB" , marginTop:"70px",marginRight:"150px", marginLeft:"150px", borderRadius:"30px"}} className="App">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
