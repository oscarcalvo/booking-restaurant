export class Utils {
  public sanitizeString(text: string, convertLowercase: boolean);
  public sanitizeString(text: string);
  public sanitizeString(
    text: string,
    convertLowercase: boolean = true
  ): string {
    if (!text) {
      return null;
    }
    return convertLowercase ? text.trim().toLocaleLowerCase() : text.trim();
  }
}
export const utils = new Utils();
