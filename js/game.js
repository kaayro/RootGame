var g = {
    writer: {
        pointer: null,
        text: [],
        process: [],
        btn: [],
        i: 0
    },
    ready: function(){
        //document.addEventListener('deviceready',g.init,false);
        g.init();
    },
    init: function(){
        g.click('footer a');
        var a = document.querySelectorAll('.dialog a');
        for(i=0;i<a.length;i++) a[i].addEventListener('click',g.hideMsg,true);
    },
    click: function(itm){
        var a = document.querySelectorAll(itm);
        for(i=0;i<a.length;i++) a[i].addEventListener('click',g.doAction,true);
    },
    hideMsg: function(e){
        var a = e.target;
        a.parentElement.classList.remove('active');
        a.parentElement.classList.add('inactive');
    },
    doAction: function(e){
        var a = e.target;
        var act = a.getAttribute('data-action');
        act2 = act.split('&');
        if(act2[0] != 'msg'){
            a.parentElement.innerHTML = "";
            g.writer.text = actions[act].cmd.split('');
            g.writer.process = actions[act].process;
            g.writer.btn = actions[act].btn;
            g.writer.pointer = setInterval(g.write,50);
        }else{
            var dialog = document.getElementById(act2[0]);
            dialog.childNodes[1].innerHTML = actions[act2[1]].msg;
            dialog.classList.remove('inactive');
            dialog.classList.add('active');
        }
    },
    write: function(){
        if(g.writer.text.length > 0){
            var l = g.writer.text[0];
            var writer = document.querySelectorAll('span.writer');
            writer = writer[writer.length - 1];
            writer.innerHTML = writer.innerHTML + l;
            g.writer.text.shift();
            var objDiv = document.querySelector("article");
            objDiv.scrollTop = objDiv.scrollHeight;
        }else{
            clearInterval(g.writer.pointer);
            g.writer.pointer = null;
            var p = document.getElementById('pointer');
            p.parentElement.removeChild(p);
            g.writer.pointer = setInterval(g.process,90);
            var objDiv = document.querySelector("article");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    },
    process: function(){
        if(g.writer.i < g.writer.process.length){
            var p = document.createElement("p");
            var t = g.writer.process[g.writer.i];
            p.innerHTML = t;
            document.querySelector('article').appendChild(p);
            g.writer.i++;
            var objDiv = document.querySelector("article");
            objDiv.scrollTop = objDiv.scrollHeight;
        }else{
            clearInterval(g.writer.pointer);
            var p = document.createElement("p");
            p.innerHTML = 'root $: <span class="writer"></span><span id="pointer">&#95;</span>';
            document.querySelector('article').appendChild(p);
            var a = '';
            for(i=0;i < g.writer.btn.length;i++){
                a += '<a href="#" data-action="'+g.writer.btn[i].act+'">'+g.writer.btn[i].desc+'</a>';
            }
            document.querySelector('footer').innerHTML = a;
            g.click('footer a');
            g.writer.pointer = null;
            g.writer.i = 0;
            var objDiv = document.querySelector("article");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }
}
window.addEventListener('load',g.ready,false);