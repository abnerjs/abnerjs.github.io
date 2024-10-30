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
  ShoppingAssets,
  QuestionarioJSFAssets,
  ConselhoAssets,
} from 'src/assets/images/works'
import dayjs from 'dayjs'

interface WorkItems {
  title: string
  description: string
  dev: string
  year: Date
  panel: any
  type: 'desktop' | 'mobile' | 'both'
  link: string
}

const works: WorkItems[] = [
  {
    title: 'Portal de Relatórios',
    description: 'Design & Desenvolvimento',
    dev: 'React',
    year: dayjs('2022-12').toDate(),
    panel: PortalRelatoriosAssets,
    type: 'both',
    link: 'https://github.com/abnerjs/PortalRelatorios',
  },
  {
    title: 'iWorkOff',
    description: 'Design & Desenvolvimento',
    dev: 'React',
    year: dayjs('2021-06').toDate(),
    panel: IworkoffAssets,
    type: 'desktop',
    link: 'https://github.com/abnerjs/iworkoff',
  },
  {
    title: 'ViaCep Flutter',
    description: 'Design & Desenvolvimento',
    dev: 'Flutter',
    year: dayjs('2023-10-16').toDate(),
    panel: ViacepAssets,
    type: 'mobile',
    link: 'https://github.com/abnerjs/viacep',
  },
  {
    title: 'Material Design',
    description: 'Design & Desenvolvimento',
    dev: 'Java Swing',
    year: dayjs('2019-10').toDate(),
    panel: SwingmdAssets,
    type: 'desktop',
    link: 'https://github.com/abnerjs/SwingMaterialDesign',
  },
  {
    title: 'Sistema de Ponto',
    description: 'Design & Interação',
    dev: 'Figma',
    year: dayjs('2022-09').toDate(),
    panel: PontoAssets,
    type: 'both',
    link: 'https://www.figma.com/design/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=1942-10750&t=HCxRfooLW5r5Ohwi-1',
  },
  {
    title: 'Tasks Flutter',
    description: 'Design & Desenvolvimento',
    dev: 'Flutter',
    year: dayjs('2023-09-13').toDate(),
    panel: TasksAssets,
    type: 'mobile',
    link: 'https://github.com/abnerjs/bc-flutter-app',
  },
  {
    title: 'Identidade Visual',
    description: 'Design',
    dev: 'Photoshop',
    year: dayjs('2020-01').toDate(),
    panel: IntegraAssets,
    type: 'desktop',
    link: 'https://www.behance.net/gallery/95516641/Integra-party-corona',
  },
  {
    title: 'Insumos',
    description: 'Design & Interação',
    dev: 'Figma',
    year: dayjs('2022-08').toDate(),
    panel: InsumosAssets,
    type: 'mobile',
    link: 'https://www.figma.com/file/EiV65w3Y2q1hC4HoilnL2m/Insumos?node-id=0%3A1&t=RLXFk325dwOK6C88-1',
  },
  {
    title: 'React Course - SNCT',
    description: 'Design & Desenvolvimento',
    dev: 'React',
    year: dayjs('2024-10').toDate(),
    panel: ReactCourseAssets,
    type: 'desktop',
    link: 'https://github.com/abnerjs/reactcourse-sec-2024',
  },
  {
    title: 'AJS Shopping',
    description: 'Desenvolvimento',
    dev: 'React',
    year: dayjs('2023-12').toDate(),
    panel: ShoppingAssets,
    type: 'desktop',
    link: 'https://github.com/abnerjs/shopping-list',
  },
  {
    title: 'Questionário JSF',
    description: 'Design & Desenvolvimento',
    dev: 'Java',
    year: dayjs('2024-06').toDate(),
    panel: QuestionarioJSFAssets,
    type: 'desktop',
    link: 'https://github.com/ProjetosIFSP/questionario-jsf',
  },
  {
    title: 'Conselho deliberativo',
    description: 'Design & Desenvolvimento',
    dev: 'Angular',
    year: dayjs('2024-11').toDate(),
    panel: ConselhoAssets,
    type: 'desktop',
    link: 'https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/2024-2-ConselhoDeliberativo',
  },
]

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
      {works.map((work, index) => (
        <WorkItem
          title={work.title}
          description={work.description}
          dev={work.dev}
          year={dayjs(work.year).format('YYYY')}
          panel={work.panel}
          type={work.type}
          setScale={setScale}
          link={work.link}
        />
      ))}
    </div>
  )
}

export default WorksContainer
