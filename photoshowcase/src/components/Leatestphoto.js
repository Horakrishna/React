import React, { Component } from 'react'
import axios from 'axios'
class Leatestphoto extends Component {

    state ={
        
        photos: [],
        page  :1,
        loading:true,
        search_query:'',
        searching:false
    }
    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&per_page=16&page=' +
         this.state.page).then(
            res =>this.setState({
                photos:res.data,
                loading:false,
                page: this.state.page +1
            })
        )
    }
    loadNextPage =(e) =>{
        
        axios.get('https://api.unsplash.com/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&per_page=16&page=' +
         this.state.page).then(
            res => this.setState({
                photos:res.data,
                loading:false,
                page: this.state.page +1
            })
        )
    }
    searchQuery =(e) =>{
        this.setState({
           search_query : e.target.value
          
        })
      
    }
    searchTrigger =(e) =>{
        axios.get('https://api.unsplash.com/search/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&query=' + this.state.search_query + ' &per_page=16&page='+ this.state.page)
        .then(
           res => this.setState({
               photos:res.data.results,
               loading:false,
               page: 2,
               searching:true,
               total_found:res.data.total,
               total_found_pages:res.data.total_pages
           })
         
       )
       e.preventDefault();
    }
    loadNextSearchPage =(e) =>{
        
        axios.get('https://api.unsplash.com/search/photos/?client_id=6a0b330541251918a0e894d2d5c2225669951c837dbaa8511acd7329b99a1c44&query=' + this.state.search_query + ' &per_page=16&page='+ this.state.page
        ).then(
           res => this.setState({
               photos:res.data.results,
               loading:false,
               page: this.state.page +1,
               searching:true,
               total_found:res.data.total,
               total_found_pages:res.data.total_pages
           })
         
       )
    }
    render() {
        //console.log(this.state.photos);

        var searchHidden ='';
        var searchBtnMarkup ='';
        var searchInfo ='';
        if(this.state.searching === true){
            searchHidden = <h2>You Searching With <i>{this.state.search_query}</i></h2>
            searchBtnMarkup= <button className="btn btn-success" onClick={this.loadNextSearchPage}>Load Page{this.state.page}</button>
            searchInfo = <span>Total Found{this.state.total_found} And Page{this.state.page -1} Of {this.state.total_found_pages}</span>

        }else{
            searchHidden =<h2>Leatest Photo</h2>
            searchBtnMarkup=  <button className="btn btn-success" onClick={this.loadNextPage}>Load Page{this.state.page}</button>
            searchInfo  =''
        }

        if(this.state.loading === true){
            return(
                <div className="row text-center">
                    <div className="col">Loading</div>
                </div>
            )
        }

        if(this.state.loading === false){
            return(
                <React.Fragment>

                <div className="row top-heading">
                    <div className="col my-auto">
                       {searchHidden} {searchInfo}
                    </div>
                    <div className="col col-auto my-auto">
                        <form onSubmit={this.searchTrigger} action="">
                        <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search Keyword"/> 
                        <input type="submit" value="search"/> 
                        </form>
                    </div>
                    </div>
                   
                    <div className="row">
                
               
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
                 </div>
                 <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="load-more-btn"> {searchBtnMarkup}</div>
                    </div>
                 </div>
                    
                </React.Fragment>
            )
        }
        return(
            <div className="text-center">Loading</div>
        )
        
    }
}
export default  Leatestphoto;