import React from 'react'
import Carrousel from '../Carousel'
import Title from '../Title'
import SectionInfo from '../SectionInfo'
const colors = ['var(--backGray)', 'white', 'var(--backPurple)', 'var(--backCream)']
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

