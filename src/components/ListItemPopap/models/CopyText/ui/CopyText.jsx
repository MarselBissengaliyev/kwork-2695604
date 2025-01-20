import React, { useRef } from "react";

import Copy from "@/app/[country]/listing/[listing_slug]/shared/img/Copy";

const CopyText = ({ text }) => {
  const textRef = useRef(null);

  const handleCopy = () => {
    const textElement = textRef.current;
    if (textElement) {
      const range = document.createRange();
      const selection = window.getSelection();

      range.selectNodeContents(textElement); // Выделяем текст в элементе
      selection.removeAllRanges(); // Сбрасываем текущее выделение
      selection.addRange(range); // Добавляем новое выделение

      try {
        const success = document.execCommand("copy"); // Копируем выделенный текст
        if (success) {
          alert("Текст скопирован!");
        } else {
          alert("Не удалось скопировать текст.");
        }
      } catch (err) {
        console.error("Ошибка копирования:", err);
      }

      selection.removeAllRanges(); // Убираем выделение после копирования
    }
  };

  return (
    <span
      className="tw-flex tw-gap-[8px] tw-items-center"
      ref={textRef}
      onClick={handleCopy}
      style={{ cursor: "pointer" }}
    >
      {text} <Copy />
    </span>
  );
};

export default CopyText;
