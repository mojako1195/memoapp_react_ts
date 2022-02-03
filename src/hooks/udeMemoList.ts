import { useCallback, useState } from "react";
import { text } from "stream/consumers";

export const useMemoList = () => {
  // メモ一覧
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加
  const addMemo = useCallback(
    (text: string) => {
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  // メモ削除
  const deleteMemo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addMemo, deleteMemo };
};
