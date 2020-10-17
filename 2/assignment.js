const task3Element = document.getElementById('task-3');

function showMessage() {
    alert( 'Hello World!' );
  }


function showName (name) {
    alert (name);
}
showMessage();
showName ('Dima');

task3Element.onclick = function () {
    alert ('Произошло нажатие задания!');
}

function threeWordsOfLove (first, second, third) {
    alert(first + "-" + second + "-" + third);
}

threeWordsOfLove ("World","Without","War");


