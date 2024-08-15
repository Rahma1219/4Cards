import Cards from '../Cards/Cards'
import './Head.css/'

function Head(){

    return(
        <div id='content'>
            <div id='head'>
            <h1 id='text1'>Reliable, efficient delivery  </h1>
            <h1> <strong>Powered by Technology</strong> </h1> 
            <p id='para'>Our Artificial Intelligence powered tools use millions of project data  points to ensure that your project is successful </p>

            </div>
            <div id='ca'>
                <Cards></Cards>
            </div>
           

        </div>

    )
}
export default Head