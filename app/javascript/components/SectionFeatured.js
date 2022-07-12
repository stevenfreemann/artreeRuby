import React from 'react'

import exclusive from '../assets/static/images/exclusive.png'
import pro from '../assets/static/images/pro.png'
const imagesD = [
  { id:1,
    name:'EXCLUSIVE',
    img:exclusive}, 
  { id:3,
    name:'PRO',
    img:pro},
  // { id:3,
  //   type:'LIKE A PRO',
  //   img:likeAPro},
]


const SectionFeatures = ({texts, lines}) => {

  console.log('lines', lines)
  console.log("texts", texts)
  const text = texts[0]

  const navigate=(id)=> {
    window.location = "/line/" + id
  }
    return (
      <div className="featured">
        <h1 className="featured__title" >{text?.name}</h1>
        <p>{text?.content}</p>
          <div className='featured__content'>
            {lines.map((line) =>
                <div className='featured__content-img' onClick={()=>navigate(line?.id)} key={"line"+line?.id}>
                    <img src={line?.image_index?.url} alt={line?.name}/>
                    <h2 className="label">
                      {line?.name}
                    </h2>
                </div>
            )}
          </div>
      </div>
    )
}

export default SectionFeatures
