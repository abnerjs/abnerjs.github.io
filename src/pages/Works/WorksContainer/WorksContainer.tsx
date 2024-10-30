import { useState } from 'react'
import './works-container.css'
import CustomCursor from 'src/components/CustomCursor/CustomCursor'
import WorkItem from './WorkItem/WorkItem'
import { useLocation, useNavigate } from 'react-router-dom'
import integra from 'src/assets/images/works/integra30.png'
import insumos from 'src/assets/images/works/insumos.png'
import ponto from 'src/assets/images/works/ponto.png'
import swingmd from 'src/assets/images/works/swingmd.gif'
import iworkoff from 'src/assets/images/works/iworkoff.gif'
import bcTasksDio from 'src/assets/images/works/bcTasksDio.gif'
import portalRelat from 'src/assets/images/works/portal.png'
import viacepflutter from 'src/assets/images/works/viacepflutter.png'
import useTransitionStore from 'src/store/storeConfig'

const WorksContainer = () => {
  const changeTransition = useTransitionStore((state) => state.change)
  const changeLabel = useTransitionStore((state) => state.changeLabel)
  const [scale, setScale] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()

  // use in future: page for each work
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  return (
    <div className='works-container'>
      <CustomCursor scale={scale}>
        <div className='btn-hover-view'>
          <div className='text'>Ver</div>
        </div>
      </CustomCursor>
      <WorkItem
        title='Portal de Relatórios'
        description='Design & Desenvolvimento'
        dev='React'
        year='2022'
        panel={portalRelat}
        setScale={setScale}
        link='https://github.com/abnerjs/PortalRelatorios'
        link2='https://www.figma.com/file/3AVOpouhDNUlUjsqSJcFdv/Portal-de-Relat%C3%B3rios?node-id=0%3A1&t=tLE4Z9AefrNkrbHo-1'
      />
      <WorkItem
        title='iWorkOff'
        description='Design & Desenvolvimento'
        dev='React'
        year='2021'
        panel={iworkoff}
        setScale={setScale}
        link='https://github.com/abnerjs/iworkoff'
        link2='https://www.figma.com/file/2TfY45k5qHg3uvEfy3P7dQ/iWorkOff?node-id=0%3A1&t=vnb6fSMXurPUZAQJ-1'
      />
      <WorkItem
        title='ViaCep Flutter'
        description='Design & Desenvolvimento'
        dev='Flutter'
        year='2023'
        panel={viacepflutter}
        setScale={setScale}
        link='https://github.com/abnerjs/viacep'
      />
      <WorkItem
        title='Material Design'
        description='Design & Desenvolvimento'
        dev='Java Swing'
        year='2019'
        panel={swingmd}
        setScale={setScale}
        link='https://github.com/abnerjs/SwingMaterialDesign'
      />
      <WorkItem
        title='Sistema de Ponto'
        description='Design & Interação'
        dev='Figma'
        year='2022'
        panel={ponto}
        setScale={setScale}
        link='https://www.figma.com/file/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=0%3A1&t=DfzvDMfDG6r6y8yf-1'
      />
      <WorkItem
        title='Tasks Flutter'
        description='Design & Desenvolvimento'
        dev='Flutter'
        year='2023'
        panel={bcTasksDio}
        setScale={setScale}
        link='https://github.com/abnerjs/bc-flutter-app'
      />
      <WorkItem
        title='Identidade Visual'
        description='Design'
        dev='Photoshop'
        year='2020'
        panel={integra}
        setScale={setScale}
        link='https://www.behance.net/gallery/95516641/Integra-party-corona'
      />
      <WorkItem
        title='Insumos'
        description='Design & Interação'
        dev='Figma'
        year='2022'
        panel={insumos}
        setScale={setScale}
        link='https://www.figma.com/file/EiV65w3Y2q1hC4HoilnL2m/Insumos?node-id=0%3A1&t=RLXFk325dwOK6C88-1'
      />
    </div>
  )
}

export default WorksContainer
