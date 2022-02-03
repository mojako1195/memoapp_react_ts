import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/udeMemoList";

export const App: FC = () => {
  // カスタムフックから取得
  const { memos, addMemo, deleteMemo } = useMemoList();
  // 入力値
  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 追加ボタン
  const onClickAdd = () => {
    if (text) {
      addMemo(text);
      setText("");
    }
  };

  // 削除ボタン
  const onClickDelete = useCallback(
    (index: number) => {
      deleteMemo(index);
    },
    [deleteMemo]
  );

  return (
    <div>
      <STitle>ふらっとメモ</STitle>
      <SContainer>
        <SInput type="text" value={text} onChange={onChangeText} />
      </SContainer>
      <SContainer>
        <SButton onClick={onClickAdd}>追加</SButton>
      </SContainer>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const STitle = styled.h1`
  text-align: center;
`;

const SInput = styled.input`
  margin-top: 10px;
  font-family: cursive;
  border: 1px solid #acacac;
  color: #fff;
  opacity: 0.7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 400px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  font-size: 16px;
  outline: none;
  background-color: #acacac;
`;

const SContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SButton = styled.button`
  display: inline-block;
  border: 1px solid #fc9a18;
  background: #fc9a18;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  width: 100px;
  color: #fff;
  font-size: 16px;
`;
