import { useRef, useState } from 'react'
import './works.css'
import { Icon } from '@iconify/react'
import { Parallax } from 'react-scroll-parallax'
import MagneticButton from 'src/components/MagneticButton/MagneticButton'
import CustomCursor from 'src/components/CustomCursor/CustomCursor'
import { useNavigate } from 'react-router-dom'
import integra from 'src/assets/images/works/integra30.png'
import ponto from 'src/assets/images/works/ponto.png'
import swingmd from 'src/assets/images/works/swingmd.gif'
import insumos from 'src/assets/images/works/insumos.png'
import iworkoff from 'src/assets/images/works/iworkoff.gif'
import viacepflutter from 'src/assets/images/works/viacepflutter.png'
import portalRelat from 'src/assets/images/works/portal.png'
import bcTasksDio from 'src/assets/images/works/bcTasksDio.gif'
import useTransitionStore from 'src/store/storeConfig'
import MenuContext from 'src/components/MenuContext/MenuContext'

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
        <div
          className='subPanel'
          style={{
            width: '100%',
            height: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C3CCE1',
          }}
        >
          <img
            src={portalRelat}
            style={{
              width: '80%',
            }}
            alt='Portal de Relatórios'
          />
        </div>
        <div
          className='subPanel'
          style={{
            width: '100%',
            height: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D4B492',
          }}
        >
          <img
            src={swingmd}
            style={{
              width: '80%',
            }}
            alt='Java Swing Material Design'
          />
        </div>
        <div
          className='subPanel'
          style={{
            width: '100%',
            height: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D4CAC6',
          }}
        >
          <img
            src={ponto}
            style={{
              width: '80%',
            }}
            alt='Plataforma de Ponto'
          />
        </div>
        <div
          className='subPanel'
          style={{
            width: '100%',
            height: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#57A6A2',
          }}
        >
          <img
            src={integra}
            style={{
              width: '80%',
            }}
            alt='Integra'
          />
        </div>
      </div>
    </div>
  )
}

