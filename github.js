class Github {
  constructor() {
    this.client_id = "7d5b6892c7ec266d62ea";
    this.client_secret = "d037c5a08d5c959966af3a10f0ece31093fee508";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
