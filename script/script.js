
function myFunction(){
    var input= document.getElementById("input").value;
    var output = document.getElementById("output");
    var num = document.getElementById("num").value;
    
    var begin_space = input.replace(/^\s*/gm, '');
    var remove_space =begin_space.replace(/\s+ /g,' ');
    var remove_line=remove_space.replace(/(\r\n|\n|\r)/gm, ' ');

        var text = '';
        var total = 0;
        if(num!=null){
          for (var i = 0; i < remove_line.length; i++) {
                    if(remove_line[i]==' '){
                       total+=1;
                       text += remove_line[i];
                       if (total==num) 
                       {
                           text +="\n";
                           total = 0;            
                       }  
                     }  
                     else{
                      text += remove_line[i];
                     } 
                  } 
                  output.innerHTML= text;
        }
  }
