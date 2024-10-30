import { Icon } from '@iconify/react'
import { Drawer, Portal } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MagneticButton from '../MagneticButton/MagneticButton'
import Stripe from '../Stripe/Stripe'
import './Navbar.css'
import nameblack from 'src/assets/images/navbar/nameblack.png'
import name from 'src/assets/images/navbar/namewhite.png'
import useTransitionStore from 'src/store/storeConfig'

interface Props {
  black?: boolean
}

const Navbar = (props: Props) => {
  const changeTransition = useTransitionStore((state) => state.change)
  const changeLabel = useTransitionStore((state) => state.changeLabel)
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false)
  const [expand, setExpand] = useState(false)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShow(window.scrollY > 300)
    }
  }

  const handlerGoTo = (url: string, label: string) => {
    if (location.pathname === url) return
    changeTransition(1)
    changeLabel(`• ${label} •`)

    const timer = setTimeout(() => {
      navigate(url)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [show])

  return (
    <div className='navbar'>
      <div className={`title${props.black ? ' black' : ''}`}>
        <MagneticButton
          onClick={() => handlerGoTo('/', 'INÍCIO')}
          variant='text'
        >
          <img
            src={props.black ? nameblack : name}
            className='h-12'
            alt=''
          />
        </MagneticButton>
      </div>

      <div className={`options${props.black ? ' black' : ''}`}>
        <MagneticButton
          onClick={() => handlerGoTo('/works', 'TRABALHOS')}
          disableRipple
          variant='text'
        >
          Trabalhos
        </MagneticButton>
        <MagneticButton
          onClick={() => handlerGoTo('/about', 'SOBRE')}
          disableRipple
          variant='text'
        >
          Sobre
        </MagneticButton>
        <MagneticButton
          onClick={() => handlerGoTo('/contact', 'CONTATO')}
          disableRipple
          variant='text'
        >
          Contato
        </MagneticButton>
      </div>

      <div className={`options mobile${props.black ? ' black' : ''}`}>
        <MagneticButton
          onClick={() => setExpand(!expand)}
          disableRipple
          variant='text'
        >
          Menu
        </MagneticButton>
      </div>

      <Portal>
        <div
          className='btnController'
          style={{
            transform: `scale(${show || expand ? '1' : '0'})`,
          }}
        >
          <MagneticButton
            className={`scrolledNavBtn${expand ? ' active' : ''}`}
            onClick={() => setExpand(!expand)}
          >
            <div className={`nav-icon${expand ? ' active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MagneticButton>
        </div>
        <Drawer
          anchor='right'
          open={expand}
          transitionDuration={500}
          onClose={() => {
            setExpand(false)
          }}
          slotProps={{
            backdrop: {
              style: {
                backdropFilter: 'blur(8px)',
              },
            },
          }}
        >
          <div className='title'>NAVEGAÇÃO</div>
          <Stripe />
          <div className='options'>
            <MagneticButton
              onClick={() => {
                setExpand(false)
                handlerGoTo('/', 'INÍCIO')
              }}
              disableRipple
              variant='text'
            >
              Início
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                setExpand(false)
                handlerGoTo('/works', 'TRABALHOS')
              }}
              disableRipple
              variant='text'
            >
              Trabalhos
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                setExpand(false)
                handlerGoTo('/about', 'SOBRE')
              }}
              disableRipple
              variant='text'
            >
              Sobre
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                setExpand(false)
                handlerGoTo('/contact', 'CONTATO')
              }}
              disableRipple
              variant='text'
            >
              Contato
            </MagneticButton>
          </div>

          <div className='socials'>
            <div className='title'>REDES SOCIAIS</div>
            <div className='links'>
              <Link
                to={{
                  pathname:
                    'https://wa.me/5518997361645?text=Ol%C3%A1%2C%20Abner.%20Venho%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20falar%20contigo!',
                }}
                target='_blank'
              >
                <MagneticButton variant='text'>
                  <Icon icon='akar-icons:whatsapp-fill' />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: 'https://www.instagram.com/eae.abner/' }}
                target='_blank'
              >
                <MagneticButton variant='text'>
                  <Icon icon='mdi:instagram' />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: 'https://gitHub.com/abnerjs' }}
                target='_blank'
              >
                <MagneticButton variant='text'>
                  <Icon icon='mdi:github' />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: 'https://www.linkedin.com/in/abner-j-silva/' }}
                target='_blank'
              >
                <MagneticButton variant='text'>
                  <Icon icon='ri:linkedin-fill' />
                </MagneticButton>
              </Link>
              <Link
                to={{ pathname: 'https://www.behance.net/abnerjsilva' }}
                target='_blank'
              >
                <MagneticButton variant='text'>
                  <Icon icon='ri:behance-fill' />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </Drawer>
      </Portal>
    </div>
  )
}

export default Navbar
