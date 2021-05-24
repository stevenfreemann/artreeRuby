import React from 'react'
import Title from './Title'

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
    return (
      <>
        <Title title={title} text={text}/>
        <div className="featured">
            <div className='featured__content'>
              {Array(imagesD.length).fill().map(
                (_, i) =>
                  <div key={imagesD[i].id}className='content__img'>
                      <img src={imagesD[i].img}/>
                    <div className="label">
                      <h2>
                        {imagesD[i].type}
                      </h2>
                    </div>
                  </div>
              )}
            </div>
        </div>
      </>
    )
}

export default SectionFeatures
