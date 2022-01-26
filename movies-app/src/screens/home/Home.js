import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import '../../common/moviesData';
import moviesData from '../../common/moviesData';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

/* GridList was not working properly, as The Material UI has been updated,
    and GridList was replaced by ImageList, so I'm using ImageList.
*/
class Home extends Component {
    state = {
        movies: moviesData,
        id: moviesData.id,
        title: moviesData.title,
        poster: moviesData.poster_url,
    } 
    
    //function to convert ISO date into 'Day Month Date Year - e.g. Wed Aug 11 2017' format.
    releaseDate = (releaseDate) =>{
        let release_date = new Date(releaseDate);
        let date = release_date.toDateString();
        return "Release Date: "+date;
    }

    render() { 
        return (<div className='container'>
            <Header />
            <div className='heading'>
                <span>Upcoming Movies</span>
            </div>

            {/* Div for Single Row ImageList */}
            <div className='gird-list-container'>
                <ImageList className='grid-list' cols={6} >
                {
                    this.state.movies.map(tile => (
                        <ImageListItem key={tile.id} rowHeight={250}>
                            <img src={tile.poster_url} alt={tile.title}/>
                            <ImageListItemBar title={tile.title} />
                        </ImageListItem>
                    ))
                }
                </ImageList>
            </div>
            
            {/* Div divided into two parts - released movies(left) and filter(right) */}
            <div className='flex-container'>
                <div className='left'>
                    <ImageList className='release-list' cols={4} gap={30} rowHeight={350}>
                    {
                        this.state.movies.map(tile => (
                            <ImageListItem className='release-tiles' key={tile.id}>
                                <img src={tile.poster_url} alt={tile.title}/>
                                <ImageListItemBar title={tile.title} subtitle={this.releaseDate(tile.release_date)}/>
                            </ImageListItem>
                        ))
                    }
                    </ImageList>
                </div>
                <div className='right'>

                </div>
            </div>
        </div>);
    }
}
 
export default Home;