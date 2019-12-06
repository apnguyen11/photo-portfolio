

const SkaterCard = (props) => {
    console.log(props.action)
  

        
    return (
            <div className="card p-3 text-center">
                <img className={props.cardClass} src={props.src} alt="Card image cap" onClick={props.action}/>
                <SkateModule />
                <div className="card-block">
                    <h4 className="card-title">{props.name} </h4>
                    <p>{props.trick}</p>
                        <small className="text-muted">
                                {props.location}<cite title="Source Title"></cite>
                        </small>
                </div>
            </div>
    )
}

const SkateModule = (props) => {
   
   
    return (
        <div id={props.divId} className="modal">
         <img src={props.src} className="modal-content" id={props.moduleID}/>
        </div>
    )
}
class App extends React.Component{
    state = {
        skaters: [
            {
                id: 1,
                moduleID: "img01",
                divId: "myModal1",
                cardClass: "card-img-top img-fluid myImg1",
                name: "David Langston",
                trick: "Backside Flip",
                location: "New York City",
                src: "images/David Bs Flip.jpg"
            },
            {
                id: 2,
                moduleID: "img02",
                divId: "myModal2",
                cardClass: "card-img-top img-fluid myImg2",
                name: "Jagger Eaton",
                trick: "Blunt Slide",
                location: " Dalls, Texas",
                src: "images/Dallas blunt.jpg"
            },
            {
                id: 3,
                moduleID: "img03",
                divId: "myModal3",
                cardClass: "card-img-top img-fluid myImg3",
                name: "Roddie Froderick",
                trick: "Frontside Smith",
                location: "San Francisco, California",
                src: "images/Roddie Smith.jpg"
            
            }, 
            {
                id:4,
                moduleID: "img04",
                divId: "myModal4",
                cardClass: "card-img-top img-fluid myImg4",
                name: "George Karvounis",
                trick: "Fronstide Boardslide",
                location: "San Francisco, California",
                src: "images/George Fs Board.jpg"
            },
            {
                id:5,
                moduleID: "img05",
                divId: "myModal5",
                cardClass: "card-img-top img-fluid myImg5",
                name: "Henry Gartland",
                trick: "Nose Blunt",
                location: "Downtown Houston (Underground Tunnels)",
                src: "images/Henry Nose Blunt.jpg"
            },
            {
                id:6,
                moduleID: "img06",
                divId: "myModal6",
                cardClass: "card-img-top img-fluid myImg6",
                name: "Roddie Frederick",
                trick: "Ollie",
                location: "San Francisco, California",
                src: "images/Roddie Ollie.jpg"
            }
           

        ]
    }
    handleClick = (ev) => {
        console.log('clicked')
        // const stateCopy = [...this.state]
        // console.log(ev.target.src)
        // var test = document.getElementById(stateCopy.skaters[0].divId)
        // test.style.display = "block";
        // var newSrc = this.src;
        // modalImg1.attr('src', newSrc);

    }
    render(){
       
        const cards = this.state.skaters.map((obj) =>  <SkaterCard key={obj.id} cardClass={obj.cardClass} src={obj.src} name={obj.name} trick={obj.trick} location={obj.location} action={this.handleClick}/>)
        return(
           cards 
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("mainCard"))



// var modal1 = document.getElementById('myModal1');

// var img1 = $('.myImg1');
// var modalImg1 = $("#img01");
// var captionText = document.getElementById("caption");
// img1.click(function(){
//     modal1.style.display = "block";
//     var newSrc = this.src;
//     modalImg1.attr('src', newSrc);
// });

// modal1.onclick = function(event) {
//   console.log(333)
//   if (event.target == modal1) {
//     console.log('clicked')
//   modal1.style.display = "none";
//   }
// }