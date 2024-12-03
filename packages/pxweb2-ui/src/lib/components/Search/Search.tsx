import React, { useState, useRef, useEffect } from 'react';
import cl from 'clsx';

import classes from './Search.module.scss';
import { Icon } from '../Icon/Icon';
import { Label } from '../Typography/Label/Label';
import { Button } from '../Button/Button';

export interface SearchProps {
  variant: 'default' | 'inVariableBox';
  labelText?: string;
  searchPlaceHolder?: string;
  showLabel?: boolean;
  variableBoxTopBorderOverride?: boolean;
  ariaLabelIconText?: string;
  arialLabelClearButtonText?: string;
  onChange?: (value: string) => void;
}

export function Search({
  variant,
  labelText,
  searchPlaceHolder,
  showLabel = false,
  ariaLabelIconText = 'Search icon',
  arialLabelClearButtonText = 'Clear search button',
  variableBoxTopBorderOverride = false,
  onChange,
  ...rest
}: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setInputValue('');
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: { keyCode: number }) => {
    if (e.keyCode === 27) {
      handleClear();
    }
  };

  const hasValue = inputValue.length > 0;

  return (
    <div className={cl(classes.search, classes[variant])}>
      {showLabel && <Label size="medium">{labelText}</Label>}
      <div
        tabIndex={0}
        className={cl(classes.wrapper, classes.border, classes[variant], {
          [classes.variableboxSearchAndSelectBorderOverride]:
            variableBoxTopBorderOverride,
        })}
      >
        <Icon
          iconName="MagnifyingGlass"
          className={classes.searchIcon}
          aria-label={ariaLabelIconText}
        ></Icon>
        <input
          type="text"
          ref={inputRef}
          className={cl(
            classes[`bodyshort-medium`],
            classes.input,
            classes[variant]
          )}
          placeholder={searchPlaceHolder}
          value={inputValue}
          onChange={(e) => {
            onChange && onChange(e.target.value);
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          {...rest}
        ></input>
        {hasValue && (
          <Button
            variant="tertiary"
            icon="XMark"
            size="small"
            onClick={() => {
              onChange && onChange('');
              handleClear();
            }}
            aria-label={arialLabelClearButtonText}
          ></Button>
        )}
      </div>
    </div>
  );
}

export default Search;