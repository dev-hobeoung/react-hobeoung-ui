export interface RatelTableColumnElement {
  name: string;
  label: React.ReactNode;
  render?: (data: unknown, index: number) => React.ReactNode;
}
