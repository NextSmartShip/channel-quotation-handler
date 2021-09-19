declare namespace convertExcelToCsv {
  export function convertExcelToCsv(
    file: File,
    template: string,
    errorHandler: (msg: string) => void
  ): void;
  export const channelTemplateList: { name: string; template: string }[];
}

export = convertExcelToCsv;
