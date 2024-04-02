import cl from 'clsx';
import classes from './Select.module.scss';
import Label from '../Typography/Label/Label';
import Button from '../Button/Button';

/* eslint-disable-next-line */
export interface SelectProps {
  variant?: 'default' | 'inVariableBox';
  showLabel?: boolean;
  labelText?: string;
}

export function Select({ showLabel = false, labelText, variant = 'default' }: SelectProps) {
  return (
      <div className={cl(classes.select)}>
        {showLabel && (
          <div className={cl(classes.labelWrapper)}>
            <Label size="medium" textcolor="default">
              {labelText}
            </Label>
          </div>
        )}
        <div className={cl(classes.contentLayout, classes.contentStyle)}>
          <span
            className={cl(
              classes.defaultOptionLayout,
              classes.defaultOptionTypography
            )}
          >
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

// export default Select;
//     <div className={cl(classes.select)}>
//       {showLabel && (
//         <div className={cl(classes.labelWrapper)}>
//           <Label size="medium" textcolor="default">
//             {labelText}
//           </Label>
//         </div>
//       )}
//       <div className={cl(classes.contentLayout, classes.contentStyle)}>
//         <span
//           className={cl(
//             classes.defaultOptionLayout,
//             classes.defaultOptionTypography
//           )}
//         >
//           Default option with a very long text
//         </span>
//         <Button
//           variant="tertiary"
//           icon="ChevronDown"
//           size="small"
//           aria-label={'Button with icon'}
//         ></Button>
//       </div>
//     </div>
//   ) : ()}
//   );
// }

export default Select;
