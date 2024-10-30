import React, { useRef } from 'react'
import './work-item.css'
import Stripe from 'src/components/Stripe/Stripe'
import MenuContext from 'src/components/MenuContext/MenuContext'
import ImageStack from 'src/components/ImageStack/ImageStack'

interface Props {
  title: string
  description: string
  dev: string
  year: string
  setScale: Function
  type: 'desktop' | 'mobile' | 'both'
  panel?: any
  link?: string
  link2?: string
}

const WorkItem = (props: Props) => {
  const el = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={el}
      className='work-item'
      onMouseEnter={() => props.setScale(1)}
      onMouseOver={() => props.setScale(1)}
      onMouseLeave={() => props.setScale(0)}
      onClick={() => {
        props.link && window.open(props.link, '_blank')
        props.link2 && window.open(props.link2, '_blank')
      }}
      onMouseDown={(e) => {
        if (e.button === 1) {
          props.link && window.open(props.link, '_blank')
          props.link2 && window.open(props.link2, '_blank')
        }
      }}
    >
      <MenuContext
        targetId={el.current!}
        link={props.link}
        link2={props.link2}
      />
      <div className='panel'>
        <ImageStack
          images={props.panel}
          type={props.type}
        />
      </div>
      <div className='title'>{props.title}</div>
      <Stripe margin={20} />
      <div className='description'>
        <div>{props.description}</div>
        <div>
          {props.dev} • <span>{props.year}</span>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
