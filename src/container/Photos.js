import React from "react";
import { connect } from "react-redux";
import '../App.css';
import { getPhotos } from "../actions";
import PhotoItem from "../component/PhotoItem";

class Photos extends React.Component{
    componentDidMount(){
        console.log('called')
        // this.props.getPosts();
        const { getPhotos } = this.props;
        getPhotos();
    }
    render(){
        const {error, isLoading, photos } = this.props;
    return(
        <div>
        {error && <div>{error}</div>}
        {
            !isLoading?
            <table>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {photos && photos.length !== 0 && photos.map((photos, index) => <PhotoItem data={photos} key={index}/> )}
                </tbody>
            </table>
          :
          <div className="loader"></div>
        }
        </div>
    );
  }
}

const mapStateToProps = state => ({
    photos: state.photoData.photos,
    isLoading: state.photoData.isLoading,
    error: state.photoData.error,
  });
  
  const mapDispatchToProps = {
    getPhotos
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Photos);