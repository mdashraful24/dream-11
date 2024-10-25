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
    const newBalance = balance + 100000000;
    setBalance(newBalance);
    // alert('Congratulations! Credited Amount has Added');
  }

  const handleRemoveSelectPlayer = (player) => {
    const newSelectList = selectPlayer.filter((removePlayer) => 
      removePlayer.playerId !== player.playerId
    )
    // Error toast
    toast.error('Delete selected player', {
      position: 'top-right',
      autoClose: 5000,
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
  // Check if player is already selected
  if (selectPlayer.some((selected) => selected.playerId === player.playerId)) {
      // alert("This player has already been selected.");
      toast.error('This player has already been selected.', {
          position: 'top-center',
          autoClose: 5000,
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

  // Check if the maximum number of players is reached
  if (selectPlayer.length >= 6) {
      // alert("Maximum 6 players can be selected");
      toast('Maximum 6 players can be selected', {
        position: "top-center",
        autoClose: 5000,
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

  // Check if balance is enough
  if (player.biddingPrice <= balance) {
    // Success toast
    toast.success('Congratulations! Player selected.', {
      position: 'top-center',
      autoClose: 5000,
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
    } else {
      // alert("Not enough money to select this player");
      toast.error('Not enough money to select this player.', {
        position: 'top-center',
        autoClose: 5000,
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
