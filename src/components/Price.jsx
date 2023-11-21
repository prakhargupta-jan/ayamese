import { CurrencyDollar } from "react-bootstrap-icons";
import PropTypes from "prop-types";
const Price = ({ price }) => {
  if (price < 600) {
    return <CurrencyDollar />;
  } else if (price < 900) {
    return (
      <>
        <CurrencyDollar style={{margin: '0 -6px' }} />
        <CurrencyDollar style={{margin: '0 -6px' }}/>
      </>
    );
  } else {
    return (
      <>
        <CurrencyDollar style={{margin: '0 -6px' }}/>
        <CurrencyDollar style={{margin: '0 -6px' }}/>
        <CurrencyDollar style={{margin: '0 -6px' }}/>
      </>
    );
  }
};

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
