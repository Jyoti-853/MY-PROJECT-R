import React , {useState} from 'react' ;
const Section=({title, description, isVisible, setIsVisible})=>{
    
    return(
        <div className='section'>
         <h3>{title}</h3>
         {isVisible && <p>{description}</p>}

        {!isVisible && <button type='button' onClick={()=>setIsVisible(true)}> Show </button>}
        {isVisible && <button type='button' onClick={()=>setIsVisible(false)}> Hide </button>}
        </div>
    )

}

const Instamart=()=>{
    const [visibleSection, setVisibleSection] =useState("")
    return(
        <>
        <Section title={'About Instamart'} description={"About Section detaill.........."}
        isVisible= {visibleSection==='about'} setIsVisible={(visible)=> visible ? setVisibleSection('about'):setVisibleSection()}></Section>
        <Section title={'Team Instamart'} description={"About team ......"}  isVisible= {visibleSection==='team'} setIsVisible={(visible)=> visible ? setVisibleSection('team'):setVisibleSection() }></Section>
        <Section title={'Careers'} description={"About carrers.........."}  isVisible= {visibleSection==='career'} setIsVisible={(visible)=> visible ? setVisibleSection('career'):setVisibleSection()}></Section>
        </>
    )
}
export default Instamart