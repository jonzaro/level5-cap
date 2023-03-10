import React from "react"
import HikeCard from "./HikeCard"

function LandingPage({props}) {



    const hikeCards = props.hikes?.length ? props.hikes.map(hike => {
        return(
            <>
                <HikeCard props={{...hike}}/>
            </>
        )
    }) 
    :
    []
    return (
        <>
            <div className="mainAreaLanding">
                <div className="landingCenter">
                    {/* <p className="explore">Explore</p> */}
                </div>
            </div>
            <div className="search-div">
            <img src="./Vector-trail.png" alt="logo" style={{width: 50, height: 50, padding: 5}}/>

                <button className="search-trail">Search Trails Now</button>

                <img src="./Vector-camp.png" alt="logo" style={{width: 50, height: 50, padding: 5}}/>
                <button className="search-camp">Search Campsites Now</button>
            </div>
            <div className="featured-box">
                    {console.log(props)}
                <div className="card-box">
                        {hikeCards[0]}
                    <div className="featured-card">
                    I don't want the edit/delete buttons when the hike card renders here. 
                    conditional render button?
                    </div>
                    <div className="featured-card">
                    </div>
                    <div className="featured-card">
                    </div>
                    <div className="featured-card">
                    </div>
                </div>
            </div>
                {/*
                <div className="landingFlex">
                    <div className="flexItem">
                        <h2>About WRG</h2>
                        <hr></hr>
                        <p>
                            Random organization facts
                        </p>
                    </div>

                    <div className="flexItem">
                        <h2>Reconnect with nature</h2>
                        <hr></hr>

                        <p>
                            Reasons to hike and camp
                        </p>
                    </div>

                    <div className="flexItem">
                        <h2>Conservation Efforts</h2>
                        <hr></hr>

                        <p>
                            Ways WRG is helping the environment
                        </p>
                    </div> */}








        
                
            
        </>
    )
}



export default LandingPage