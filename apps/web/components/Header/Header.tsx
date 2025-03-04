import {LocaleSearchItemList} from '@components/LocaleSearchItem/LocaleSearchItem';
import {Button, HStack, Input, useTheme, VStack} from '@pin-to-gather/ui';
import {LocalItem} from '@type/model';
import {useState} from 'react';

interface Props {
  onSearch: (result: LocalItem[]) => void;
}

export function Header({onSearch}: Props) {
  const {theme} = useTheme();
  const [query, setQuery] = useState('');
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (query.length === 0) {
      setShowSearchResult(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSearchResult(true);
  };

  return (
    <VStack gap={8} bg={theme.colors.white} p="1rem 2rem">
      <form onSubmit={handleSearch} style={{width: '100%'}}>
        <HStack gap={8}>
          <Input placeholder="지역 검색하기" value={query} onChange={handleChangeQuery} />
          <Button type="submit">검색</Button>
        </HStack>
      </form>
      {showSearchResult && <LocaleSearchItemList query={query} onSearch={onSearch} />}
    </VStack>
  );
}
