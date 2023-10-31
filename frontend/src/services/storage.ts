const STORAGE_OPENAI_KEY = "openAIKey";

export function saveOpenAIKey(openAIKey: string) {
  localStorage.setItem(STORAGE_OPENAI_KEY, openAIKey);
}

export function getOpenAIKey(): string | null {
  return localStorage.getItem(STORAGE_OPENAI_KEY);
}
