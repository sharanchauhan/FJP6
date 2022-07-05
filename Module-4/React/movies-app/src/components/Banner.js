import { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="card banner-card">
        <img src="https://cdn.wallpapersafari.com/92/19/GT35xL.jpg" className="card-img-top banner-img" style={{height:700}} alt="..." />
        <h1 class="banner-title">Captain America:Civil War</h1>
        <p class="banner-text">Development of Civil War began in late 2013 when Markus and McFeely began writing the screenplay, which borrows concepts from the 2006 comic book storyline "Civil War" while also focusing on story and character elements from the previous Captain America films to conclude the trilogy. Following positive reactions to The Winter Soldier, the Russo brothers were brought back to direct in early 2014. The film's title and premise were revealed in October 2014, along with Downey's involvement as Stark; additional cast members joined in the following months.</p>
      </div>
    );
  }
}

export default Banner;
