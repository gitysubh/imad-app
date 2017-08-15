var submit = document.getElementById('submitComment');
var names=[];
submit.onclick = function (){
    var commentTxt=document.getElementById('commentBox').value;
    names.push(commentTxt);
    var list = '';
    for(var i = 0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>'
    }
    var ul = document.getElementById('commentList');
    ul.innerHTML = list;
    
};