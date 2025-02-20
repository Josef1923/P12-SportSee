export default class UserPerformance {
    constructor(performanceData) {
        this.data = performanceData.data.map((item) => ({
            value: item.value,
            kind: performanceData.kind[item.kind], // Remplace le numéro de `kind` par son libellé
        }));
    }
}