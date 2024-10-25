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

  const handleMoney = () => {
    const newBalance = balance + 10000000;
    setBalance(newBalance);
    toast.success('Congratulations! Credited Amount has Added', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  }

  const handleRemoveSelectPlayer = (player) => {
    const newSelectList = selectPlayer.filter((removePlayer) => 
      removePlayer.playerId !== player.playerId
    )
    toast.error('Delete selected player', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      });
    setSelectPlayer(newSelectList);
  }
  
const handleSelectPlayer = (player) => {
  if (selectPlayer.some((selected) => selected.playerId === player.playerId)) {
      toast.error('This player has already been selected.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
          });
      return;
  }

  if (selectPlayer.length >= 6) {
      toast('Maximum 6 players can be selected', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return;
  }

  if (player.biddingPrice <= balance) {
    toast.success('Congratulations! Player selected.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
      setBalance(balance - player.biddingPrice);
      const newSelectedPlayer = [...selectPlayer, player];
      setSelectPlayer(newSelectedPlayer);
    }
    else {
      toast.error('Not enough money to select this player.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        });
  }
};

  return (
    <div className='w-11/12 container mx-auto'>
      <ToastContainer />
      {/* Header */}
      <Header balance={balance}></Header>

      {/* Banner */}
      <Banner handleMoney={handleMoney}></Banner>

      {/* Card Section */}
      <Players handleSelectPlayer={handleSelectPlayer} 
              selectPlayer={selectPlayer} 
              handleRemoveSelectPlayer={handleRemoveSelectPlayer}></Players>

      {/* Subscribe */}
      <Subscribe></Subscribe>
      <section className='absolute'></section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default App
