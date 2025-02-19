'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Container, Input, VStack, Button} from '@pin-to-gather/ui';

export default function MainPage() {
  const [boardTitle, setBoardTitle] = useState<string>('');
  const router = useRouter();

  const handleBoardTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container maxW={480}>
      <form onSubmit={handleSubmit}>
        <VStack gap={16}>
          <Input
            inputSize="lg"
            labelText="지도 이름"
            placeholder="예) 이천 여행"
            value={boardTitle}
            onChange={handleBoardTitleChange}
          />
          <Button variants="primary" display="full" buttonSize="lg" type="submit">
            지도 생성하기
          </Button>
        </VStack>
      </form>
    </Container>
  );
}
