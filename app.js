const GroceryList = () => (
  <div>
    <h2>Get Food!</h2>
    <h3>Pizza is EVERYTHING!</h3>
    <PizzaList toppings={['Pepperoni', 'Cheese', 'Sauce']}/>
    <h3>Bagels Fridays!</h3>
    <BagelList spreads={['Plain Cream Cheese', 'Chive and Onion', 'Strawberry']} />
  </div>
);

const PizzaList = (props) => (
  <ul>
    {props.toppings.map(topping =>
      <Pizza key={Math.random() * 100000} topping={topping} />
    )}
  </ul>
);

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.onListItemHover = this.onListItemHover.bind(this);
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let hoverStyle = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
      // textDecoration: this.state.hover ? 'line-through' : 'none'
    };

    return (
      <li style={hoverStyle} onMouseEnter={this.onListItemHover} onMouseLeave={this.onListItemHover} >{this.props.topping}</li>
    );
  }
}

const BagelList = (props) => (
  <ul>
    {props.spreads.map(spread =>
      <Bagels key={Math.random() * 100000} spread={spread} />
    )}
  </ul>
);


class Bagels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.onListItemHover = this.onListItemHover.bind(this);
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
     let hoverStyle = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
      // textDecoration: this.state.hover ? 'line-through' : 'none'
    };
    return (
      <li style={hoverStyle} onMouseEnter={this.onListItemHover} onMouseLeave={this.onListItemHover} >{this.props.spread}</li>

    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app')); 

// -----------------------------DEMO STUFF-------------------------

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
