import React, { useState } from 'react'

const Tablero = ({ jugador1, jugador2, selectedWeapon, turno, ...props }) => {

    const [ganador, setGanador] = useState(null)

    // datos y funcionalidad de Tablero
    const [valoresTablero, setValoresTablero] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])

    const setTablero = (x, y) => {
        if (valoresTablero[x][y] === null) {
            valoresTablero[x][y] = selectedWeapon;
            setValoresTablero(valoresTablero)
        }
        getWinner()
    }

    const getWinner = () => {
        // Las horizontales
        if (valoresTablero[0][0] !== null && valoresTablero[0][1] !== null && valoresTablero[0][2] !== null) {
            if (valoresTablero[0][0] === valoresTablero[0][1] && valoresTablero[0][1] === valoresTablero[0][2]) {
                setGanador(true)
            }
        }
        if (valoresTablero[1][0] !== null && valoresTablero[1][1] !== null && valoresTablero[1][2] !== null) {
            if (valoresTablero[1][0] === valoresTablero[1][1] && valoresTablero[1][1] === valoresTablero[1][2]) {
                setGanador(true)
            }
        }
        if (valoresTablero[2][0] !== null && valoresTablero[2][1] !== null && valoresTablero[2][2] !== null) {
            if (valoresTablero[2][0] === valoresTablero[2][1] && valoresTablero[2][1] === valoresTablero[2][2]) {
                setGanador(true)
            }
        }

        // Verticales
        if (valoresTablero[0][0] !== null && valoresTablero[1][0] !== null && valoresTablero[2][0] !== null) {
            if (valoresTablero[0][0] === valoresTablero[1][0] && valoresTablero[1][0] === valoresTablero[2][0]) {
                setGanador(true)
            }
        }
        if (valoresTablero[0][1] !== null && valoresTablero[1][1] !== null && valoresTablero[2][1] !== null) {
            if (valoresTablero[0][1] === valoresTablero[1][1] && valoresTablero[1][1] === valoresTablero[2][1]) {
                setGanador(true)
            }
        }
        if (valoresTablero[0][2] !== null && valoresTablero[1][2] !== null && valoresTablero[2][2] !== null) {
            if (valoresTablero[0][2] === valoresTablero[1][2] && valoresTablero[1][2] === valoresTablero[2][2]) {
                setGanador(true)
            }
        }

        // Diagonales
        if (valoresTablero[0][0] !== null && valoresTablero[1][1] !== null && valoresTablero[2][2] !== null) {
            if (valoresTablero[0][0] === valoresTablero[1][1] && valoresTablero[1][1] === valoresTablero[2][2]) {
                setGanador(true)
            }
        }
        if (valoresTablero[2][0] !== null && valoresTablero[1][1] !== null && valoresTablero[0][2] !== null) {
            if (valoresTablero[2][0] === valoresTablero[1][1] && valoresTablero[1][1] === valoresTablero[0][2]) {
                setGanador(true)
            }
        }
    }

    return (
        <>
            <div className="container contenedorTablero">
                <div className="row">
                    <div className="col my-2" id="endgame">
                        {
                            !!ganador ? (
                                <>
                                    <p id="ganador">We have a Winner!</p>
                                    <button id="playAgain" onClick={props.reset}>Play Again</button>
                                </>

                            ) : (
                                    <p id='turno'>Turn: <span>{turno ? jugador1 : jugador2}</span></p>
                                )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c1" onClick={(e) => { setTablero(0, 0); props.handleChangeWeapon(e); }}>{valoresTablero[0][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c2" onClick={(e) => { setTablero(0, 1); props.handleChangeWeapon(e); }}>{valoresTablero[0][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c3" onClick={(e) => { setTablero(0, 2); props.handleChangeWeapon(e); }}>{valoresTablero[0][2]}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c4" onClick={(e) => { setTablero(1, 0); props.handleChangeWeapon(e); }}>{valoresTablero[1][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c5" onClick={(e) => { setTablero(1, 1); props.handleChangeWeapon(e); }}>{valoresTablero[1][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c6" onClick={(e) => { setTablero(1, 2); props.handleChangeWeapon(e); }}>{valoresTablero[1][2]}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c7" onClick={(e) => { setTablero(2, 0); props.handleChangeWeapon(e); }}>{valoresTablero[2][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c8" onClick={(e) => { setTablero(2, 1); props.handleChangeWeapon(e); }}>{valoresTablero[2][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c9" onClick={(e) => { setTablero(2, 2); props.handleChangeWeapon(e); }}>{valoresTablero[2][2]}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tablero


