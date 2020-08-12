import React from 'react';

import '../css/card.css';

const Card = () => {
    return (
        <div id='wrap'>
            {/* 상단 로고 행사 안내 */}
            <div className='header'>
                <div className='logo'>
                    <img src='./image/logo_cu.png' title='store logo' />
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
                    <div className="title">
                        롯데푸드)요구하이 145ml
                    </div>
                    <div className="star">
                        [별점]
                    </div>
                    <div className="price">
                        1,000원
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src='./image/1+1_cu.png' title='댓글' />
            </div>
        </div>
    );
}

export default Card;