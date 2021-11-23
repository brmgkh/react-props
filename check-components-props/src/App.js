import react from 'react';
import './App.css';
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhotoBrahim from './Component/Profile/ProfilePhotoBrahim';
import ProfilePhotoSkander from './Component/Profile/ProfilePhotoSkander';
import ProfilePhotoYassine from './Component/Profile/ProfilePhotoYassine';
import Nomcomplet from './Component/Profile/Nomcomplet';

function App() {
  return (
   <div>
<Nomcomplet/>
    <div className="EspaceProfil"> 
    
     
  <div className="brahim">
   <FullName> maghraoui_brahim</FullName> 
   <Address> tunisie_mannouba</Address>
   <ProfilePhotoBrahim/>
   </div>  

   <div className="skander">
   <FullName>skander_makni</FullName> 
   <Address>tunisie_ariana</Address>
   <ProfilePhotoSkander/> 
   </div>

   <div className="yassine">
   <FullName>yassine_chatti</FullName> 
   <Address> tunisie_ariana</Address>
  <ProfilePhotoYassine/>  
   </div> 
  
   </div>
  </div>
   
  )
}

export default App;
