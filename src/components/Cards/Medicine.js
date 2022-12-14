import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import medicine from '../../assests/medicine.jpeg';
import './medicine.css';

const Medicine = () => {
  return (
    <div className='wrapper'>
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
      <Card
          img={medicine}
          title='Favipiravir 400mg (Fabiflu) Tablets'
          price='Rs 1,775'
          half_price=' / stripe'
          Company='Glenmark Pharmaceutical Limited' 
          location='PARVAT PATIYA, SURAT, GUJRAT'
      />
        
    </div>
  )
}

function Card(props){
    const style = {color: "aqua"}
    return(
    <div className="medicine_container">
        <div className="medicine_cards">
            <img src={props.img} className='product_img' />
            <div className="medicine_body">
            <h2 className='card__title'>{props.title}</h2>
           <h3 className='card__price'>{props.price}
            <small className='price__offer'>{props.half_price}</small>
             </h3>
             <div className='card__description'>{props.Company}<br></br>
             <small className='card__location'>{props.location}</small>
            </div><hr/>
            <button className='card__btn'><FaTelegramPlane style={style}/>Contact Supplier</button>

            </div>
        </div>
    </div>
    )
  
  }
  

export default Medicine