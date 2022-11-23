import { useState, useEffect, FunctionComponent } from "react"
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavItem:FunctionComponent<{
  activeItem:string,
  setActiveItem:Function,
  name:string,
  route:string 
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
      activeItem !== name ? (
        <Link href={route}>
          <a>
            <span onClick={() => setActiveItem(name)} className="hover:text-blue-600">{name}</span> 
          </a>
        </Link>
      ) : null 
  )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  const {pathname} = useRouter()

  useEffect(() => {
    if(pathname === '/') setActiveItem('A propos')
    if(pathname === '/parcours') setActiveItem('Parcours')
    if(pathname === '/projects') setActiveItem('Projets')
    if(pathname === '/resume') setActiveItem('Compétences')
    if(pathname === '/contact') setActiveItem('Contact')
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-900 border-b-4 border-blue-500 md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="A propos" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Parcours" route="/parcours" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projets" route="/projects" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Compétences" route="/resume" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Contact" route="/contact" />
      </div>
    </div>
  )
}

export default Navbar
