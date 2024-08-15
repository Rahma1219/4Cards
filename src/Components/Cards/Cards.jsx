import './Cards.css'
import SupervisorIcon from '../../assets/images/icon-supervisor.svg'
import TeamIcon from '../../assets/images/icon-team-builder.svg'
import KarmaIcon from '../../assets/images/icon-karma.svg'
import CalculatorIcon from '../../assets/images/icon-calculator.svg'
import CardsItem from '../CardsItem/CardsItem'

function Cards() {

    const ArrayCards =[
        {
            
            Tn:'Supervisor',
            ParaCard:"Monitors activity to identify project roadblocks",
            CardIcon:SupervisorIcon,
            id:1,
            status :'color1',
            class:'grid1'
           
           
        },
        {
            
            Tn:'Team Builder',
            ParaCard:"Scans our talent network to create the optimal team for your project",
            CardIcon:TeamIcon,
             id:2,
            status :'color2',
            class:'grid2'
           

        },
        {
            
            Tn:'Karma',
            ParaCard:"Regularly evaluates our talent to ensure quality",
            CardIcon:KarmaIcon,
            id:3,
            status :'color3',
            class:'grid3'

        },
        {
            
            Tn:'Calculator',
            ParaCard:"Uses data from past projects to provide better delivery estimates",
            CardIcon:CalculatorIcon,
            id:4,
            status :'color4',
            class:'grid4'
        }

    ];
    return (
        <div id='Boxs'>

            {ArrayCards.map((item) => {

                return(
           


                    <CardsItem
                     key={item.id}
                     CardIcon={item.CardIcon}
                     Tn={item.Tn}
                     ParaCard={item.ParaCard}
                     status={item.status}
                     class={item.class}

                     >
                        
                       
                    </CardsItem>
                    
                                  
                )
           
         })}
           
        </div>
        

    )

}

export default Cards



// if (item.status == "Supervisor") {
//     Fill(rgba(0, 0, 0, 0.2))
    
// }else{
//     Fill(rgba(0, 0, 0, 0.7))
//     
// }

{/* <div id='cards'>
            <div id='card1'>
                <h3 id='titlecard'>Supervisor</h3>
                <p id='paracard'>Monitors activity to identify project roadblocks</p>
                <img src={SupervisorIcon} alt="notfound" />
            </div>
            <div id='card23'>
            <div id='card2'>
                <h3 id='titlecard'>Team Builder</h3>
                <p id='paracard'> Scans our talent network to create the optimal team for your project </p>
                <img src={TeamIcon} alt="notfound" />
            </div>
            <div id='card3'>
                <h3 id='titlecard'>Karma </h3>
                <p id='paracard'>Regularly evaluates our talent to ensure quality</p>
                <img src={KarmaIcon} alt="notfound" />
            </div>

            </div>
            <div id='card4'>
                <h3 id='titlecard'>Calculator </h3>
                <p id='paracard'>Uses data from past projects to provide better delivery estimates</p>
                <img src={CalculatorIcon} alt="notfound" />
            </div>


        </div> */}