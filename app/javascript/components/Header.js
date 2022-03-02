import React, { useEffect, useState } from 'react'
import Wish from '../assets/static/buttons/wish@2x.png'
import User from '../assets/static/buttons/perfil@2x.png'
import Shop from '../assets/static/buttons/carrito@2x.png'
import Search from '../assets/static/buttons/buscar@2x.png'
import Menu from '../assets/static/buttons/menu.png'
import Logo from '../assets/static/graphics/logoartree.png'

const menu = ['¿Quienes somos?', 'EXCLUSIVE', 'PRO', 'LIKE A PRO', 'MATERIALES', 'Artistas', 'Wishlist', 'Carrito','Contáctenos']

const Header = ({currentUser, count}) => {
    console.log('HEADER-->',currentUser)
    const [showMenu, setShowMenu] = useState(false)
    const [notificationWhish, setNotificationWhish] = useState(count)
    const [notificationCart, setNotificationCart] = useState(0)
    
    const firstName = currentUser?currentUser.name.split(" ", 1):""
    const menuName = firstName?`¡Hola ${firstName}!`:'¡Bienvenido!'
    const firsNavigate = firstName?'Usuario':'Register'

    const navigate = (section) => {
        const redirect = {
            '¿Quienes somos?': '/about',
            'EXCLUSIVE': '/line/1',
            'PRO': '/line/2',
            'LIKE A PRO': '/line/3',
            'MATERIALES': '/infoMaterials',
            'Artistas': '/artist',
            'Register': '/users/sign_in',
            'Wishlist': '/wishlist',
            'Carrito': '/cart',
            'Usuario': '/profile',
            'Contáctenos': 'contacto',
            'home': '/'
        }
        window.location = redirect[section] ? redirect[section] : '/'
    }
    
    useEffect(() => {
        const cart_count = () => {
            let items = JSON.parse(localStorage.getItem("items"))
            items && setNotificationCart(items.length)
        }
        cart_count()
        
        const clickEvent=()=>{
            setShowMenu(!showMenu)
        }
        if (showMenu) {
            document.addEventListener('click',clickEvent)            
        }
        return () => {
            document.removeEventListener("click", clickEvent)
        }
    }, [showMenu])

    return (
        <nav className="header">
            <div className="header__cont">
                <img className="header__logo" src={Logo} alt='Logo' onClick={()=>navigate('home')}/>
                    <div className="header__iconsCont">
                        <img className='header__icon' src={User} onClick={()=>navigate('Register')}/>
                        <div className='icons__notification' onClick={()=>navigate('Wishlist')}>
                            <img className='header__icon2' src={Wish} />
                            {notificationWhish!==0&&<div>{notificationWhish}</div>}
                        </div>
                        <div className='icons__notification' onClick={()=>navigate('Carrito')}>
                            <img className='header__icon2' src={Shop} />
                            {notificationCart!==0&&<div>{notificationCart}</div>}
                        </div>
                        <img className='header__icon' src={Search} />
                        <img className="menu__img"src={Menu} alt="Menu" onClick={()=>{setShowMenu(true)}}/>
                    </div>
                    
                    {showMenu&&
                    <div className="menu__content">
                        <div className="menu__name">
                            <h3 onClick={()=>navigate(firsNavigate)}>{menuName}</h3>
                            {menuName!=='¡Bienvenido!'&&
                            <a data-method="delete" href="/users/sign_out">Cerrar Sesión</a>}
                        </div>
                        {menu.map((item,i)=>
                            <div className="menu__item" onClick={()=>navigate(item)}>
                                <h3>{item}</h3>
                            </div>
                        )}
                    </div>}
            </div>
        </nav>
    )
}

export default Header
