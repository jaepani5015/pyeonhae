import React from 'react';

import '../../css/seven_card.css';

const Seven = () => {
    return (
        <div id='wrap_seven'>
            {/* 상단 로고 행사 안내 */}
            <div className='header'>
                <div className='logo'>
                    <img src='./image/logo_seven.png' title='store logo seven' />
                </div>
                <div className='event'>
                    <img src='./image/1+1_cu.png' title='store event' />
                </div>
            </div>

            {/* 제품 */}
            <div className="content">
                <div className="product">
                    <img src='./image/cu_product.jpg' title='store product image' />
                </div>
            </div>

            {/* 제품설명 */}
            <div className="footer">
                <div className="desc">
                    <span className="title">롯데푸드)요구하이 145ml</span>
                    <span className="star">[별점]</span>
                    <span className="price">1,000원</span>
                </div>

                <div className="comment">
                    <img src='./image/1+1_cu.png' title='댓글' />
                </div>
            </div>
        </div>
    );
}

export default Seven;