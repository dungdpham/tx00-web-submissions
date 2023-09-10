import React, { useState } from 'react';

const Review = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="review">
      <div className="item-info">
        <h4>{item.name}</h4>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>
      </div>
      {expanded && <p className="description">{item.description}</p>}
    </article>
  );
};

export default Review;