import React, { useState, useEffect } from 'react'

const Pixelcon = function (props) {

    const [content, setContent] = useState([])

    useEffect(() => {
        let temp = []
        for (var i=0; i<7; i++) {
            for (var y=0; y<7; y++) {
                temp.push({
                    x: 30*y,
                    y: 30*i,
                    fill: props.color,
                    opacity: Math.random()
                })
            }
        }
        setContent(temp)
    }, [props.color])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="none" style={{
            borderRadius: '50%',
            width: props.size,
        }}>
            {content.map((b, i) => 
                <rect key={i} x={b.x} y={b.y} width="30" height="30" fill={b.fill} fillOpacity={b.opacity} />
            )}
        </svg>
    )
}

Pixelcon.defaultProps = {
    size: 60,
    color: 'orange'
}

export default Pixelcon
