import React, { useState , useEffect } from 'react'

const Initials = function (props) {

    const [name, setName] = useState(props.name)

    useEffect(() => {
        let initials = ''
        if (props.name.includes(' ')) {
            let temp = props.name.split(' ')
            initials = temp[0].substring(0, 1) + temp[1].substring(0, 1)
        } else {
            initials = props.name.substring(0, 2)
        }
        
        setName(initials)
    }, [props.name])

    return (
        <div style={{
            color: props.color,
            backgroundColor: props.bg,
            width: props.size + 'px',
            height: props.size + 'px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: props.size + 'px',
            fontFamily: props.font,
            fontSize: 'calc(70px / 3)',
            fontWeight: 'bolder'
        }}>
            <p style={{margin: 0}}>{name}</p>
        </div>
    )
}

Initials.defaultProps = {
    name: 'RA',
    color: 'white',
    bg: '#3240a8',
    size: 60,
    font: 'Helvetica'
}

export default Initials
