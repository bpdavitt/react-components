const App = () => (
    <div>
        <GroceryList />
    </div>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleMouseOver (event){
        event.target.style.fontWeight = 'bold';
        event.target.style.cursor = 'pointer';
    }

    handleMouseOut (event){
        event.target.style.fontWeight = '';
    }
    
    render (){
        return (
            <li onMouseOver = {this.handleMouseOver.bind(this)} 
            onMouseOut = {this.handleMouseOut.bind(this)}>
                {this.props.item}
            </li>
        )
    }
}

const GroceryList = () => {
    var items = ['Beer', 'Ice Cream', 'Kale', 'Cheese'];
    var list = items.map(item => {
        return(
            <GroceryListItem item = {item} />
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));