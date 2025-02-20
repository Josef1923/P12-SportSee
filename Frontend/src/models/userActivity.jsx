export default class UserActivity {
    constructor(activityData) {
        this.sessions = activityData.sessions.map((session, index) => ({
            ...session,
            day: (index + 1).toString(), // Convertit la date en index et en string pour l'affichage
        }));
    }
}