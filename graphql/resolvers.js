// import { getMovies, getById, addMovie, deleteMovie } from './db.js';
import {getMovies} from './db_rest.js'

// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, { id }) => getById(id)
//     },
//     Mutation: {
//         addMovie: (_, { name, score }) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     }
// };

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;