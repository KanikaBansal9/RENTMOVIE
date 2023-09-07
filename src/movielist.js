import React from "react";
import MovieCard from "./Moviecard";
class Movielist extends React.Component{
   
        render(){
            // const{title,plot,price,rating,stars,fav,cart,poster}=this.state.movies;
            const{movies,addStars,decreaseStars,handlecart,handlefav}=this.props;
            return(
                <>
                {movies.map((movie)=>
                    <MovieCard movies={movie} 
                    addStars={addStars}
                    decreaseStars={decreaseStars}
                    handlecart={handlecart}
                    handlefav={handlefav}
                     />
                )}
                
                
                </>
            )
        }
}
export default Movielist;