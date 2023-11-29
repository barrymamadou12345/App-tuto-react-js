
import React from 'react'

export const Formulaire = ({ onSubmit }) => {
  return (
    <div>
      <form className="tweet-form" onSubmit={onSubmit}>
        <h4>New tweet</h4>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="content" placeholder="content" />
        <input type="submit" />
      </form>
    </div>
  );
};
