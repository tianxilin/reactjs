import React from 'react';
import '../styles/Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsers, faSearch, faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <main>
            <section className="main__header">
                <div>
                    <FontAwesomeIcon icon={faUsers} />
                    Students
                </div>
                <div>
                    <button className="text">Export CSV</button>
                    <button className="text">Email Students</button>
                    <button className="secondary">Add Students</button>
                </div>
            </section>

            <section className="main__table">
                <div className="main__table__filter">
                    <select>
                        <option>Add Filter</option>
                        <option>Filter 1</option>
                        <option>Filter 2</option>
                    </select>
                    <div className="container">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Search for a user by name"/>
                    </div>
                </div>

                <div className="main__table__body">
                    <h1>heading</h1>
                    <ul>
                        <li>
                            <ul>
                                <li><input type="checkbox" /></li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><input type="checkbox" /></li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li>name</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Main;