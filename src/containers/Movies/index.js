import React, {Component} from 'react';
import MoviesList from '../../components/MoviesList';

import TextField from '@material-ui/core/TextField';

class Movies extends Component{

    state={
        movies:[],
        moviesName:'',
        fetch: false,
        importantText:''
    }


    onMoviesInputChange = e =>{
        this.setState({moviesName:e.target.value, fetch:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response)=> response.json())
            .then(json => this.setState({movies:json, fetch:false}))
    }

    render(){
        const {movies, moviesName, fetch,importantText}=this.state
        return(
            <div>
                <div>
                    <p>Recherchez n'importe quel série qui se trouve dans notre base de donnée</p>
                    <TextField
                        id="search"
                        label="Recherche"
                        type="search"
                        margin="normal"
                        value={moviesName}
                        onChange={this.onMoviesInputChange}
                        helperText={importantText}
                    />
                </div>
                <div>
                    {
                        !fetch && movies.length === 0 && moviesName.trim() === ""
                        &&
                        <p>Veuillez entrer le nom d'une série</p>
                    }
                    {
                        !fetch && movies.length === 0 && moviesName.trim() !== ""
                        &&
                        <p>Ce film n'a pas été trouvé</p>
                    }
                    {
                        !fetch && <MoviesList list={this.state.movies}/>
                    }
                </div>
            </div>
        )
    }
}

export default Movies;