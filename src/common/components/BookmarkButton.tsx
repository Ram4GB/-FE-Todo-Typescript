/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

interface IProps {
    isChecked?: boolean,
}

export default function BookmarkButton(props: IProps) {
  const [checked, setChecked] = useState(false);
  const { isChecked } = props;

  useEffect(() => {
    setChecked(!!isChecked);
  }, [isChecked]);

  const handleClickCheckBox = () => {
    setChecked(!checked);
  };
  return (
    <div
      onClick={handleClickCheckBox}
      className="list-todo__item-bookmark"
    >
      {checked ? <i className="fas fa-star" /> : <i className="far fa-star" />}
    </div>
  );
}

BookmarkButton.defaultProps = {
  isChecked: false,
};
