"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface RedirectButtonProps {
  url: string;
  text: string;
  color: string;
}

const RedirectButton: FC<RedirectButtonProps> = ({ url, text, color }) => {
  const { push } = useRouter();

  return (
    <button
      className={color}
      onClick={() => {
        push(url);
      }}
    >
      {text}
    </button>
  );
};

export default RedirectButton;
