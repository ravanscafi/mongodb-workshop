import React from 'react'

const FullPageImage = ({src, alt}) => (
  <div style={{overflowY: 'scroll', overflowX: 'hidden', minWidth: '100vw', minHeight: '100vh', position: 'relative'}}>
    <img src={src} alt={alt} style={{width: '100vw', height: 'auto', position: 'absolute', top: 0, left: 0}}/>
  </div>
)

export default FullPageImage
