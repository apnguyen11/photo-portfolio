

const SkaterCard = (props) => {
    return (
            <div className="card p-3 text-center">
                <img className={props.cardClass} src={props.src} alt="Card image cap"/>
                <SkateModule action={props.action}/>
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
        <div id={props.divId} class="modal" onClick={props.action}>
            <img src={props.src} class="modal-content" id={moduleID}/>
        </div>
    )
}
class App extends React.Component{
    state = {
        skaters: [
            {
                moduleID: "img01",
                divId: "myModal1",
                cardClass: "card-img-top img-fluid myImg1",
                name: "David Langston",
                trick: "Backside Flip",
                location: "New York City",
                src: "images/David Bs Flip.jpg"
            },
            {
                moduleID: "img02",
                divId: "myModal2",
                id: "card-img-top img-fluid myImg2",
                name: "Jagger Eaton",
                trick: "Blunt Slide",
                location: " Dalls, Texas",
                src: "images/David Bs Flip.jpg"
            },
            {
                moduleID: "img03",
                divId: "myModal3",
                id: "card-img-top img-fluid myImg3",
                name: "Roddie Froderick",
                trick: "Frontside Smith",
                location: "San Francisco, California",
                src: "images/David Bs Flip.jpg"
            
            }
        ]
    }
    handleClick = () => {
        const stateCopy = [...this.state]
        console.log('photoclicked')
    }
    render(){
        return(
            <SkaterCard cardClass={this.state.skaters.cardClass}/>
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