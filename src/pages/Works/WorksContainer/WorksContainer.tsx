import { useState } from 'react'
import './works-container.css'
import CustomCursor from 'src/components/CustomCursor/CustomCursor'
import WorkItem from './WorkItem/WorkItem'
import { useLocation, useNavigate } from 'react-router-dom'
import useTransitionStore from 'src/store/storeConfig'
import {
  ReactCourseAssets,
  InsumosAssets,
  TasksAssets,
  IntegraAssets,
  PontoAssets,
  SwingmdAssets,
  ViacepAssets,
  IworkoffAssets,
  PortalRelatoriosAssets,
} from 'src/assets/images/works'

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
        panel={PortalRelatoriosAssets}
        type='both'
        setScale={setScale}
        link='https://github.com/abnerjs/PortalRelatorios'
      />
      <WorkItem
        title='iWorkOff'
        description='Design & Desenvolvimento'
        dev='React'
        year='2021'
        panel={IworkoffAssets}
        type='desktop'
        setScale={setScale}
        link='https://github.com/abnerjs/iworkoff'
      />
      <WorkItem
        title='ViaCep Flutter'
        description='Design & Desenvolvimento'
        dev='Flutter'
        year='2023'
        panel={ViacepAssets}
        type='mobile'
        setScale={setScale}
        link='https://github.com/abnerjs/viacep'
      />
      <WorkItem
        title='Material Design'
        description='Design & Desenvolvimento'
        dev='Java Swing'
        year='2019'
        panel={SwingmdAssets}
        type='desktop'
        setScale={setScale}
        link='https://github.com/abnerjs/SwingMaterialDesign'
      />
      <WorkItem
        title='Sistema de Ponto'
        description='Design & Interação'
        dev='Figma'
        year='2022'
        panel={PontoAssets}
        type='both'
        setScale={setScale}
        link='https://www.figma.com/design/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=1942-10750&t=HCxRfooLW5r5Ohwi-1'
      />
      <WorkItem
        title='Tasks Flutter'
        description='Design & Desenvolvimento'
        dev='Flutter'
        year='2023'
        panel={TasksAssets}
        type='mobile'
        setScale={setScale}
        link='https://github.com/abnerjs/bc-flutter-app'
      />
      <WorkItem
        title='Identidade Visual'
        description='Design'
        dev='Photoshop'
        year='2020'
        panel={IntegraAssets}
        type='desktop'
        setScale={setScale}
        link='https://www.behance.net/gallery/95516641/Integra-party-corona'
      />
      <WorkItem
        title='Insumos'
        description='Design & Interação'
        dev='Figma'
        year='2022'
        panel={InsumosAssets}
        type='mobile'
        setScale={setScale}
        link='https://www.figma.com/file/EiV65w3Y2q1hC4HoilnL2m/Insumos?node-id=0%3A1&t=RLXFk325dwOK6C88-1'
      />
      <WorkItem
        title='React Course - SNCT'
        description='Design & Desenvolvimento'
        dev='React'
        year='2024'
        panel={ReactCourseAssets}
        type='desktop'
        setScale={setScale}
        link='https://github.com/abnerjs/reactcourse-sec-2024'
      />
    </div>
  )
}

export default WorksContainer
