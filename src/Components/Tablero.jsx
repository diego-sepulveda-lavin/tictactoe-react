import React, { useState } from 'react'

const Tablero = ({ jugador1, jugador2, selectedWeapon, turno, ...props }) => {

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
    }

    return (
        <>
            <div className="container contenedorTablero">
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c1" onClick={(e) => {setTablero(0, 0); props.handleChangeWeapon(e);}}>{valoresTablero[0][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c2" onClick={(e) => {setTablero(0, 1); props.handleChangeWeapon(e);}}>{valoresTablero[0][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c3" onClick={(e) => {setTablero(0, 2); props.handleChangeWeapon(e);}}>{valoresTablero[0][2]}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c4" onClick={(e) => {setTablero(1, 0); props.handleChangeWeapon(e);}}>{valoresTablero[1][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c5" onClick={(e) => {setTablero(1, 1); props.handleChangeWeapon(e);}}>{valoresTablero[1][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c6" onClick={(e) => {setTablero(1, 2); props.handleChangeWeapon(e);}}>{valoresTablero[1][2]}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c7" onClick={(e) => {setTablero(2, 0); props.handleChangeWeapon(e);}}>{valoresTablero[2][0]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c8" onClick={(e) => {setTablero(2, 1); props.handleChangeWeapon(e);}}>{valoresTablero[2][1]}</div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c9" onClick={(e) => {setTablero(2, 2); props.handleChangeWeapon(e);}}>{valoresTablero[2][2]}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tablero


