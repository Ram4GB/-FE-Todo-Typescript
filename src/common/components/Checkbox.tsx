/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

interface IProps {
    isChecked?: boolean,
}

export default function Checkbox(props: IProps) {
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
      className={classNames('checkbox', {
        'checkbox--active': checked,
      })}
    />
  );
}

Checkbox.defaultProps = {
  isChecked: false,
};
