/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todos=[]
    }
    add(todo){
        this.todos.push(todo)
    }
    remove(indexOfTodo){
        if(indexOfTodo >= this.todos.length) return;
        let firstPart=this.todos.slice(0,indexOfTodo)
        let secondPart=this.todos.slice(indexOfTodo+1,this.todos.length)
        this.todos=firstPart.concat(secondPart)
    }
    getAll(){
        return this.todos
    }
    update(index,updatedTodo){
        if(index >= this.todos.length)   return;
        this.todos[index]=updatedTodo
    }
    get(index){
        if(this.todos.length<=index) return null;
        return this.todos[index]
    }
    clear(){
        this.todos=[]
    }
}
let todoList=new Todo()
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
todoList.update(1, 'Updated Task 2');
todoList.update(3, 'Invalid Task');
console.log(todoList.getAll())
module.exports = Todo;