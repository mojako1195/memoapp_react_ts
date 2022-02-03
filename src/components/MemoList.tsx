import { FC } from "react";
import styled from "styled-components";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <h3>メモ一覧</h3>
      <ul>
        {memos.map((memo, index) => {
          return (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          );
        })}
      </ul>
    </SContainer>
  );
};

const SButton = styled.button`
  margin-left: 16px;
  display: inline-block;
  border: 1px solid #fc9a18;
  background: #fc9a18;
  padding: 3px;
  border-radius: 8px;
  text-align: center;
  width: 50px;
  color: #fff;
  font-size: 14px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
