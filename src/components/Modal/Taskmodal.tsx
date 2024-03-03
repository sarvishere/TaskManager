import React, { useState } from 'react';

interface TitleFormProps {
  onTitleSubmit: (title: string) => void;
  onClose: () => void;
}

const TitleForm: React.FC<TitleFormProps> = ({ onTitleSubmit, onClose }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTitleSubmit(title);
    onClose();
  };

  return (
    <form className="title-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="title-input"
        />
      </label>
      <button type="submit" className="submit-button">
        Add Event
      </button>
    </form>
  );
};

export default TitleForm;
