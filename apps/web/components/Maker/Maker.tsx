import {LocalItem} from '@type/model';
import {COLORS} from '@pin-to-gather/ui';

interface Props {
  item: LocalItem;
}

export function Maker({item}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        maxWidth: '280px',
        background: 'rgba(255, 255, 255, 0.8)',
        border: `1px solid ${COLORS.primary}`,
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      <p style={{fontFamily: 'pretendard', fontSize: '1rem', fontWeight: 'bold', color: COLORS.black}}>{item.title}</p>
      <p style={{fontFamily: 'pretendard', fontSize: '0.75rem', color: COLORS.gray}}>{item.roadAddress}</p>
    </div>
  );
}
