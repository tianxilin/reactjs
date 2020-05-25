import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSearch, 
    faUserCircle, 
    faAngleUp,
    faTachometerAlt,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/menu.css'

const Menu = () => {
    return (
        <section class="menu">
            <div className="menu__header">
                <h1>LOGO</h1>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="menu__main">
                <section class="menu__main__level1">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUsers} />
                        </li>
                    </ul>
                </section>
                <section class="menu__main__level2">
                    <ul>
                        <li>users</li>
                        <li>Students</li>
                        <li>Owners</li>
                        <li>Owners</li>
                        <li>Owners</li>
                        <li>Owners</li>
                    </ul>
                </section>
            </div>
            <div class="menu__bottom">
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>LOGO</h1>
                <FontAwesomeIcon icon={faAngleUp}/>
            </div>
        </section>
    )
}

export default Menu;