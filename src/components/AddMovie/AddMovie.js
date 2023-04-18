import { useRef } from "react";
import "./AddMovie.css"

export default function AddMovie({ addMovie }) {

    let titleRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();
    let ratingRef = useRef();

    function submitted(ev) {
        ev.preventDefault();

        let newMovie = { title: titleRef.current.value, description: descRef.current.value, posterURL: posurlRef.current.value, rating: ratingRef.current.value };
        addMovie(newMovie);

        //save all this information in localStorage
    }

    return (
        <form onSubmit={submitted} id="addNew">
            <h2 className="form_title">Add a new movie</h2>
            
            <label htmlFor="title">Title</label>
            <input
                id="title" ref={titleRef} type="text" className="titleInput" placeholder="Title"
            />

            <label htmlFor="posterURL">Poster URL </label>
            <input ref={posurlRef} type="text" id="posterURL" placeholder="Poster URL" />

            <label htmlFor="description">Description</label>
            <textarea ref={descRef} id="description" placeholder="Description"></textarea>

            <label htmlFor="rating" className="rating">Rating</label>
            <input type="number" id="reating" min={1} max={5} ref={ratingRef}/>
            <br></br>
            <button id="button" type="submit">Add movie</button>
        </form>
    )
}
