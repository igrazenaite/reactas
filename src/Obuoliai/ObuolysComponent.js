import React from 'react'

const ObuolysComponent = (props) => {
    const obuolys = props.vienasObuolys;
    return <span>Obuolys: {obuolys.rusis} ir {obuolys.spalva}<br/></span>
}

export default ObuolysComponent;