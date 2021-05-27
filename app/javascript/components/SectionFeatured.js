import React from 'react'

import exclusive from '../assets/static/images/exclusive.png'
import pro from '../assets/static/images/pro.png'
import likeAPro from '../assets/static/images/likeapro.png'
const imagesD = [
  { id:1,
    type:'EXCLUSIVE',
    img:exclusive}, 
  { id:2,
    type:'PRO',
    img:pro},
  { id:3,
    type:'LIKE A PRO',
    img:likeAPro},]

const title = "DESTACADOS"
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum erat, consequat fermentum sollicitudin vel, porttitor eu nisi. Vivamus scelerisque ac sapien eu ornare. Sed placerat sed nunc nec ultricies. Curabitur lacinia lorem leo, nec venenatis eros egestas at."

const SectionFeatures = () => {
  const navigate=(section)=>{
    const redirect={
        'EXCLUSIVE':'/infoExclusive',
        'PRO':'/',
        'LIKE A PRO':'/',
    }
    window.location = redirect[section] ? redirect[section]: '/'
}
    return (
      <>
        <div className="featured">
          <h1 className="featured__title" >{title}</h1>
          <p>{text}</p>
            <div className='featured__content'>
              {Array(imagesD.length).fill().map(
                (_, i) =>
                  <div key={imagesD[i].id}className='featured__content-img' onClick={()=>navigate('Usuario')}>
                      <img src={imagesD[i].img}/>
                      <h2 className="label">
                        {imagesD[i].type}
                      </h2>
                  </div>
              )}
            </div>
        </div>
      </>
    )
}

export default SectionFeatures
