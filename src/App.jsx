import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Subscribe from './components/Subscribe/Subscribe'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [balance, setBalance] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);

  const showingToast = (alertMessage, typeOfMessage, position = 'top-center') => {
    const toastMessageOptions = {
      position,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    };

    if (typeOfMessage === 'success') {
      toast.success(alertMessage, toastMessageOptions);
    }
    else if (typeOfMessage === 'error') {
      toast.error(alertMessage, toastMessageOptions);
    }
    else {
      toast(alertMessage, typeOfMessage);
    }
  };

  const handleMoney = () => {
    const newBalance = balance + 10000000;
    setBalance(newBalance);
    showingToast('Congratulations! Credited Amount has been added', 'success');
  };

  const handleRemoveSelectPlayer = (player) => {
    const newSelectList = selectPlayer.filter((removePlayer) => 
      removePlayer.playerId !== player.playerId
    );
    setBalance(balance + player.biddingPrice);
    showingToast('Player removed', 'error', 'top-right');
    setSelectPlayer(newSelectList);
  };
  
const handleSelectPlayer = (player) => {
  if (selectPlayer.some((selected) => selected.playerId === player.playerId)) {
    showingToast(`${player.name} has already been selected.`, 'error');
      return;
  }
  if (selectPlayer.length >= 6) {
    showingToast('Maximum 6 players can be selected', 'error');
      return;
  }
  if (player.biddingPrice <= balance) {
    showingToast(`Congratulations! ${player.name} has been selected.`, 'success');
    setBalance(balance - player.biddingPrice);
    const newSelectedPlayer = [...selectPlayer, player];
    setSelectPlayer(newSelectedPlayer);
  }
  else {
    showingToast('Not enough money to select this player.', 'error');
  }
};

  return (
    <div>
      <ToastContainer />
      <div className='w-11/12 container mx-auto'>
          {/* Header Section */}
          <Header balance={balance}></Header>
          {/* Banner Section */}
          <Banner handleMoney={handleMoney}></Banner> 
          {/* Card Section */}
          <Players handleSelectPlayer={handleSelectPlayer} 
                  selectPlayer={selectPlayer} 
                  handleRemoveSelectPlayer={handleRemoveSelectPlayer}></Players>  
          {/* Subscribe Section */}
          <Subscribe></Subscribe>
          <section className='absolute'></section>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  )
}

export default App
