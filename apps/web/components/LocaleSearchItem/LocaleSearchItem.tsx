import { VStack, Text } from "@pin-to-gather/ui";
import { LocalItem } from "@type/services";

interface Props {
  item: LocalItem;
}

export function LocaleSearchItem({item}: Props) {
  return <VStack gap={4}>
    <Text size="bodyBold">{item.title}</Text>
    <Text size="caption">{item.description}</Text>
    <Text size="caption">{item.roadAddress}</Text>
  </VStack>;
}

