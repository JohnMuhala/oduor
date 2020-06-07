const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: true
}, {
     text: 'buy food',
        completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed:  false
}]
const incompleteTodos = todos.filter(function(todo){
    return !todo.completed;
});

var data = document.createElement("h2");
data.textContent = `you have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(data);
 
todos.forEach(function(todo) {
    var p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("body").appendChild(p);
});

document.getElementById("new-todo").addEventListener("input",
function (evt){
    console.log(evt.target.value)
})

document.getElementById("add-todo").addEventListener("click",
function (evt){
    console.log('adding new todo')
});



