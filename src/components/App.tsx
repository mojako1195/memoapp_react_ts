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
    addMemo(text);
    setText("");
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
      <h1>簡易メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
