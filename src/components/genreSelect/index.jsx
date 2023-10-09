import React, { useState } from "react";
import './styles.css';

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  let [expanded, setExpanded] = useState(false);
  const [checkedValues, setCheckedValues] = useState([ selectedGenre, true ]);

  const handleOnChange = (event, genre) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== value)
      );
    }
    onSelect(checkedValues);
  }

  return (
    <div className="genre-select-container">
      <label className="genre-select-label">Genre</label>
      <div className={`genre-select-toggle ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)} tabIndex="0">Select Genre</div>
      <div className="genre-options">
        {genres.map((genre) => (
          <div key={genre} className="genre-option">
            <label className="genre-container">{genre}
              <input 
                type="checkbox" 
                value={genre} 
                checked={checkedValues.includes(genre)} 
                onChange={event => handleOnChange(event, genre)} 
                className="genre-checkbox"
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
