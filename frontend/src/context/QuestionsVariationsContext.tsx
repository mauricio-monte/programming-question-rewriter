import React, { createContext, useState } from "react";

type QuestionsVariationsContextProps = {
  questionsVariations: string[];
  setQuestionsVariations: React.Dispatch<React.SetStateAction<string[]>>;
};

const DEFAULT_VALUE = {
  questionsVariations: [],
  setQuestionsVariations: () => {},
};

const QuestionsVariationsContext =
  createContext<QuestionsVariationsContextProps>(DEFAULT_VALUE);

export const QuestionsVariationsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [questionsVariations, setQuestionsVariations] = useState(
    [] as string[]
  );

  return (
    <QuestionsVariationsContext.Provider
      value={{ questionsVariations, setQuestionsVariations }}
    >
      {children}
    </QuestionsVariationsContext.Provider>
  );
};

export default QuestionsVariationsContext;
