import React from 'react'
import './SideBox.css'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SideBox = ({clickedButton,handleButtonClick}) => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    Cookies.remove('userInfo');
    toast.success('Logout Successful!');
    navigate('/');
  }
  return (
    <div className='sidebox-container'>
      <div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Home')}>{clickedButton==='Home'?<HomeIcon/>: <HomeOutlinedIcon/>}Home</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Search')}>{clickedButton==='Search'?<SearchIcon/>: <SearchOutlinedIcon/>}Search</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Explore')}>{clickedButton==='Explore'?<ExploreIcon/>: <ExploreOutlinedIcon/>}Explore</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Messages')}>{clickedButton==='Messages'?<ChatBubbleIcon/>: <ChatBubbleOutlineOutlinedIcon/>}Messages</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Notification')}>{clickedButton==='Notification'?<NotificationsIcon/>: <NotificationsNoneOutlinedIcon/>}Notification</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Create')}>{clickedButton==='Create'?<AddBoxIcon/>: <AddBoxOutlinedIcon/>}Create</div>
        <div className={'button sidelist' } onClick={() => handleButtonClick('Profile')}>{clickedButton==='Profile'?<PersonIcon/>: <PersonOutlineOutlinedIcon/>}Profile</div>
      </div>
      <div className='button sidelist logout' onClick={handleLogout}><LogoutIcon/>Logout</div>
    </div>
  )
}

export default SideBox