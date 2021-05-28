import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionInfo from '../SectionInfo'
import infoMaterials from '../../assets/static/images/infoMaterials.png'
import img from '../../assets/static/images/javier-vanegas.png'
const colors = ['var(--backGray)', 'white', 'var(--backPurple)', 'var(--backCream)']
const texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor neque placeat culpa eos accusantium itaque molestiae cupiditate, ipsa non rem sint facilis blanditiis impedit consequuntur nisi. Totam earum distinctio odio!'

const info = [
  {title: 'Javier Vanegas',text:texto,textoBtn:'Ver todos los artistas', img:img},
  {title: 'MATERIALES',text:texto,textoBtn:'Ver todos los materiales', img:infoMaterials}
]

export default function infoExclusive() {
    return (
        <>
            <Title title={'EXCLUSIVE'} backTitle={true} />
            <div className='subtitleInfo' >
                <span>
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </span>
            </div>
            <Carrousel />
            <div style={{ height: '4rem' }} />
            {colors.map(item =>
                <SectionInfo ignoreButton={true} inverso={colors.indexOf(item) % 2 === 0 ? true : false} />
            )}
        </>
    )
}

