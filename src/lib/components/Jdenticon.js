import React, { useEffect } from 'react'

const Jdenticon = function (props) {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/jdenticon@3.1.1/dist/jdenticon.min.js";
        script.integrity = "sha384-l0/0sn63N3mskDgRYJZA6Mogihu0VY3CusdLMiwpJ9LFPklOARUcOiWEIGGmFELx"
        script.crossOrigin = "amomymous"
        script.async = true;
        document.body.appendChild(script);
    }, [props.seed, props.bg])

    return (
        <div>
            <svg style={{
                width: props.size,
                height: props.size,
                backgroundColor: props.bg,
                borderRadius: '50%'
            }} data-jdenticon-value={props.seed}></svg>
        </div>
    )
}

Jdenticon.defaultProps = {
    size: 60,
    seed: 'React-Avatars',
    bg: 'transparent'
}

export default Jdenticon
