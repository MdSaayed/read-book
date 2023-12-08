import Bookmark from "./Bookmark";
import propTypes from 'prop-types'

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className=" bg-[#1111110D]  p-4 rounded">
            <h1 className="text-[1rem]">Bookmarked Post:{bookMarks.length}</h1>
            {bookMarks.map((book, idx) => <Bookmark key={idx} book={book} />)}
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: propTypes.object
}

export default Bookmarks;