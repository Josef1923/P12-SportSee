export default class UserData {
    constructor(userData) {
        this.id = userData.id;
        this.userInfos = userData.userInfos;
        this.score = userData.todayScore ?? userData.score ?? 0; // Normalisation du score
        this.keyData = userData.keyData;
    }
}