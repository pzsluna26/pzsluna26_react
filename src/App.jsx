import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GroupText from './01/GroupText';

function App() {
  let x = 10;
  return (
    <>
      <div className="flex bg-amber-200 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-blue-300 font-bold">Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GroupText />
      <GroupText />
      <GroupText />
    </>
  )
}

export default App
