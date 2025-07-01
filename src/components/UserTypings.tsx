import Caret from "./Caret";
import clsx from 'clsx';

export default function UserTypings({ userInput, className, words }: { userInput: string, words: string, className?: string }) {
  const typedCharacters = userInput.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character key={index} actual={char} expected={words[index]} />
      ))}
      <Caret />
    </div>
  )
}

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  const className = clsx({
    'text-red-500': !isCorrect && !isWhiteSpace,
    'text-yellow-400': isCorrect && !isWhiteSpace,
    'bg-red-500/50': !isCorrect && isWhiteSpace,
  });

  return (
    <span className={className}>
      {expected}
    </span>
  )
}