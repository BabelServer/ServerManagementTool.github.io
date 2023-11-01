


const _serverinfo=()=>{
    const displayElement=document.createElement('div');
    displayElement.classList.add('maindisplay');
    
    displayElement.textContent='こんにちは, 私はコナー, サイバーライフのアンドロイドです。';

    
    const html=document.querySelector('html');

    html.appendChild(displayElement);
}