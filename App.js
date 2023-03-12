//By using  simple Javascript render something in root element.
    // const heading= document.createElement('h1')
    // heading.innerHTML= 'Heading1'
    // const root= document.getElementById('root')
    // root.appendChild(heading)

//By using React render something in root element
const heading= React.createElement('h1', {id:'mytitle'}, 'Heading2')
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)