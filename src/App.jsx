import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json());


function App() {
  
  return (
    <>
      <Countries countriesPromise={countriesPromise}></Countries>
    </>
  )
}

export default App
