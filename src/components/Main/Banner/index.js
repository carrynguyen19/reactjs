import React from 'react'
import PropTypes from 'prop-types'
import './index'

const Banner = props => {
    return (
        <div className="owl-carousel owl-single px-0">
            <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("https://f4.photo.talk.zdn.vn/9000463066218889915/0d58a12fc8dc34826dcd.jpg")', height: '100%' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto align-self-center">
                            <div className="site-block-cover-content text-center">
                                <h1 className="mb-0"><strong className="text-primary">Dầu tỏi</strong> DIỆP CHI</h1>
                                <div className="row justify-content-center mb-5">
                                    <div className="col-lg-6 text-center">
                                        <p>Sản phẩm AN TOÀN TUYỆT ĐỐI cho trẻ sơ sinh và trẻ nhỏ</p>
                                    </div>
                                </div>
                                <p><a href="#" className="btn btn-primary px-5 py-3">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

Banner.propTypes = {

}

export default Banner
