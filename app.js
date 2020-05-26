// TODO
let GroceryList = (props) => ( /*parens are wrapping returned JSX*/
  <ul>
    {props.items.map(item =>
      <GroceryListItem item = {item}/>
    )}
  </ul>
);

// let GroceryList2 = () => (
//   <GroceryListItems items = {['Coffee', 'Tea']}/>
// );

// let Coffee = () => (
//   <li>Coffee</li>
// );

// let Tea = () => (
//   <li>Tea</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emphasize: false
    };
  }
  onListItemHover() {
    this.setState({
      emphasize: !this.state.emphasize
    });
  }
  render() {
    let style = {
      fontWeight: this.state.emphasize ? 'bold' : 'normal'
    };
    return (<li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>);
  }
}

// let GroceryListItems = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );

//props is a convential name for the object that gets passed in when creating a new instance of a
//component; you define properties on the object by 'item = {...}' and would access that
//property via props.item

ReactDOM.render(<GroceryList items = {['Coffee', 'Tea', 'Bananas']}/>, document.getElementById('app')); /*This creates an instance of the GroceryList component and renders it to the page */