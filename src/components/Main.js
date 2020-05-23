import React from 'react';
import '../styles/Main.css'

const Main = () => {
    return <main>
        <div className="main_top">
            <h1>Students</h1>
            <div className="btn">
                <button>Export CSV</button>
                <button>Email Students</button>
                <button>Add Students</button>
            </div>
        </div>
        <div className="main_center">
            <div className="main_center_top">
                <div className="main_center_top-left">
                    <select>
                        <option value ="volvo">Add Filter</option>
                        <option value ="saab">Add name</option>
                        <option value="opel">Add Id</option>
                        <option value="audi">Add email</option>
                    </select>
                    <div class="search">
                        <input type="text" placeholder="Search for a user by name or email" name="search" id="1" value="" />
                    </div>
                </div>
                <div className="main_center_top-right">

                </div>
            </div>
            <div className="main_center_bottom">
                <h1>Showing 1-1 of Students</h1>

            </div>
        </div>
    </main>
}

export default Main;