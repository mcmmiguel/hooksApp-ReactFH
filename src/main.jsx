// import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { Padre } from './07-tarea-memo/Padre'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import './08-useReducer/intro-reducer'
// import { ToDoApp } from './08-useReducer/TODOApp'
// import { MainApp } from './09-useContext/MainApp'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, } from "react-router-dom";

import { getRoutes } from './Routes';

const router = createBrowserRouter(getRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
