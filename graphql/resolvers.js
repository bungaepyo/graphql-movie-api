import {getMovies, getMovie, getSuggestions} from './db_rest.js'

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
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    }
};

export default resolvers;