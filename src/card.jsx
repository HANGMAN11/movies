import React from "react";

const Card = () =>{
    return (
        <>
        <div className="movie">
            <img src="./public/psycho.jpg" className="poster"></img>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">Title</h4>
                    <p className="rating">9.0</p>
                </div>
                <div className="overview">
                    <h1>Overview</h1>
                    <p>"Psycho" (1960), directed by Alfred Hitchcock, is a groundbreaking thriller about a secretary, a secluded motel, and its mysterious owner, Norman Bates.</p>
                </div>
            </div>
        </div>
            

        </>
    )
}

export default Card