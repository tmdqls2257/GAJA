import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Begin from './pages/Begin'
import Mypage from './components/Mypage'

ReactDOM.render(
  <React.StrictMode>
    <Mypage />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
