import React, { useState } from 'react'
import Wish from '../assets/static/buttons/wish@2x.png'
import User from '../assets/static/buttons/perfil@2x.png'
import Shop from '../assets/static/buttons/carrito@2x.png'
import Search from '../assets/static/buttons/buscar@2x.png'
import Menu from '../assets/static/buttons/menu.png'
import Logo from '../assets/static/graphics/logoartree.png'
const menu = ['¿Quienes somos?','EXCLUSIVE','PRO','LIKE A PRO','MATERIALES','REGALOS','Artistas','Wishlist','Carrito','Usuario']

const Header =() => {
    const [showMenu, setShowMenu] = useState(false)
    const [notificationWhish, setNotificationWhish] = useState(12)
    const [notificationCart, setNotificationCart] = useState(10)
    
    const navigate=(section)=>{
        const redirect={
            'MATERIALES':'/infoMaterials',
            'EXCLUSIVE':'/infoExclusive',
            'profile':'/register',
            'home':'/'
        }
        window.location = redirect[section] ? redirect[section]: '/'
    }
    
    return (
        <nav className="header">
            <div className="header__cont">
                <img className="header__logo" src={Logo} alt='Logo' onClick={()=>navigate('home')}/>
                    <div className="header__iconsCont">
                        <img className='header__icon' src={User} onClick={()=>navigate('profile')}/>
                        <div className='icons__notification'>
                            <img className='header__icon2' src={Wish} />
                            {notificationWhish!==0&&<div>{notificationWhish}</div>}
                        </div>
                        <div className='icons__notification'>
                            <img className='header__icon2' src={Shop} />
                            {notificationCart!==0&&<div>{notificationCart}</div>}
                        </div>
                        <img className='header__icon' src={Search} />
                        <img className="menu__img"src={Menu} alt="Menu" onClick={()=>setShowMenu(!showMenu)}/>
                    </div>
                    {showMenu && 
                <div className="menu__content">
                    {menu.map((items)=>
                        <div className="menu__item" onClick={()=>navigate(items)}>
                            <h3>{items}</h3>
                        </div>
                    )}
                </div>}
            </div>
        </nav>
    )
}

export default Header
