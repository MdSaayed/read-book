import propTypes from 'prop-types';

const Bookmark = ({book}) => {
    const {title} = book;
    return (
        <div className="bg-white my-2 px-2 rounded">
            <h2 className="text-[0.8rem] font-">{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    book: propTypes.array
}
export default Bookmark;