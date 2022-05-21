import { Header } from './components/header'
import { Dashboard } from './components/Dashboard';

import './styles/global.css'
import { TransactionTable } from './components/TransactionTable';




export function App(): JSX.Element {
return (
  <>
    <Header/>
    <Dashboard/>
    <TransactionTable/>

 

    

   
 

  </>
  );
}