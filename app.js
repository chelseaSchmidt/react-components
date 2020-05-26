// TODO
let GroceryList = () => ( /*parens are wrapping returned JSX*/
  <ul>
    <GroceryListItem item = {'Coffee'}/> {/*This creates an instance of the Coffee component*/}
    <GroceryListItem item = {'Tea'}/>
  </ul>
);

let GroceryList2 = () => (
  <GroceryListItems items = {['Coffee', 'Tea']}/>
);

let Coffee = () => (
  <li>Coffee</li>
);

let Tea = () => (
  <li>Tea</li>
);

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

let GroceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);

//props is a convential name for the object that gets passed in when creating a new instance of a
//component; you define properties on the object by 'item = {...}' and would access that
//property via props.item

ReactDOM.render(<GroceryList />, document.getElementById('app')); /*This creates an instance of the GroceryList component and renders it to the page */