import {LocalItem} from '@type/services';

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
      {item.title.replace(/<b>/g, '').replace(/<\/b>/g, '')}
    </div>
  );
}
