/**
 * =============<< ********* >>=============
 * Author       : Mohammad Farhad
 * Email        : mfarhad.dev@gmail.com
 * Created On   : 2025-06-03
 * Title        : Get Syntax
 * Description  : This is the function which give syntax according to language.
 * Copyright (c) 2025 Mohammad Farhad.
 * =============<< ********* >>=============
 */

const syntaxMap: Record<string, { start: string; middle: string; end: string }> = {
  javascript: { start: '/**', middle: ' * ', end: ' */' },
  typescript: { start: '/**', middle: ' * ', end: ' */' },
  java: { start: '/**', middle: ' * ', end: ' */' },
  c: { start: '/*', middle: ' * ', end: ' */' },
  cpp: { start: '/*', middle: ' * ', end: ' */' },
  python: { start: '"""', middle: '', end: '"""' },
  shellscript: { start: '###', middle: '# ', end: '###' },
  ruby: { start: '=begin', middle: '', end: '=end' },
  html: { start: '<!--', middle: '  ', end: '-->' },
  css: { start: '/*', middle: ' * ', end: ' */' },
  php: { start: '/**', middle: ' * ', end: ' */' },
};

function getSyntax(langId: string) {
  return syntaxMap[langId.toLowerCase()] || { start: '/**', middle: ' * ', end: ' */' };
}

export default getSyntax;