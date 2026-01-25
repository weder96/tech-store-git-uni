
const Rating = ({ totalStars = 5 , quantity = 0}) => {  

  const starNext = 5 - totalStars ;

  return (
    <div className="rating-container">
      {[...Array(totalStars)].map((_, index) => {        
        return (
          <span
            key={index}
            className='star filled'            
          >
            ★
          </span> 
        );
      })} 
      {[...Array(starNext)].map((_, index) => {        
        return (
          <span
            key={index}
            className="star next"            
          >
            ★
          </span> 
        );
      })} 

      ( <span className="text-base font-bold">  {quantity}  </span> )
    </div>
  );
};

export default Rating;