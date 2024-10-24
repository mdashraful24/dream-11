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
    console.log('add money clicked');
    const newBalance = balance + 1000000;
    setBalance(newBalance);
  }

  const handleSelectPlayer = (price, id) => {
    if(price <= balance){
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

      setBalance(balance - price);
      setSelectPlayer([...selectPlayer, id]);
    } else {
      // Error toast
      toast.error('Not enough money to select this player', {
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
  }

  return (
    <div className='w-11/12 mx-auto space-y-10'>
      <ToastContainer />
      {/* Header */}
      <Header balance={balance}></Header>
      {/* Banner */}
      <Banner handleMoney={handleMoney}></Banner>
      {/* Card Section */}
      <Players handleSelectPlayer={handleSelectPlayer}></Players>
      {/* Subscribe */}
      <Subscribe></Subscribe>
      <section className='absolute'></section>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default App
