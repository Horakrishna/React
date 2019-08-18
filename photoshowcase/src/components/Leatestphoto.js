import React, { Component } from 'react'
import axios from 'axios'
class Leatestphoto extends Component {

    state ={
        
        photos: [],
        page  :1
    }
    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&per_page=16&page=' +
         this.state.page).then(
            res =>this.setState({
                photos:res.data
            })
        )
        this.setState({page: this.state.page +1})
    }
    loadNextPage =(e) =>{
        this.setState({page: this.state.page +1})
        axios.get('https://api.unsplash.com/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&per_page=16&page=' +
         this.state.page).then(
            res =>this.setState({
                photos:res.data
            })
        )
    }
    render() {
        console.log(this.state.photos);

        return(
            <React.Fragment>
                {
                    this.state.photos.map((photo) => (
                        <div key={photo.id} className="col-lg-3">
                            <div className="single-photo-item">
                                <div className="d-block">
                                    <div className="photo-wraper">
                                    <img src={photo.urls.small} alt={photo.alt_description}/>
                                    </div>
                                    <h3>{photo.user.instagram_username}</h3>
                                    <h4 className="cate-name">by-{photo.user.first_name}{photo.user.last_name}</h4>
                                </div>
                            </div>
                        </div>
                       
                    ))
                }
                <div className="col-lg-12">
                    <div className="load-more-btn">
                        <button onClick={this.loadNextPage}>Load Page{this.state.page}</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default  Leatestphoto;
