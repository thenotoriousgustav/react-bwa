import React from 'react';
import './App.css';
import ReviewItems from './Components/Review'
import img from './shoes.jpg'
import PropTypes from 'prop-types'

function App() {
  return (
    <div className="Parentbox">
      <FotoProduct/>
      <ProductInfo 
      isDiscount="Yes"
      Category="RUNNING" 
      Tittle="Ultraboost 20 Shoes" 
      Price="IDR 3.000.000" 
      Info=" The Ultraboost was revolutionary when it was released in 2015.
      Runners raved about the comfort and responsiveness of the midsole cushioning.
      These adidas Ultraboost 20 Shoes continue that tradition.
      Feel supported in the foot-hugging reinforced knit upper.
      Responsive cushioning adds energy to your stride.
      "/>
      <ReviewItems/>
    </div>
  );
}

function FotoProduct(){
  return(
  <div className="Foto">
    <img src= { img } alt="Ultraboost 20 Shoes"></img>
  </div>
  );
}

function CheckDiscount(props){
  const { isDiscount, discount } = props;
  if (isDiscount === "Yes"){
    return(
      <p>Discount { discount }% Off</p>
    );
  }
  else if(isDiscount === "Coming"){
    return(
      <p>Coming soon Disocunt 40%</p>
    );
  }
  else{
    return(
      <p>There is no Discount</p>
    );
  }
}

function ProductInfo(props) {
  const { Category, Tittle, isDiscount, Price, Info } = props;
  const benefits = ["Locked-in feel", "Lace closure", "Responsive Boost midsole"];
  const listBenefits = benefits.map((itemsBenefits) =>
    <li key={itemsBenefits}>{itemsBenefits}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Category">{ Category }</p>
        <h1 className="Tittle">{ Tittle }</h1>
        <p className="Price">{ Price }</p>
        <CheckDiscount isDiscount={ isDiscount } discount={50}/>
        <p className="Info">{ Info }</p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(Tittle, e) } href="/">Add to cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
  return alert("Buying " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
