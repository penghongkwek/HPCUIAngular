export class StepsNavWrapperModel {
    id: string;
    label: string;
    icon?: string;
    command?: (event?: any) => void;
    routerLink?: any;
    disabled?: boolean;
    queryParams?: { [k: string]: any };
}
