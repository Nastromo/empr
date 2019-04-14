import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPhotoPreview } from '../store/actions/Photos';




export class Photos extends Component {
    handleChange = e => {
        const files = e.target.files;
        const fd = new FormData();
        let photos = [];
        for (let i = 0; i < files.length; i++) {
            fd.append(`image`, files[i]);
            photos.push({
                url: URL.createObjectURL(files[i]),
                title: files[i].name
            });
        }
        this.props.showPhotoPreview(photos);
    }

    delete = e => {
        let photos = JSON.parse(JSON.stringify(this.props.photos));
        photos.splice(Number(e.target.id), 1);
        this.props.showPhotoPreview(photos);
    }

    render() {
        const photos = this.props.photos || [];
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Report Images</div>
                <div className="photos">
                    {
                        photos.map((photo, i) => {
                            return(
                                <div key={i} className="bor-img">
                                    <div className="img-btns">
                                        <p>{photo.title}</p>
                                        <div className="delete-sml" id={i} onClick={this.delete}></div>
                                    </div>
                                    <img className="photo-img" src={photo.url} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="file-upload">
                    <p className="title-img">Upload Image</p>
                    <input type="file" onChange={this.handleChange} multiple/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    photos: state.patient.photos
})

const mapDispatchToProps = dispatch => ({
    showPhotoPreview: (photos) => dispatch(showPhotoPreview(photos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
