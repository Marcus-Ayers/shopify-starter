import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row  gap-4 py-5', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx(
        'm-h-[350px] relative aspect-square h-[350px] max-w-full overflow-hidden transition-opacity',
        props.className
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;
export default Grid;
