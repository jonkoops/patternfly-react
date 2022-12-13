import { IFormatterValueType, IFormatter } from '../TableTypes';

const defaultTitle: IFormatter = (data: IFormatterValueType) =>
  data && Object.hasOwn(data, 'title') ? (data.title as any) : data;

export { defaultTitle };
