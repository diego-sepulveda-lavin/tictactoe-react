import React from 'react';


const NuevoJuego = (props) => {

    return (
        <div className="row" >
            <div className="container nuevoJuegoContainer">
                <div className="row">
                    <div className="col">
                        <h2 id="chooseWeaponText">Choose your Weapon</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" name="jugador1" placeholder="Player 1" onChange={props.handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="jugador2" placeholder="Player 2" onChange={props.handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="selectX" onClick={props.handleSelectedWeapon}>X</div>
                    </div>
                    <div className="col">
                        <div className="selectO" onClick={props.handleSelectedWeapon}>O</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NuevoJuego
