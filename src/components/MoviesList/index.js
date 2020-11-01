import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MoviesListItem = ({ movies }) => (
    <Link to={`/movies/${movies.show.id}`}>
        <ListItem button>
            <ListItemText primary={movies.show.name} />
        </ListItem>
    </Link>
)

const MoviesList = (props) => {
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <List component="nav">
                {props.list.map(movies => (
                    <MoviesListItem movies={movies} key={movies.show.id} />
                ))}
            </List>
        </div>
    )
}

export default MoviesList;