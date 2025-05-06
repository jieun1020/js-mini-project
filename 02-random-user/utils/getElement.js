export default function getElement(selector){
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Please check your selector: ${selector}`);
}