import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit google</a>
)
const anotherUser = 'like share subscribe'

const reactElement = React.createElement(
  'a',
  { href: 'https://youtube.com', target: 'blank' },
  'click here to use yt',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  reactElement

)
