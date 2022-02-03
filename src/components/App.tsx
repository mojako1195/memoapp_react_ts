import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  // 入力値
  const [text, setText] = useState<string>("");
  // メモ一覧
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 追加ボタン
  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  // 削除ボタン
  const onClickDelete = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
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
