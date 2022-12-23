import React,{useState} from "react"
import "./ChangePlan.css"
import PlanContainer from "./PlanContainer"






function ChangePlan() {
    const [plans,setPlans] = useState([{id:1,title:"Basic",description:"Good video quality in HD (720p). Watch on any phone, tablet, computer or TV.",price:"MAD65/month"},
        {id:2,title:"Basic",description:"Good video quality in HD (720p). Watch on any phone, tablet, computer or TV.",price:"MAD65/month"},
    {id:3,title:"Basic",description:"Good video quality in HD (720p). Watch on any phone, tablet, computer or TV.",price:"MAD65/month"}])

    const [curPlan,setCurPlan]=useState(2)
    const [selectedPlan,setSelectedPlan]=useState(curPlan)

    const plansElem = plans.map((plan,index)=>{
        return <PlanContainer key={plan.id} planId={plan.id} title={plan.title} description={plan.description} price={plan.price} isActive={plan.id === selectedPlan} setSelectedPlan={setSelectedPlan}/> 
    })
    return (
       <div className="changePlan">
            <div className="changePlan__plansContainer">
                {plansElem}
            </div>
           <button className={`changePlan__continueBtn ${curPlan === selectedPlan ? "changePlan__continueBtn--inactive" : ""}`}>continue</button> 
       </div> 
    ) 
}
export default ChangePlan;
