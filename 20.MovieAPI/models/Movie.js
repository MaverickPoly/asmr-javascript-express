import mongoose from "mongoose";


const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
})


const MovieModel = mongoose.model("Movie", movieSchema);


const addMovie = async (name, rating) => {
    try {
        const result = await MovieModel.insertOne({ name: name, rating: rating });
        console.log(`Added movie with name ${name} successfully!`)
        console.log(result)
        return result
    } catch (error) {
        console.error(`Error while adding movie: ${error}`)
    }
}

// Get Movie with specific ID
const getMovie = async (id) => {
    try {
        const result = await MovieModel.findById(id);
        return result;
    } catch (error) {
        console.error(`Error while getting movie: ${error}`)
        throw error;
    }
};


// Get All Movies
const getAllMovies = async () => {
    try {
        const result = await MovieModel.find()
        console.log(`Movies: ${result}`);
        return result;
    } catch (error) {
        console.error(`Error while getting all movies: ${error}`)
        throw error;
    }
}

// Update Movie with id
const updateMovie = async (id, newMovie) => {
    try {
        const result = await MovieModel.findByIdAndUpdate(id, newMovie);
        console.log(`Updated movie with id ${id} successfully!`)
        return result
    } catch (error) {
        console.error(`Error while updating movie: ${error}`)
        throw error;
    }
}

// Delete Movie with ID
const deleteMovie = async (id) => {
    try {
        const result = await MovieModel.findByIdAndDelete(id);
        console.log(result);
        console.log(`Deleting movie with id ${id} successfully!`)
        return result;
    } catch (error) {
        console.error(`Error while deleting a movie: ${error}`)
        throw error;
    }
}



export { MovieModel, addMovie, getMovie, getAllMovies, updateMovie, deleteMovie };

