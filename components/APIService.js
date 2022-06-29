export default class APIService {
  static GetLeaderboard() {
    return fetch("http://127.0.0.1:8000/api/leaderboard/").then((res) =>
      res.json()
    );
  }
}
