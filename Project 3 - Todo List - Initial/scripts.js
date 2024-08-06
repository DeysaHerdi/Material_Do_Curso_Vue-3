
const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        };
    },
    methods: {
        addTodo: function() {
            if(this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }else   {
                alert('Por favor, insira uma tarefa');
            }

        },
        storeTodos(){
            localStorage.setItem('todos', JSON.stringify(this.todos));
            console.log('updated');
        }
    },
    created() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
    }, updated() {
  
    }
};  

Vue.createApp(todosApp).mount('#app')