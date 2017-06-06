import React from 'react'
import MovieSelector from '../components/MovieSelector'
import MovieDetail from '../components/MovieDetail'

class NetflixContainer extends React.Component{
 constructor(props){
   super(props);
   this.state={
     movie:[] ,
     selectedMovie: null}
     this.setSelectedMovie = this.setSelectedMovie.bind(this);
   }

   render(){

    return(
      <div>
      <MovieSelector movies={this.state.movie} onSelectMovie={this.setSelectedMovie}/>
       

      <MovieDetail movie ={this.state.selectedMovie}/>
      </div>
      )
  }

  componentDidMount(){
    const url = 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino';
    const request = new XMLHttpRequest();
    request.open('GET',url);
    request.addEventListener('load',()=>{
     if(request.status !== 200) return;
     const jsonString = request.responseText;
     const data = JSON.parse(jsonString);
     console.log(data);
     this.setState({
       movie: data,
      selectedMovie: data[0]});


                 } );
    request.send();
  }
  setSelectedMovie(movie){
    this.setState({selectedMovie: movie})

  }
}
export default NetflixContainer;