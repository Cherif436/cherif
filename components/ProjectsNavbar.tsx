import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{ value: Category | "Tout"; handlerFilterCategory: Function; active: string }> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-yellow-500"
  if (active === value) {
    className += " text-red-500"
  }
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>{value}</li>
  )
}


const ProjectsNavbar: FunctionComponent<{ handlerFilterCategory: Function, active: string }> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-5 overflow-x-auto list-none">
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="Tout" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="php" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="react" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="node" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="express" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="mongo" {...props} /></button>
      <button className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"><NavItem value="next" {...props} /></button>
    </div>
  )
}

export default ProjectsNavbar
