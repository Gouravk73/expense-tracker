var form=document.getElementById("addForm");
var itemList = document.getElementById('items');

//console.log(form);
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);

function addItem(e){
    e.preventDefault();
    //get input
    var newItem= document.getElementById('item').value;
    var newItem2= document.getElementById('item2').value;
    var newItem3= document.getElementById('item3');
    var opt;
        for ( var i = 0, len = newItem3.options.length; i < len; i++ ) {
            opt = newItem3.options[i];
            if ( opt.selected === true ) break;}
    
    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem+" - "+newItem2+" - "+opt.innerHTML));
    
    
    
    
    var del= document.createElement('button');
    del.className="btn";
    del.value="Delete";
    del.innerHTML="Delete"; //del.appendChild(document.createTextNode('X));
    
    
    
    var edi= document.createElement('button');
    edi.className="bt-edit";
    edi.value="Edit";
    edi.innerHTML="Edit"; 
    li.appendChild(edi);
    li.appendChild(del);

    //console.log(li);
   itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('btn')){
        var li =e.target.parentElement;
        itemList.removeChild(li);
    }
  }


function editItem(e){
    if(e.target.classList.contains('bt-edit')){
        var li =e.target.parentElement;
        var x=li.innerHTML;
        var a="";
        var b="";
        var c="";
        var cnt=0;
        for(var i=0;i<x.length;i++){
            console.log(x[i]);
            if(x[i]=='<'){ break;}
            else if(x[i]=='-'){
                cnt=cnt + 1;
            }
            else if( cnt==0){
                a=a+x[i];
                
            }
            else if( cnt==1){
                b=b+x[i];
            }
            else if( cnt==2){
                c=c+x[i];
            }
        }
        document.getElementById('item').value=a;
        document.getElementById('item2').value=b;
        itemList.removeChild(li);
    }
}