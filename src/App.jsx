import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import './App.css';

function App() {
  return (
    <center className="todo-content">
      <AppName />
        <AddTodo />
        <div class="row">
        <div class= "col-6">
          Buy Milk
        </div>
          <div class="col-4">
            4/10/24
          </div>
          <div class="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div class="row">
        <div class= "col-6">
          Commit Suicide
        </div>
          <div class="col-4">
            20/02/24
          </div>
          <div class="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
    </center>
  );
}

export default App;
