import {QUERY_KEY} from '@constants/queryKey';
import {useRequestGetLocalSearch} from '@hooks/useRequestGetLocalSearch';
import {VStack, Text} from '@pin-to-gather/ui';
import {useQuery} from '@tanstack/react-query';
import {LocalItem} from '@type/model';

interface ListProps {
  query: string;
}

interface ItemProps {
  item: LocalItem;
}

export function LocaleSearchItemList({query}: ListProps) {
  const {data} = useRequestGetLocalSearch(query);
  return <VStack gap={4}>{data?.items.map((item: LocalItem) => <LocaleSearchItem item={item} />)}</VStack>;
}

export function LocaleSearchItem({item}: ItemProps) {
  return (
    <VStack gap={2} p={4}>
      <Text textSize="bodyBold">{item.title}</Text>
      <Text textSize="caption">{item.roadAddress}</Text>
    </VStack>
  );
}
