function sortList(){
  var odd_list = document.getElementById('impar');
  var even_list = document.getElementById('par');
  var string_list = document.getElementById('string');


  arr.forEach(function(ele){

    var li = document.createElement('li');
    li.innerHTML = ele;

    switch(typeof(ele)) {
      case 'number':
         if(isOdd(ele)){
           odd_list.appendChild(li);
         } else {
           even_list.appendChild(li);
         }
        break;
      case 'string':
        string_list.appendChild(li);
        break;
    }
  });
}

function isOdd(num) { return num % 2;}