const WorksContent = (props: any) => {
  const elemPortalRelat = useRef<HTMLDivElement>(null)
  const elemSwingMaterial = useRef<HTMLDivElement>(null)
  const elemPonto = useRef<HTMLDivElement>(null)
  const elemParty = useRef<HTMLDivElement>(null)
  return (
    <>
      <div
        ref={elemPortalRelat}
        className='content'
        onMouseEnter={() => {
          props.setHoverIndex(0)
          props.setScale(1)
        }}
        onMouseLeave={() => props.setScale(0)}
        onClick={() => {
          window.open('https://github.com/abnerjs/PortalRelatorios')
          window.open(
            'https://www.figma.com/file/3AVOpouhDNUlUjsqSJcFdv/Portal-de-Relat%C3%B3rios?node-id=0%3A1&t=tLE4Z9AefrNkrbHo-1',
            'blank'
          )
        }}
        onMouseDown={(e) => {
          if (e.button === 1) {
            window.open('https://github.com/abnerjs/PortalRelatorios', 'blank')
            window.open(
              'https://www.figma.com/file/3AVOpouhDNUlUjsqSJcFdv/Portal-de-Relat%C3%B3rios?node-id=0%3A1&t=tLE4Z9AefrNkrbHo-1',
              'blank'
            )
          }
        }}
      >
        <MenuContext
          targetId={elemPortalRelat.current!}
          link={'https://github.com/abnerjs/PortalRelatorios'}
          link2={
            'https://www.figma.com/file/3AVOpouhDNUlUjsqSJcFdv/Portal-de-Relat%C3%B3rios?node-id=0%3A1&t=tLE4Z9AefrNkrbHo-1'
          }
        />
        <div className='text'>Portal de Relatórios</div>
        <div className='info'>
          <div className='type'>React + .NET</div>
          <div className='dev'>Design & Desenvolvimento</div>
        </div>
        <div className='container'></div>
      </div>

      <hr />

      <div
        ref={elemSwingMaterial}
        className='content'
        onMouseEnter={() => {
          props.setHoverIndex(1)
          props.setScale(1)
        }}
        onMouseLeave={() => props.setScale(0)}
        onClick={() =>
          window.open('https://github.com/abnerjs/SwingMaterialDesign')
        }
        onMouseDown={(e) => {
          if (e.button === 1) {
            window.open(
              'https://github.com/abnerjs/SwingMaterialDesign',
              'blank'
            )
          }
        }}
      >
        <MenuContext
          targetId={elemSwingMaterial.current!}
          link={'https://github.com/abnerjs/SwingMaterialDesign'}
        />
        <div className='text'>Material Design</div>
        <div className='info'>
          <div className='type'>Java Swing</div>
          <div className='dev'>Desenvolvimento de Componentes</div>
        </div>
      </div>

      <hr />

      <div
        ref={elemPonto}
        className='content mobile'
        onMouseEnter={() => {
          props.setHoverIndex(2)
          props.setScale(1)
        }}
        onMouseLeave={() => props.setScale(0)}
        onClick={() => {
          window.open(
            'https://www.figma.com/file/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=0%3A1&t=DfzvDMfDG6r6y8yf-1'
          )
          window.open(
            'https://www.figma.com/file/PUN3JlrbyJfbcJg6Pll1FZ/Plataforma-de-Ponto?node-id=0%3A1&t=dBuqpKSyFkH2JWJY-1',
            'blank'
          )
        }}
        onMouseDown={(e) => {
          if (e.button === 1) {
            window.open(
              'https://www.figma.com/file/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=0%3A1&t=DfzvDMfDG6r6y8yf-1',
              'blank'
            )
            window.open(
              'https://www.figma.com/file/PUN3JlrbyJfbcJg6Pll1FZ/Plataforma-de-Ponto?node-id=0%3A1&t=dBuqpKSyFkH2JWJY-1',
              'blank'
            )
          }
        }}
      >
        <MenuContext
          targetId={elemPonto.current!}
          link={
            'https://www.figma.com/file/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=0%3A1&t=DfzvDMfDG6r6y8yf-1'
          }
          link2={
            'https://www.figma.com/file/PUN3JlrbyJfbcJg6Pll1FZ/Plataforma-de-Ponto?node-id=0%3A1&t=dBuqpKSyFkH2JWJY-1'
          }
        />
        <div className='text'>Sistema de Ponto</div>
        <div className='info'>
          <div className='type'>Figma</div>
          <div className='dev'>Design & Interação</div>
        </div>
      </div>

      <hr className='mobile' />

      <div
        ref={elemParty}
        className='content mobile'
        onMouseEnter={() => {
          props.setHoverIndex(3)
          props.setScale(1)
        }}
        onMouseLeave={() => props.setScale(0)}
        onClick={() =>
          window.open(
            'https://www.behance.net/gallery/95516641/Integra-party-corona'
          )
        }
        onMouseDown={(e) => {
          if (e.button === 1) {
            window.open(
              'https://www.behance.net/gallery/95516641/Integra-party-corona',
              'blank'
            )
          }
        }}
      >
        <MenuContext
          targetId={elemParty.current!}
          link={'https://www.behance.net/gallery/95516641/Integra-party-corona'}
        />
        <div className='text'>Identidade Visual</div>
        <div className='info'>
          <div className='type'>Photoshop</div>
          <div className='dev'>Design</div>
        </div>
      </div>

      <hr className='mobile' />
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

        <WorksContent setScale={setScale} setHoverIndex={setHoverIndex} />

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
              <img src={insumos} alt='Insumos' />
            </div>
            <div className='work'>
              <img src={viacepflutter} alt='ViaCEP Flutter' />
            </div>
            <div className='work'></div>
          </div>
        </Parallax>
        <Parallax translateX={['0%', '20%']}>
          <div className='row reverse'>
            <div className='work'></div>
            <div className='work'></div>
            <div className='work'>
              <img src={iworkoff} alt='iWorkOff' />
            </div>
            <div className='work'>
              <img src={bcTasksDio} alt='BCTasksDio' />
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Works
