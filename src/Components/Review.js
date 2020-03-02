import React from 'react';
import '../App.css';

function Reviews(){
    const users = [
      {
        "id": 1,
        "name": "Akmal Fahlevi",
        "review": "Sepatunya bagus.",
        "photo": "https://cdn0-production-images-kly.akamaized.net/DL7dtefqVT-rkJwD66OziAFmR2I=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1321483/original/049732500_1471529923-DAUS_MINI_-_JOHAN_TALLO__6_.jpg"
      },
      {
        "id": 2,
        "name": "Yusril Agisha",
        "review": "Sepatunya keren banget.",
        "photo": "https://thenypost.files.wordpress.com/2017/04/kim-jong-un1.jpg?quality=90&strip=all&w=1200"
      },
      {
        "id": 3,
        "name": "Jaki Andika",
        "review": "Kemahalan harganya.",
        "photo": "https://s3media.freemalaysiatoday.com/wp-content/uploads/2018/09/jack-ma-reuters-20092018.jpg"
      }
    ];
    const listReview = users.map((itemReview) =>
    <div key={itemReview.id} className="Item">
    <img src={itemReview.photo} alt="Ultraboost 20 Shoes"></img>
    <div className="User">
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
  </div>
    );
    return(
      <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
    );
  }
  
export default Reviews;  