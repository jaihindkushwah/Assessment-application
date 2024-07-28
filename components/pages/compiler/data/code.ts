interface LanguageOptions {
  javascript: string;
  python: string;
  java: string;
  c: string;
  cpp: string;
}
export type LanguageKey = keyof LanguageOptions;

export const defaultCode: LanguageOptions = {
  javascript:
    "console.log('hello world');\n// Your other JavaScript code here;",
  python: "print('hello world')\n# Your other Python code here;",
  java: 'System.out.println("hello world");\n// Your other Java code here;',
  c: 'printf("hello world");\n// Your other C code here;',
  cpp: 'cout << "hello world";\n// Your other C++ code here;',
};
