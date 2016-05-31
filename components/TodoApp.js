import React from 'react' 
// import styles from './Style.scss';

class TodoApp extends React.Component {
    constructor(props)  {
        super(props)
        this.state  =   {todos: [] }
    }
    addTodo(e) {
        e.preventDefault()
        var todoText    =   document.getElementById('todo_text')
        var newObj  =   {}
        newObj['text'] = todoText.value 
        newObj['t_status'] = false 
        if(todoText.value.length === 0)
            this.setState({'todos': [...this.state.todos ]}) 
        else 
            this.setState({'todos':  [...this.state.todos, newObj]})
        todoText.value = "" 
    }
    markUnmarkCompleted(e) {
        var status_l ;
        if(e.target.checked)
            status_l = true
        else  
            status_l = false
        this.setState({'todos': [...this.state.todos.slice(0 , parseInt(e.target.id)), {'text': this.state.todos[parseInt(e.target.id)].text,'t_status': status_l   }, ...this.state.todos.slice(parseInt(e.target.id) + 1)]}) 
    }
    render() {
        console.log("Compent") ;
        console.log(this) ;
        const img = require('./bottle.png');
        const styles = require('./Style.scss');
        const test = {};
        test['color'] = {
          'backgroundColor': 'green'
        };
        var todo_html = this.state.todos.map((m, i) => {
            let todo_text = ( m.t_status )? 'D:' + m.text : m.text 
            console.log('m is ') 
            console.log(m)
            return (
                        <li key={i}>  
                            <input type='checkbox' onChange={this.markUnmarkCompleted.bind(this)} id={i} defaultChecked={m.t_status}/> 
                            <span todo_id={i} > {todo_text} </span>
                        </li>
                    )
        }) 
        console.log('todo_html') 
        console.log(todo_html) 
        console.log(styles);
        return  (
                    <div className='todo_wrapper'>
                      <div className={ styles.color_green } >
                        This will be coloured green
                      </div>
                      <img src={ img} alt='help me!' />
                        <div className='todo_data'>
                            <ul> 
                                {todo_html}
                            </ul>
                        </div>
                        <div className='form_wrapper'>
                            <form className='todoform' id='todoform' >
                                <input type='text' id='todo_text' placeholder='Add Todo' />
                                <input type='submit' value='Add Todo' onClick={this.addTodo.bind(this)} />
                            </form>
                        </div>
                    </div>
                )
    }
}

export default TodoApp
