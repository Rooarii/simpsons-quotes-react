import React, {Component} from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';

class QuoteCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite: false,
        }
    }
    render() {
        return (
            <figure className="QuoteCard">
                <img src={this.props.image} alt="{this.props.character}"/>
                <figcaption>
                    <blockquote>
                        {this.props.quote}
                    </blockquote>
                    <p>
                        <cite>{this.props.characterFirstName} {this.props.characterLastName}</cite>
                        <span className={this.state.favorite? "is-favorite":""}
                            onClick={event=>{
                                const newFavorite = !this.state.favorite;
                                this.setState({ favorite: newFavorite });
                                console.log(this.state.favorite);
                            }}
                        >&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        );
    }
}
QuoteCard.propTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
  };
export default QuoteCard;

// function QuoteCard (props){
//     return (
//         <figure className="QuoteCard">
//             <img src={props.image} alt="{props.character}"/>
//             <figcaption>
//                 <blockquote>
//                     {props.quote}.
//                 </blockquote>
//                 <cite>{props.characterFirstName} {props.characterLastName}</cite>
//             </figcaption>
//         </figure>
//     )
// };

// QuoteCard.propTypes = {
//     characterFirstName: PropTypes.string.isRequired,
//     characterLastName: PropTypes.string.isRequired,
//   };
// export default QuoteCard;