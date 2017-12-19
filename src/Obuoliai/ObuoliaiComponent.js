import React from 'react'
import ObuolysComponent from './ObuolysComponent'

var ObuoliaiComponent = (props) => {
    var visiObuoliai = props.visiObuoliai;
    if (visiObuoliai.length === 0) {
        return <div>Cia kazkada bus visi obuoliai, kai sulauksim ju is serverio</div>
    } else {
        var obuoliuSpanai = visiObuoliai.map((obuolys) => {
            return <ObuolysComponent key={obuolys.rusis} vienasObuolys={obuolys} />
        })
        return <div>{obuoliuSpanai}</div>
    }
}

export default ObuoliaiComponent;