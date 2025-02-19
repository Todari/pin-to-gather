import {LocalItem} from '@type/model';

interface Props {
  item: LocalItem;
}

export function Maker({item}: Props) {
  return (
    <div
      style={{
        backgroundColor: 'red',
      }}
    >
      {item.title}
    </div>
  );
}
