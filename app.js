// TODO

var GroceryList = () => (
  <div>
    <h2>Get Food!</h2>
    <Pizza toppings={['Pepperoni', 'Cheese', 'Sauce']}/>
    <Bagles spread={['Plain Cream Cheese', 'Chive and Onion', 'Strawberry']} />
  </div>
);

var Pizza = (props) => (
  <div>
    <h3>Pizza is EVERYTHING!</h3>
    <ul>
      <li>{props.toppings[0]}</li>
      <li>{props.toppings[1]}</li>
      <li>{props.toppings[2]}</li>
    </ul>
  </div>
); 
var Bagles = (props) => (
  <div>
    <h3>Bagels Fridays!</h3>
    <ul>
      <li>{props.spread[0]}</li>
      <li>{props.spread[1]}</li>
      <li>{props.spread[2]}</li>
    </ul>
  </div>
); 

ReactDOM.render(<GroceryList />, document.getElementById('app')); 

var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);


var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

// ReactDOM.render(<App />, document.getElementById('app'));
