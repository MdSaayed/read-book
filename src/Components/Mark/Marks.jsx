import Mark from './Mark';
import PropTypes from 'prop-types';

const Marks = ({marks}) => {

    return (
        <div className='bg-[#1111110D]  p-4 rounded mb-4'>
            <Mark marks={marks} />
        </div>
    );
};
Marks.PropTypes = {
    marks : PropTypes.number
}

export default Marks;