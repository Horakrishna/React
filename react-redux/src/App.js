import React, {Component} from 'react';

//import First from './components/First/First';

//import Counter from './components/Counter/Counter';
import Event from './components/Event/Event';
import Example from './components/First/Example';

class  App extends Component {

  // state ={
  //   persons:[
  //     {name:'Hora Krishna Roy', email:'hora@gmail.com',address:'Mohammadpur'},
  //     {name:'Hora  Roy', email:'horakrishna@gmail.com',address:'Mohammadpur,Dhaka'},
  //     {name:'Roy', email:'roy@gmail.com',address:'Dhanmondi,Dhaka'},
  //   ]
  // }
 

 render(){
  
    return (
      <div className="App">
        {/* <First name={ this.state.persons[0].name} email={ this.state.persons[0].email} address={this.state.persons[0].address}/>
        <First  name={this.state.persons[1].name}  email={this.state.persons[1].email} address={this.state.persons[1].address}/>
        <First name=' Roy'  email='rora@gmail.com' address='Mohammadpur'/> */}

        {/* {this.state.persons.map((person,index) =>{

         return <First key={ index } name={person.name} email={person.email} address={person.address}/>
        })} */}
        {/* <Event/>
        <Example name='Hora krishna Roy'/> */}
        
        
      </div>
    );
  }
}
  
export default App;
