declare namespace QuotationExcelHandler {
  export function convertExcel(
    file: File,
    template: string,
    errorHandler: (msg: string) => void,
    type?: 'csv' | 'xlsx',
    clearWhiteSpace = true
  ): void;
  export function excelToJson(file: File, jsonHandler: (data: any[]) => void);
  export const channelTemplateList: { name: string; template: string }[];
}

export = QuotationExcelHandler;
