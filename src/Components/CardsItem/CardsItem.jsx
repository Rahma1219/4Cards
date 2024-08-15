import './CardsItem.css'


function CardsItem(props) {
    return (
        <div className={props.class}>
             <div id='cards'  className={props.status}>
         
              <h3 id='titlecard'>{props.Tn}</h3>
               <p id='paracard'>{props.ParaCard}</p>
               <img src={props.CardIcon} alt="notfound" />
              </div>

        </div>


       


    );


}

export default CardsItem
// if (item.status == "Supervisor") {
    
// }else{
//     //slow red dot
// }