import {useRequestGetLocalSearch} from '@hooks/useRequestGetLocalSearch';
import {VStack, Text} from '@pin-to-gather/ui';
import {LocalItem} from '@type/model';
import {useEffect} from 'react';

interface ListProps {
  query: string;
  onSearch: (result: LocalItem[]) => void;
}

interface ItemProps {
  item: LocalItem;
}

export function LocaleSearchItemList({query, onSearch}: ListProps) {
  const {data} = useRequestGetLocalSearch(query);

  useEffect(() => {
    if (data) {
      onSearch(data.items);
    }
  }, [data, onSearch]);

  return (
    <VStack gap={4}>{data?.items.map((item: LocalItem) => <LocaleSearchItem key={item.title} item={item} />)}</VStack>
  );
}

export function LocaleSearchItem({item}: ItemProps) {
  return (
    <VStack gap={2} p={4}>
      <Text textSize="bodyBold">{item.title}</Text>
      <Text textSize="caption">{item.roadAddress}</Text>
    </VStack>
  );
}
