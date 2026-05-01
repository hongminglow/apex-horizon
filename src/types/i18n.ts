export type SupportedLanguage = 'en' | 'zh';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
}
