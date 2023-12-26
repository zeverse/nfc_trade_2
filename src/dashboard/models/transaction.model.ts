export class TransactionData {
    labels: string[];
    datasets: any[];

    constructor(labels: string[], datasets: any[]) {
        this.labels = labels;
        this.datasets = datasets;
    }
}