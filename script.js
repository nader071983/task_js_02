var btn=document.getElementById('btn')
btn.onclick=random
function random( ){
    var x=Math.round(Math.random() * 10)
    if(x==1){document.getElementById('wsd').innerHTML='Be yourself everyone else is already taken <br/> Oscar Wilde'}
else if (x==2){document.getElementById('wsd').innerHTML='So many books, so little time <br/> Frank Zappa'}
else if (x==3){document.getElementById('wsd').innerHTML='A room without books is like a body without a soul <br/> Marcus Tullius '}
else if (x==4){document.getElementById('wsd').innerHTML='You only live once, but if you do it right, once is enough <br/>Mae West'}
else if (x==5){document.getElementById('wsd').innerHTML='Be the change that you wish to see in the world <br/> Mahatma Gandh'}
else if (x==6){document.getElementById('wsd').innerHTML='Be yourself everyone else is already taken <br/> Oscar Wilde'}
else if (x==7){document.getElementById('wsd').innerHTML='Good friends, good books, and a sleepy conscience: this is the ideal life <br/> Mark Twain'}
else if (x==8){document.getElementById('wsd').innerHTML='If you tell the truth, you dont have to remember anything <br/> Mark Twain'}
else if (x==9){document.getElementById('wsd').innerHTML='A friend is someone who knows all about you and still loves you <br/> Elbert Hubbard'}
else if (x==10){document.getElementById('wsd').innerHTML='Always forgive your enemies; nothing annoys them so much <br/> Oscar Wilde'}
}

