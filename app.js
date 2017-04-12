const GroceryList = () => (
  <div>
    <h2>Get Food!</h2>
    <Pizza toppings={['Pepperoni', 'Cheese', 'Sauce']}/>
    <Bagles spread={['Plain Cream Cheese', 'Chive and Onion', 'Strawberry']} />
  </div>
);

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let hoverStyle = {
      textDecoration: this.state.hover ? 'line-through' : 'none'
    };

    return (
    
    <div>
      <h3>Pizza is EVERYTHING!</h3>
      <ul>
        <li style={hoverStyle} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} >{this.props.toppings[0]}</li>
        <li>{this.props.toppings[1]}</li>
        <li>{this.props.toppings[2]}</li>
      </ul>
    </div>
    );
  }
}


class Bagles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Bagels Fridays!</h3>
        <ul>
          <li>{this.props.spread[0]}</li>
          <li>{this.props.spread[1]}</li>
          <li>{this.props.spread[2]}</li>
        </ul>
      </div> 
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app')); 

// -----------------------------

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem key={Math.random() * 100000} todo={todo} />
    )}
  </ul>
);

const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

// ReactDOM.render(<App />, document.getElementById('app')); 
