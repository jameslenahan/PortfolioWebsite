import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import "../App.css";


const Home = () => {
    return (

        <div className="jumbotron">
            <div className="container">
                <>
                    <blockquote className="blockquote text-center">

                        <h1></h1><br></br>

                        <h4 className="mb-0 ">James Lenahan Bio</h4>

                        <footer className="blockquote-footer mb-3"><cite title="Source Title"></cite></footer>
                    </blockquote>
                    <div><br></br><br></br><br></br><br></br>

                        <h2 className="text-center">
                            <Badge  pill variant="light" as={Link} to='/songs'></Badge>
                        </h2>
                    </div>
                </>
            </div>
        </div>

    );
};


export default Home;