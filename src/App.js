import { useState } from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';



const App = () => {



  
  const [connected, setConnected] = useState(false);

  async function connecteternlwallet() {
    if (typeof window.cardano == 'undefined' || typeof window.cardano.eternl == 'undefined') {
      setConnected(false);
      alert("Create a New Eternl");
      return;
    }
    window.cardano.eternl.enable().then(api => { api.getUsedAddresses().then(addy => { 
      console.log(addy);
      setConnected(true);
    }); });
  }
    async function connectflintwallet() {
    if (typeof window.cardano == 'undefined' || typeof window.cardano.flint == 'undefined') {
      setConnected(false);
      alert("Create a New Flint Wallet");
      return;
    }
    window.cardano.flint.enable().then(api => { api.getUsedAddresses().then(addy => { 
      console.log(addy);
      setConnected(true);
    }); });
    }
    async function connectgerowallet() {
    if (typeof window.cardano == 'undefined' || typeof window.cardano.gerowallet == 'undefined') {
      setConnected(false);
      alert("Create a New Gero Wallet");
      return;
    }
    window.cardano.gerowallet.enable().then(api => { api.getUsedAddresses().then(addy => { 
      console.log(addy);
      setConnected(true);
    }); });
    }
    async function connectnamiwallet() {
    if (typeof window.cardano == 'undefined' || typeof window.cardano.nami == 'undefined') {
      setConnected(false);
      alert("Create a Nami wallet");
      return;
    }
    window.cardano.nami.enable().then(api => { api.getUsedAddresses().then(addy => { 
      console.log(addy);
      setConnected(true);
    }); });
  }
  
  return (
  <div>
    <div style={{  textAlign:'center',fontSize:'32px',fontFamily:'Poppins'}}>
      Connect Cardano Wallets
      </div>
      <div><Dropdown>
        <Dropdown.Toggle style={{position:'absolute',right:'0',left:'675px',width:'300px' ,fontFamily:'Poppins',fontSize:'22px',height:'60px',borderRadius:'20px', backgroundColor:'black'}} variant="success" id="dropdown-basic">
        Choose Wallet
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'300px',textAlign:'center',fontFamily:'Poppins',fontSize:'18px'}}>
        <Dropdown.Item  onClick={connecteternlwallet}>Eternl</Dropdown.Item>
        <Dropdown.Item onClick={connectflintwallet}>Flint </Dropdown.Item>
          <Dropdown.Item onClick={connectnamiwallet}>Nami</Dropdown.Item>
          <Dropdown.Item onClick={connectgerowallet}>Gero Wallet</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
      
      
      {connected ? <p style={{fontFamily:'Poppins',position:'relative',color:'green',top:'250px',left:'720px',fontSize:'24px'}}>Wallet Connected</p> : <p style={{fontFamily:'Poppins',position:'relative',color:'red',top:'250px',left:'700px',fontSize:'24px'}}>Wallet Not Connected</p>}
    </div>
  )
}

export default App
