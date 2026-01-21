
import BusinessAutomation from "./BusinessAutomation"
import Clients from "./Clients"
import LiveUpdate from "./LiveUpdate"
import SwirlyArrow from "./SwirlyArrow"
import VideoBrowser from "./VideoBrowser"

export default function RightSection() {
    return ( 
    <div className="relative w-full max-w-[800px] mx-auto">
    <SwirlyArrow/>
    <VideoBrowser />     
    <BusinessAutomation />
    <Clients />
    <LiveUpdate/>  
    </div>
  )
}
