import React from 'react';
import Backitem from '../../components/Backitem';
import './BookmarkList.css';

function Bookmarks() {
  return (
    <div>
      <Backitem />
      <div className="bookmarktext"> 북마크 목록 </div>
    </div>
  );
}

export default Bookmarks;
