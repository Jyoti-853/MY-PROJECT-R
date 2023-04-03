export class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //Create state
    this.state={
        count: 1,
        name: "default name",
    }
  }
  render() {
    return( 
    <>
    <h1>{this.props.name}</h1>
    <h2> {this.state.count}</h2>
    <button  onClick={()=>this.setstate({count: 2, name:"second"})}>Test</button>sssss
    </>
    )
  }
}
