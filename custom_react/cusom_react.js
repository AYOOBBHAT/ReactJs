
function customRender(reactElement,container){

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
    
    domElement.setAttribute('href',reactElement.props.href)

}

const reactElement={
    typr:'a',
    props:{
        href:'http://www.baidu.com',
        target:'_blank'
    },
    children:'Click me here '
}

const mainContainer =document.querySelector('root');
