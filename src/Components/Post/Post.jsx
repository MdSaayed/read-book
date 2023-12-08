import PropTypes from 'prop-types';

const Post = ({ item, handleBookmarks, handleMarks }) => {
    const { cover, title, id, author_img, author, posted_date, hashtag, reading_time } = item;
    return (
        <div className="border-b mb-4">
            <div>
                <img src={cover} alt="" />
            </div>
            <div className="py-6">
                <div className="flex gap-4 items-center">
                    <div><img className="w-[60px]" src={author_img} alt="" /></div>
                    <div className='flex justify-between w-full'>
                        <div>
                            <h2 className="text-[1rem]">{author}</h2>
                            <p className="text-xs text-[#11111199]">{posted_date}</p>
                        </div>
                        <div>
                            <p className="text-[14px] text-[#11111199]">{reading_time} Reading time <i onClick={() => handleBookmarks(item)} className="fa-regular fa-bookmark text-blue-800 cursor-pointer"></i></p>
                        </div>
                    </div>
                </div>
                <h2 className='text-[#111] text-2xl'>{title}</h2>
                <p className='text-[#11111199] text-[18px]'>{hashtag.map((hash, idx) => <span key={idx}>#{hash} </span>)}</p>
                <button onClick={() => handleMarks(reading_time,id)} className='text-xs text-blue-800'>Mark as read</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    item: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarks: PropTypes.func.isRequired
}

export default Post;
