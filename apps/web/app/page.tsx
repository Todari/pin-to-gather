'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Container, Input, VStack, Button} from '@pin-to-gather/ui';
import {useRequestPostBoard} from '@hooks/useRequestPostBoard';

export default function MainPage() {
  const [boardTitle, setBoardTitle] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const {mutate: postBoard, data, isSuccess, isError, error} = useRequestPostBoard();

  const handleBoardTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postBoard(boardTitle);
  };

  useEffect(() => {
    console.log(data, error);
    if (isSuccess) {
      router.push(`/${data?.uuid}`);
    }
    if (isError) {
      setErrorMessage(error.message);
    }
  }, [isSuccess, data, isError, error]);

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
