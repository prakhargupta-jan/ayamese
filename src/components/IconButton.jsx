import PropTypes from 'prop-types';

const IconButton = ({icon, text, onClick, color}) => {
    return <div onClick={onClick || (() => null)} className={`text-[${color}]`}>
        <div className='flex justify-center pb-1'>{icon}</div>
        <div className={`text-[8px] flex justify-center `}>{text}</div>
    </div>;
}

IconButton.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
}

export default IconButton;