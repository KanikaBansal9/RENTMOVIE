import React from "react";
class MovieCard extends React.Component {
    
  
    handlefav=()=>{
        this.setState({
            fav:!this.state.fav
        });
    }
    handlecart=()=>{
        this.setState({
            cart:!this.state.cart
        });
    }
    render() {
        const{decreaseStars,addStars,movies,handlecart,handlefav}=this.props;
        const {title,plot,price,rating,stars,fav,cart,poster}=this.props.movies;
        return (
            <>
                <div className="main">
                    <div className="movie-card">
                        <div className="left">
                            <img alt="poster" src={poster} />
                        </div>
                        <div className="right">
                            <div className="title">{title}</div>
                            <div className="plot">{plot}</div>
                            <div className="price">Rs {price}</div>
                            <div className="footer">
                                <div className="rating">{rating}</div>
                                <div className="star-dis">
                                    <img className="str-btn" alt="minus" onClick={()=>{decreaseStars(movies)}} src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />
                                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" className="stars" />
                                    <img className="str-btn" alt="add" onClick={()=>{addStars(movies)}} src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />
                                     <span className="starCount">{stars}</span>
                                </div>
                                <button  className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handlefav(movies)}}>{fav?"Un-Favorite":"Favorite"}</button>
                                
                                
                                <button onClick={()=>{handlecart(movies)}} className={cart?"removecart-btn":"cart-btn"}>{cart?"Remove from cart":"Add Item"}</button>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default MovieCard;