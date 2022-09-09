export interface RatelTableColumnElement {
  name: string;
  label: React.ReactNode;
  render?: (value: unknown) => React.ReactNode;
}
