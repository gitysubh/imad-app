var submit = document.getElementById('submitComment');
submit.onclick = function (){
    var commentTxt=document.getElementById('commentBox').value;
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i = 0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>'
    }
    var ul = document.getElementById('commentList');
    ul.innerHTML = list;
    
};