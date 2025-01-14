import "./detail.css"
const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./Lamborghini.png" alt="" />
                <h2>Arjun</h2>
                <p>It all starts with a Dream</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./bg2.jpg" alt="" />
                                <span> FerrariSF90.png</span>

                            </div><img src="./download.png" alt="" className="icon" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./bg1.jpg" alt="" />
                                <span> FordTorino.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />

                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./Ferrari.jpg" alt="" />
                                <span> Ferrari.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />

                        </div>

                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail