import React, { useEffect, useState } from 'react'
import Wish from '../assets/static/buttons/wish@2x.png'
import User from '../assets/static/buttons/perfil@2x.png'
import Shop from '../assets/static/buttons/carrito@2x.png'
import Search from '../assets/static/buttons/buscar@2x.png'
import Menu from '../assets/static/buttons/menu.png'
import Logo from '../assets/static/graphics/logoartree.png'
const menu = ['¿Quienes somos?', 'EXCLUSIVE', 'PRO', 'LIKE A PRO', 'MATERIALES', 'REGALOS', 'Artistas', 'Wishlist', 'Carrito', 'Usuario']

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [notificationWhish, setNotificationWhish] = useState(12)
    const [notificationCart, setNotificationCart] = useState(10)
    let MenuTags = document.getElementById('menuDesplegable')
    const navigate = (section) => {
        const redirect = {
            '¿Quienes somos?': '/about',
            'EXCLUSIVE': '/infoExclusive',
            'PRO': '/infoPro',
            'LIKE A PRO': '/infoLikepro',
            'MATERIALES': '/infoMaterials',
            'REGALOS': '/',
            'Artistas': '/artist',
            'Register': '/register',
            'Wishlist': '/wishlist',
            'Carrito': '/cart',
            'Carrito': '/cart',
            'Usuario': '/profile',
            'home': '/'
        }
        window.location = redirect[section] ? redirect[section] : '/'
    }
    window.onclick = function (event) {
        let obj = event.path[0]['className']
        let menu = document.getElementById('menuDesplegable')
        if (!menu.hidden && obj !== "menu__img") {
            menu.hidden = true
        }
    }
    const displayMenu = () => {
        let element = document.getElementById('menuDesplegable')
        element.attributes.getNamedItem('hidden') ? element.removeAttribute('hidden') : element.hidden = true
    }

    return (
        <nav className="header">
            <div className="header__cont">
                <img className="header__logo" src={Logo} alt='Logo' onClick={() => navigate('home')} />
                <div className="header__iconsCont">
                    <img className='header__icon' src={User} onClick={() => navigate('Register')} />
                    <div className='icons__notification' onClick={() => navigate('Wishlist')}>
                        <img className='header__icon2' src={Wish} />
                        {notificationWhish !== 0 && <div>{notificationWhish}</div>}
                    </div>
                    <div className='icons__notification' onClick={() => navigate('Carrito')}>
                        <img className='header__icon2' src={Shop} />
                        {notificationCart !== 0 && <div>{notificationCart}</div>}
                    </div>
                    <img className='header__icon' src={Search} />
                    <img className="menu__img" src={Menu} alt="Menu" onClick={() => displayMenu()} />
                </div>
                <div id='menuDesplegable' className="menu__content" hidden>
                    {menu.map((items) =>
                        <div className="menu__item" onClick={() => navigate(items)}>
                            <h3>{items}</h3>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
