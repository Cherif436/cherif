import { FunctionComponent } from "react"
import { IService } from "../type"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title, school, ville, date, img}}) => {
  const createMarkup = () => {
    return { 
      __html: about
     }
  }

  return (
    <div className="flex p-2 space-x-4">
      <img src={img} className="clearfix p-1 border" height={128} width={128}></img>
      <div>
        <h4 className="font-bold">{title}</h4>
        <h4 className="font-bold">{school}, {ville} ({date})</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
