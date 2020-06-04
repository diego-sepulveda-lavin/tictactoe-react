import React, {useState} from 'react';


function NuevoJuego() {

    const [jugadorX, setJugadorX] = useState("")
    const [jugadorO, setJugadorO] = useState("")

    function capturePlayer(e){
        console.log(e.target.value)
    }

    return (
        <div className="container nuevoJuegoContainer">
            <div className="row">
                <div className="col">
                    <h2 id="chooseWeaponText">Choose your Weapon</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="" id="" placeholder="Player 1 username" onChange={capturePlayer}/>
                </div>
                <div className="col">
                    <input type="text" name="" id="" placeholder="Player 2 username"onChange={capturePlayer}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="selectX">X</div>
                </div>
                <div className="col">
                    <div className="selectO">O</div>
                </div>
            </div>
        </div>

    )
}

export default NuevoJuego
