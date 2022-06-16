export default class APIService {
  static GetLeaderboard() {
    return fetch("http://127.0.0.1:8000/api/leaderboard/").then((res) =>
      res.json()
    );
  }

  static UpdateLeaderboard(data) {
    return fetch("http://127.0.0.1:8000/api/leaderboard/update/", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
  }

  static GetPosts() {
    return fetch("http://127.0.0.1:8000/api/posts/").then((res) => res.json());
  }
}
