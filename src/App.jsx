import { useState } from 'react';
import './App.css';

// Import your custom components
import Header from './Components/Header/Header';
import Posts from './Components/Post/Posts';
import Marks from './Components/Mark/Marks';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  const [bookMarks, setbookMarks] = useState([]);
  const [marks, setMarks] = useState(0);

  const handleBookmarks = (item) => {
    const newBookMarks = [...bookMarks, item];
    setbookMarks(newBookMarks);
  };

  const handleMarks = (mark, id) => {
    const newMarks = marks + mark;
    setMarks(newMarks);
    const updateBookmarks = bookMarks.filter((item)=> item.id !== id);
    setbookMarks(updateBookmarks);
  };

  return (
    <div className='container mx-auto px-36'>
      <Header />
      <div className='grid grid-cols-6 gap-4 py-2 font-bold text-3xl'>
        <Posts handleBookmarks={handleBookmarks} handleMarks={handleMarks} />
        <div className='col-span-2'>
          <Marks marks={marks} />
          <Bookmarks bookMarks={bookMarks} />
        </div>
      </div>
    </div>
  );
}

export default App;
