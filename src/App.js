import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar, Footer, Header, Sidebar, ThemeSettings} from './components';
import {Article, CustomTool, Dashboard, Editor, Paragraph, ChatBox} from './pages';

import './App.css'

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColour, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className="relative flex dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 style" style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button type='button' className='p-3 text-2xl text-white hover:drop-shadow-xl hover:bg-gray-300' onClick={() => setThemeSettings(true)} style={{background:'#163b51d4', borderRadius:'50%'}}>
              <FiSettings/>
            </button>

          </TooltipComponent>
        </div>
        {activeMenu?(
          <div className="fixed bg-white sidebar w-72 dark:bg-secondary-dark-bg">
            <Sidebar/>
          </div>
        ):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar/>
          </div>
        )}

        <div className={
          activeMenu?
            'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            : 
            'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
        }>
          <div className='fixed w-full navbar md:static bg-main-bg dark:bg-main-dark-bg'>
            <Navbar/>
          </div>
        
        
        <div>

          {themeSettings && (<ThemeSettings />)}
          <Routes>

            {/* Dashboard Home */}
            {/* <Route path='/' element={<Dashboard />} /> */}
            <Route path='/dashboard' element={(<Dashboard />)} />

            {/* Product Pages */}
            <Route path='/editor' element={<Editor />} />
            <Route path='/article' element={<Article />} />
            <Route path='/paragraph' element={<Paragraph />} />
            <Route path='/custom' element={<CustomTool />} />
            <Route path='/chatbox' element={<ChatBox />} />


          </Routes>
        </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App