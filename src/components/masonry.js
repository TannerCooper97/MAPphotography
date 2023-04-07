import React from 'react'
import './masonry.scss'

function Masonry(props) {
  const { galleryImages } = props

  function renderImages() {
    return galleryImages.map((image, i) => {
        return(
            <div className="grid" key={i}>
                <img src={image} alt="" />
            </div>
        )
    })
  }

  return (
    <>
            <div className="masonry">{renderImages()}</div>
    </>
  )
}

export default Masonry