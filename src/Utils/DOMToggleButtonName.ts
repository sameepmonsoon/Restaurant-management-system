
export  function DOMToggleButtonName(name:string) {
    const submitButton=document.querySelectorAll('[type=submit]')[0]
    // @ts-ignore
    return submitButton.innerHTML=name
}
