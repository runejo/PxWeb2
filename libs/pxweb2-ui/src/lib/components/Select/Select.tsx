import cl from 'clsx';
import classes from './Select.module.scss';
import Label from '../Typography/Label/Label';
import Button from '../Button/Button';

export interface SelectProps {
  variant?: 'default' | 'inVariableBox';
  label: string;
  hideLabel?: boolean;
}

export function Select({
  variant = 'default',
  label,
  hideLabel = false,
}: SelectProps) {
  return (
    <div>
      {variant === 'default' ? (
        DefaultSelect(hideLabel, label)
      ) : (
        VariableBoxSelect(label)
      )}
    </div>
  );
}

function DefaultSelect(hideLabel: boolean, label: string) {
  return (
    <div className={cl(classes.select)}>
      <div
        className={cl(classes.labelWrapper, {
          [classes.visuallyHidden]: hideLabel,
        })}
      >
        <Label size="medium" textcolor="default">
          {label}
        </Label>
      </div>
      <div className={cl(classes.contentLayout, classes.contentStyle)}>
        <span className={cl(classes.optionLayout, classes.optionTypography)}>
          Default option with a very long text
        </span>
        <Button
          variant="tertiary"
          icon="ChevronDown"
          size="small"
          aria-label={'Button with icon'}
        ></Button>
      </div>
    </div>
  );
}

function VariableBoxSelect(label: string) {
  return (
    <div className={cl(classes.selectVariabelbox)}>
    <div className={cl(classes.textWrapper)}>
      <Label size="small" textcolor="default">
        {label}
      </Label>
      <span
        className={cl(
          classes.optionLayoutVariablebox,
          classes.optionTypography
        )}
      >
        Default option with very loooong text
      </span>
    </div>
    <Button
      variant="tertiary"
      icon="ChevronDown"
      size="small"
      aria-label={'Button with icon'}
    ></Button>
  </div>    
  );
}


export default Select;
