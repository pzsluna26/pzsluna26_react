import TailButton from "./TailButton";

export default function TailSearch({ kwRef, onOk, onCancel }) {
  return (
    <div className="flex gap-2 items-center">
      <form>
        <input
          type="text"
          name="text"
          placeholder="입력하세요."
          ref={kwRef}
          className="border border-gray-500 p-3 rounded-xl"
        />
      </form>

      <TailButton caption="확인" color="blue" onClick={onOk} />
      <TailButton caption="취소" color="blue" onClick={onCancel} />
    </div>
  );
}
