import React from "react";
import Movielist from "./movielist";
import Nav from "./nav";
import {movies} from "./moviesData";
 
class App extends React.Component{
  constructor(){
    super();
    this.state={
       movies: movies,
       cartCount:0
    }
}
handleincreasestar=(movie)=>{
         const {movies}=this.state;
         const mid=movies.indexOf(movie);
         if(movies[mid].stars>=5)return;
         movies[mid].stars+=0.5;
         
          this.setState({
          movies:movies
          })
}
handledecreasestar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars<=0)return;
    movies[mid].stars-=0.5;
    
     this.setState({
     movies:movies
     })
}
handlefav=(movie)=>{
const{movies}=this.state;
const mid=movies.indexOf(movie);
movies[mid].fav=!movies[mid].fav
this.setState({
   movies:movies
});
}
handlecart=(movie)=>{
let{movies,cartCount}=this.state;
const mid=movies.indexOf(movie);
movies[mid].cart=!movies[mid].cart
if(movies[mid].cart){
  cartCount++;
}
else{
  cartCount--;
}
this.setState({
   movies,
   cartCount
});
}

  render(){
    const {movies,cartCount}=this.state;
    return(
      <>
      <Nav cartCount={cartCount}/>
      <Movielist movies={movies}
       addStars={this.handleincreasestar}
       decreaseStars={this.handledecreasestar}
       handlefav={this.handlefav} 
       handlecart={this.handlecart} 
       
       />
      </>
      
      
    );
  }
}

export default App;
