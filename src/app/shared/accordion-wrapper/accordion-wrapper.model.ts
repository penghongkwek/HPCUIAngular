let nextId = 0;

export class AccordionHeaderModel {
    id?: string;
    title: string;
    description?: string;
    expanded?: boolean;

    constructor(obj?: AccordionHeaderModel) {
        this.id = obj.id || `uic-accordion-${nextId++}`;
        this.title = obj.title || '';
        this.description = obj.description || '';
        this.expanded = obj.expanded || false;
    }
}
