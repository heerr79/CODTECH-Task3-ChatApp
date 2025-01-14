import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/Adduser"
const Chatlist = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className='chatList'>Chatlist

            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"}
                    alt=""
                    className="add"
                    onClick={() => setAddMode((prev => !prev))} />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arjun Panchal</span>
                    <p>Thanks a lot</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Dad</span>
                    <p>Call me once free..</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mom</span>
                    <p>At what time will you be coming?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Uncle</span>
                    <p>Congratulations dear</p>
                </div>
            </div>
            {addMode && <AddUser />}
        </div>

    )
}

export default Chatlist