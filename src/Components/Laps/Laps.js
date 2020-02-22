import React from 'react'

const Laps = (props) => {


    return (
        <div>
            <ul className="list-group mt-5">
                {
                    props.laps.map((lap, index) =>{
                        return (
                            <li key={index} className="list-group-item">
                                <h3>
                                    <span className="text-dark">Minutue: </span>
                                    <span className="text-danger">{lap.min} </span>
                                    <span className="text-dark"> Second: </span>
                                    <span className="text-danger">{lap.sec}</span>                                
                                    <span className="text-dark"> Mili: </span>
                                    <span className="text-danger"> {lap.mili}</span>
                                </h3>
                            </li>
                        )
                    })
                }
            </ul>

        </div>    

    )

}
export default Laps