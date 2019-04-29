import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPhotoPreview, bindImages } from '../store/actions/Photos';




export class Photos extends Component {
    handleChange = e => {
        const files = e.target.files;
        let photos = [];
        for (let i = 0; i < files.length; i++) {
            photos.push({
                url: URL.createObjectURL(files[i]),
                title: files[i].name
            });
        }
        this.props.showPhotoPreview(photos);
        this.props.bindImages(files);
    }

    delete = e => {
        let photos = JSON.parse(JSON.stringify(this.props.photos));
        photos.splice(Number(e.target.id), 1);
        this.props.showPhotoPreview(photos);
    }

    render() {
        if (this.props.photos) {
            const photos = this.props.photos;
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Report Images</div>
                    <div className="photos">
                        {
                            photos.map((photo, i) => {
                                return (
                                    <div key={i} className="bor-img">
                                        <div className="img-btns">
                                            <p>{photo.title}</p>
                                            <div className="delete-sml" id={i} onClick={this.delete}></div>
                                        </div>
                                        <img className="photo-img" src={photo.url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="file-upload">
                        <p className="title-img">Upload Image</p>
                        <input type="file" onChange={this.handleChange} multiple />
                    </div>
                </div>
            )
        } else if (this.props.images) {
            const photos = this.props.images.split(`,`) || [];
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Report Images</div>
                    <div className="photos">
                        {
                            photos.map((photo, i) => {
                                return (
                                    <div key={i} className="bor-img">
                                        <div className="img-btns">
                                            <p>{photo.title}</p>
                                            <div className="delete-sml" id={i} onClick={this.delete}></div>
                                        </div>
                                        <img className="photo-img" src={
                                            window.location.href.includes(`localhost`) 
                                            ? `http://localhost:4000/${photo}`
                                            : `http://192.168.20.211:9000/${photo}` } alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="file-upload">
                        <p className="title-img">Upload Image</p>
                        <input type="file" onChange={this.handleChange} multiple />
                    </div>
                </div>
            )
        } else {
            const photos = [];
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Report Images</div>
                    <div className="photos">
                        {
                            photos.map((photo, i) => {
                                return (
                                    <div key={i} className="bor-img">
                                        <div className="img-btns">
                                            <p>{photo.title}</p>
                                            <div className="delete-sml" id={i} onClick={this.delete}></div>
                                        </div>
                                        <img className="photo-img" src={photo.url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="file-upload">
                        <p className="title-img">Upload Image</p>
                        <input type="file" onChange={this.handleChange} multiple />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    photos: state.patient.photos,
    images: state.patient.images,

})

const mapDispatchToProps = dispatch => ({
    showPhotoPreview: (photos) => dispatch(showPhotoPreview(photos)),
    bindImages: (photos) => dispatch(bindImages(photos)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
