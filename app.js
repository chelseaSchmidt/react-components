// TODO
let GroceryList = () => ( /*Why does this use a paren instead of a curly brace*/
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
  </ul>
);

let Coffee = () => (
  <li>Coffee</li>
);

let Tea = () => (
  <li>Tea</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));