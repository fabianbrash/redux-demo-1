import './App.css';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';
import AccountStatus from './components/AccountStatus';

function App() {
  return (
    <div className="App">
        <Auth />
        <Balance />
        <Banking />
        <AccountStatus />
       
    </div>
  );
}

export default App;
