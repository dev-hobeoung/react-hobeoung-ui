export interface RatelTableColumnElement {
  name: string;
  label: React.ReactNode;
  render?: (data: unknown) => React.ReactNode;
}
