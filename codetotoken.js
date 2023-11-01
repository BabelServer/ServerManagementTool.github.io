fetch('https://discord.com/api/oauth2/token',{
    method:'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:`client_id=1169192553019617340&client_secret=XGM2ciGLD6LJS4xa8hCWzVG3qHwm09Cr&grant_type=authorization_code&code=92GG8l5JQPtw2DoBSgmvGj8luOYeDr&redirect_uri=http://p5359062-ipxg23901hodogaya.kanagawa.ocn.ne.jp:44777`
}).then(async res=>{
    console.log(await res.json());
})