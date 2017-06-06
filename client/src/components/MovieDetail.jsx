import React from 'react'

class MovieDetail extends React.Component{

 render(){
   if(this.props.movie === null) return null;
  return(
    <div>
     <h1>{this.props.movie.show_title}</h1>
     <img src={this.props.movie.poster}/>
    </div>
    )
}
}



export default MovieDetail;
