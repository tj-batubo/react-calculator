// const element = <h1 title="foo">Hello</h1>

// const element = React.createElement(
//     "h1",
//     {title: "foo"},
//     "Hello"
// )

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
