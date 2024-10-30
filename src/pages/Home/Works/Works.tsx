import { useRef, useState } from 'react'
import './works.css'
import { Icon } from '@iconify/react'
import { Parallax } from 'react-scroll-parallax'
import MagneticButton from 'src/components/MagneticButton/MagneticButton'
import CustomCursor from 'src/components/CustomCursor/CustomCursor'
import { useNavigate } from 'react-router-dom'
import useTransitionStore from 'src/store/storeConfig'
import MenuContext from 'src/components/MenuContext/MenuContext'
import {
  InsumosAssets,
  IntegraAssets,
  IworkoffAssets,
  PontoAssets,
  PortalRelatoriosAssets,
  SwingmdAssets,
  TasksAssets,
  ViacepAssets,
} from 'src/assets/images/works'
import ImageStack from 'src/components/ImageStack/ImageStack'

interface IHoverPanel {
  bgColor: string
  images: any[]
  type: 'desktop' | 'mobile' | 'both'
  link: string
  title: string
  tool: string
  dev: string
}

const jobs: IHoverPanel[] = [
  {
    bgColor: '#C3CCE1',
    images: PortalRelatoriosAssets,
    type: 'both',
    link: 'https://github.com/abnerjs/PortalRelatorios',
    title: 'Portal de Relatórios',
    tool: 'React + .NET',
    dev: 'Design & Desenvolvimento',
  },
  {
    bgColor: '#D4B492',
    images: SwingmdAssets,
    type: 'desktop',
    link: 'https://github.com/abnerjs/SwingMaterialDesign',
    title: 'Material Design',
    tool: 'Java Swing',
    dev: 'Desenvolvimento de Componentes',
  },
  {
    bgColor: '#D4CAC6',
    images: PontoAssets,
    type: 'both',
    link: 'https://www.figma.com/design/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=1942-10750&t=5vr7MhWFxPzpHoHU-1',
    title: 'Sistema de Ponto',
    tool: 'Figma',
    dev: 'Design & Interação',
  },
  {
    bgColor: '#57A6A2',
    images: IntegraAssets,
    type: 'desktop',
    link: 'https://www.behance.net/gallery/95516641/Integra-party-corona',
    title: 'Identidade Visual',
    tool: 'Photoshop',
    dev: 'Design',
  },
]

const HoverPanel = (props: any) => {
  return (
    <div
      className='hover-panel'
      style={{
        width: 500,
        height: 500,
        overflow: 'hidden',
      }}
    >
      <MagneticButton className='access'>Acessar</MagneticButton>
      <div
        className='panel'
        style={{
          width: '100%',
          height: '400%',
          transform: `translateY(-${25 * props.hoverIndex}%)`,
          transition: 'all ease 0.4s',
        }}
      >
        {jobs.map((job) => (
          <div
            className='subPanel'
            style={{
              width: '100%',
              height: '25%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: job.bgColor,
            }}
          >
            <ImageStack
              images={job.images}
              type={job.type}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const WorksContent = (props: any) => {
  const elem = useRef<HTMLDivElement>(null)
  const elem1 = useRef<HTMLDivElement>(null)
  const elem2 = useRef<HTMLDivElement>(null)
  const elem3 = useRef<HTMLDivElement>(null)

  const elems = [elem, elem1, elem2, elem3]

  return (
    <>
      {jobs.map((job, index) => (
        <>
          <div
            ref={elems[index]}
            className='content'
            onMouseEnter={() => {
              props.setHoverIndex(index)
              props.setScale(1)
            }}
            onMouseLeave={() => props.setScale(0)}
            onClick={() => {
              window.open(job.link)
            }}
            onMouseDown={(e) => {
              if (e.button === 1) {
                window.open(job.link, 'blank')
              }
            }}
          >
            <MenuContext
              targetId={elems[index].current!}
              link={job.link}
            />
            <div className='text'>{job.title}</div>
            <div className='info'>
              <div className='type'>{job.tool}</div>
              <div className='dev'>{job.dev}</div>
            </div>
            <div className='container'></div>
          </div>
          <hr className={index > 1 ? 'mobile' : ''} />
        </>
      ))}
    </>
  )
}

const Works = () => {
  const changeTransition = useTransitionStore((state) => state.change)
  const changeLabel = useTransitionStore((state) => state.changeLabel)
  const navigate = useNavigate()
  const [scale, setScale] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(0)

  const handlerGoToWorks = () => {
    changeTransition(1)
    changeLabel('• TRABALHOS •')

    const timer = setTimeout(() => {
      navigate('/works')
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }

  return (
    <>
      <div className='works'>
        <div className='title'>Principais trabalhos</div>
        <hr />

        <CustomCursor scale={scale}>
          <HoverPanel hoverIndex={hoverIndex} />
        </CustomCursor>

        <WorksContent
          setScale={setScale}
          setHoverIndex={setHoverIndex}
        />

        <div className='more-work'>
          <MagneticButton
            className='moreWork'
            variant='outlined'
            endIcon={<Icon icon='fluent:arrow-right-48-regular' />}
            onClick={handlerGoToWorks}
          >
            Mais trabalhos
          </MagneticButton>
        </div>
      </div>

      <div className='works-grid'>
        <Parallax translateX={['0%', '-20%']}>
          <div className='row'>
            <div className='work'></div>
            <div className='work'>
              <ImageStack
                images={InsumosAssets}
                type='mobile'
              />
            </div>
            <div className='work'>
              <ImageStack
                images={ViacepAssets}
                type='mobile'
              />
            </div>
            <div className='work'></div>
          </div>
        </Parallax>
        <Parallax translateX={['0%', '20%']}>
          <div className='row reverse'>
            <div className='work'></div>
            <div className='work'></div>
            <div className='work'>
              <ImageStack
                images={IworkoffAssets}
                type='desktop'
              />
            </div>
            <div className='work'>
              <ImageStack
                images={TasksAssets}
                type='mobile'
              />
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Works
