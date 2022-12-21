import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {TbTools} from 'react-icons/tb'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {links} from '../data/data'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColour, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  
  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto'>
      {activeMenu && (
      <>
      
      {/* sidebar header section */}
      <div className='flex items-center justify-between'>
        
        {/* brand name & logo */}
        <Link to='/' onClick={handleCloseSideBar} className='flex items-center gap-4 mt-8 ml-3 text-3xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <span>CyberVish</span>
        </Link>
        
        {/* closing-toggle button */}
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button 
            type='button' 
            onClick={() => setActiveMenu(!activeMenu)} 
            style={{ colour: currentColour }}  
            className='block p-3 mt-4 text-xl rounded-full hover:bg-light-gray'>
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>
      </div>
      
      {/* sidebar elements array */}
      <div className='mt-10'>
        {links.map((item) => (
          <div key={item.title}>
            <p className='m-3 mt-4 text-gray-400'>
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink 
              to={`/${link.name}`} 
              key={link.name} 
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColour: isActive ? currentColour : '',
              })}
              className={({isActive}) => (isActive? activeLink : normalLink)}>
                
                {link.icon}
                <span>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </>)}
      
    </div>
  )
}

export default Sidebar