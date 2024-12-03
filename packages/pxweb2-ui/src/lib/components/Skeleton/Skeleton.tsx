import classes from './Skeleton.module.scss';

/* eslint-disable-next-line */
export interface SkeletonProps {
  width: string;
  height: string;
}

export function Skeleton({ width, height }: SkeletonProps) {
  return (
    <div
      aria-label="placeholder"
      className={classes.skeleton}
      style={{ width: width, height: height }}
    ></div>
  );
}

export default Skeleton;