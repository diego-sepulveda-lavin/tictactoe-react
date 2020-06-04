import React from 'react'

function Tablero() {
    return (
        <>
            <div className="container contenedorTablero">
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c1"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c2"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c3"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c4"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c5"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c6"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="celda" id="c7"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c8"></div>
                    </div>
                    <div className="col">
                        <div className="celda" id="c9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tablero


