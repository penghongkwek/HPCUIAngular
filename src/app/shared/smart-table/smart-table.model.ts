export class SmartTableModel {
    id: string;
    label: string;
    command?: (event?: any) => void;
    queryParams?: { [k: string]: any };
}
