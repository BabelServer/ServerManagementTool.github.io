


/**
 * @param {string[]} menunames
 * @param {(()=>void)[]) events
*/
const _construct=(menunames,events)=>{
    const menuChildElements=[];
    menunames.forEach((item, index)=>{
        if(item=='separation'){

        }else{
            const element=document.createElement('p');
            element.classList.add('contextmenuelement');
            element.textContent=item;

            element.style.marginLeft='10px';
            element.style.marginRight='10px';
            element.style.marginTop='5px';
            element.style.marginBottom='5px';


            if(events[index])
                element.onclick=events[index];

                
            menuChildElements.push(element);
        }
    })

    return menuChildElements;
}


const _destroyAll=()=>{
    document.querySelectorAll('.contextmenu').forEach(contextmenu=> contextmenu.remove() );
}

/**@param {number[]} location*/
const _show=(menuStructure,location)=>{
    const parentElement=document.createElement('div');
    parentElement.style.zIndex='500';
    parentElement.classList.add('contextmenu');

    parentElement.style.backgroundColor='var(--color-header-deep)';

    parentElement.style.minHeight='50px';
    parentElement.style.minWidth='50px';

    parentElement.style.position='absolute'; 
    parentElement.style.left=location[0]+'px';
    parentElement.style.top=location[1]+'px';


    menuStructure.forEach(menu=> parentElement.appendChild(menu) );


    document.querySelector('html').appendChild(parentElement);
}


const _init=()=>{
    document.styleSheets[document.styleSheets.length-1].insertRule(`
        .contextmenuelement:hover{
            background-color: var(--color-selection);
        }
    `)
}
document.addEventListener('DOMContentLoaded',_init);


const contextMenu={
    construct: _construct,
    show: _show,
    destroyAll: _destroyAll
}