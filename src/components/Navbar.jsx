import React, { useEffect } from 'react'
import { AiOutlineMenu, AiOutlineNotification, AiOutlineUser } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {Notifications, UserProfile} from '.'
import { useStateContext } from '../contexts/ContextProvider'


const NavButtton =({title, customFunc, icon, colour, dotColour}) => 
(
  <TooltipComponent content={title} position="BottomCenter">
    <button 
      type='button' 
      onClick={()=> customFunc()} 
      style={{colour}} 
      className="relative p-3 text-3xl rounded-full hover:bg-light-gray">
      
      <span 
        style={{background: dotColour}} 
        className='absolute inline-flex w-2 h-2 rounded-full right-2 top-2'/>
        {icon}      
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, currentColour, setActiveMenu, isClicked, handleClick, setIsClicked, screenSize, setScreenSize} =useStateContext();
  
  useEffect(() => {
    const handleResize=() => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    
    handleResize()
    
    return() => window.removeEventListener('resize', handleResize)},[])
    
    useEffect(() => {
      if (screenSize <= 900) 
      {
        setActiveMenu(false)
      }
      else
      {
        setActiveMenu(true)
      }
    }, [screenSize])
    
    const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='relative flex justify-between p-2 md:mr-6'>
      
      {/*Left Menu Button */}
      
      <NavButtton 
        title="Menu" 
        customFunc={handleActiveMenu} 
        colour={currentColour} 
        icon={<AiOutlineMenu />}
      />
      
      {/* Navbar buttons */}
      
      <div className='flex'>
        <NavButtton 
          title="Notifications"
          dotColour="#03C9D7" 
          customFunc={() => handleClick('notification')} 
          color="blue" 
          icon={<AiOutlineNotification/>}
        />
        
        <TooltipComponent
          content='Profile'
          position='BottomCenter'
        >
          <div 
            className='flex items-center gap-2 p-2.5 rounded-full cursor-pointer hover:bg-light-gray' 
            onClick={() => handleClick('userProfile')}>
            <AiOutlineUser className='text-3xl'/>
            <MdKeyboardArrowDown/>
          </div>
          
        </TooltipComponent>
        
        {isClicked.notification && (<Notifications/>)}
        {isClicked.userProfile && (<UserProfile/>)}
      </div>
      
    </div>
  )
}

export default Navbar