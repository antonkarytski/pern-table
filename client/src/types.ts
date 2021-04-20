export type TableSchema = {
  id: number;
  name: string;
  quantity: number;
  distance: number;
  date: string;
};

export type SchemaField = keyof TableSchema;
