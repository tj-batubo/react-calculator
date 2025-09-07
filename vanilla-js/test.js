// const element = <h1 title="foo">Hello</h1>

// const element = React.createElement(
//     "h1",
//     {title: "foo"},
//     "Hello"
// )

/* The code snippet is creating a root element for the HTML document. It defines an object
`rootelement` with a type of "div" and props containing an id of "root". Then, it creates a new HTML
element using `document.createElement` with the type specified in `rootelement.type` (which is
"div") and sets its id to the value specified in `rootelement.props.id` (which is "root"). This root
element will serve as the container for other elements that will be added to the document. */
const rootelement = {
    type: "div",
    props: {
        id: "root"
    }
}

const rootnode = document.createElement(rootelement.type)
rootnode["id"] = rootelement.props.id


const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hazzle's Nuts"
    }
}
// const container = document.getElementById('root')

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
// container.appendChild.node
rootnode.appendChild(node)

document.body.appendChild(rootnode)
console.log(element)
