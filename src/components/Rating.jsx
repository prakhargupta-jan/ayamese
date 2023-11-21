import PropTypes from "prop-types";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

const Rating = ({value}) => {
    return <div className="flex py-2" title={value} >
       {Array(Math.floor(1*value)).fill(null).map((_, i) => <span key={i} className="pr-1"><StarFill /></span>)}
       {!Number.isInteger(value) && <span className="pr-1"><StarHalf/></span>}
       {Array(5-Math.ceil(value)).fill(null).map((_, i) => <span key={i} className="pr-1"><Star /></span>)}
    </div>;
}
Rating.propTypes = {
    value: PropTypes.number
}
 
export default Rating;