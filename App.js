import React from 'react'
import ReactDOM from 'react-dom/client'

//By using  simple Javascript render something in root element.
    // const heading= document.createElement('h1')
    // heading.innerHTML= 'Heading1'
    // const root= document.getElementById('root')
    // root.appendChild(heading)

//By using React render something in root element
const heading1= React.createElement('h1', {id:'mytitle'}, 'Heading1') 


//React element( object) without JSX
const heading2= React.createElement('h1', {id:'mytitle'}, 'Heading2') 

// React element with JSX
const heading3=<h1> Welcome</h1>

// REact component(function)
const HomeComponent=()=>{  
return(
    <div>
        {console.log("hello")}
      {/*to render React element add it in curly braces or  any js code should be in  curly  braces*/}
    {heading3} 
    <h2>Home Component</h2>
    </div>
)
}
const root= ReactDOM.createRoot(document.getElementById('root'))

/* We can call react  element or react component  as function also like {heading3()} or HomeComponent() 
root.render(HomeComponent()) */

root.render(<HomeComponent/>)
