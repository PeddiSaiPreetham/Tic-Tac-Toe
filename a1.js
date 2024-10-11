var player=document.querySelector('#p1');
var c=0;
var res=document.querySelector('#bt');
var squares=document.querySelectorAll('td');
res.addEventListener('click',clear);
var t=-1;
function clear(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent='';
    }
    c=0;
    k=0;
    t=-1;
    player.textContent='Player 1';
}
var k=0;
function change(){
    if(this.textContent === ''){
        if(k === 0){
            this.textContent='X';
            player.textContent='Player 2';
            k=1;
        }
        else{
            this.textContent='O';
            player.textContent='Player 1';
            k=0;
        }
        c++;
        if(c===9){
            player.textContent='Draw!';
            setTimeout(clear,2500);
        }
    }
    for(var i=0;i<7;i+=3){
        if(squares[i].textContent!='' && squares[i].textContent===squares[i+1].textContent && squares[i+1].textContent===squares[i+2].textContent){
            t=i;
            break;
        }
    }
    for(var i=0;i<3;i++){
        if(squares[i].textContent!='' && squares[i].textContent===squares[i+3].textContent && squares[i+3].textContent===squares[i+6].textContent){
            t=i;
            break;
        }
    }
    if(squares[0].textContent!='' && squares[0].textContent===squares[4].textContent && squares[4].textContent===squares[8].textContent){
        t=0;
    }
    if(squares[2].textContent!='' && squares[2].textContent===squares[4].textContent && squares[4].textContent===squares[6].textContent){
        t=2;
    }
    if(t!=-1){
        if(squares[t].textContent==='X'){
            player.textContent='Player 1 Won!';
            setTimeout(clear,2500);
        }
        else{
            player.textContent='Player 2 Won!';
            setTimeout(clear,2500);
        }
    }
}
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',change);
}

