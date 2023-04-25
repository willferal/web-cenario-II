import React from "react";
import './Player.css';


const Player = (audio, title, pass) => {
    function opa() {
        console.log()
    }

    return (
        <div class="footer navbar-fixed-bottom">
            <div id="center">
                <div className="displayPLayer well well-sm">
                    <h3 ref={title} id="title">...</h3>
                    <img className="Player_butao" src="/assets/images/left.png" onClick={e => pass(-1)}></img>
                    <audio ref={audio} id="audio" preload="preload" controls>
                        <source src="" />
                    </audio>
                    <img className="Player_butao" src="/assets/images/right.png" onClick={e => pass(1)}></img>
                </div>
            </div>
        </div>
    )
}

export default Player