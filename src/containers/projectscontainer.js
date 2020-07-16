import React from 'react';
import { connect } from 'react-redux';//HOC
import {fetchSongs} from '../actions/fetchSongs';
import Songs from '../components/Songs';



class Projectscontainer extends React.Component {


    componentDidMount() {
        this.props.fetchSongs()
    }



    render() {

        const {songs} = this.props;


        if (!songs) {
            return <div> Loading ...</div>
        }

        return (
            <div className='card-decker'>
                <div className='row'>
                    <div className='col s12 m2'>
                        <Songs songs={songs} />
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {

    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, {fetchSongs})(SongsContainer);