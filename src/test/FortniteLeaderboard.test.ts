import { ForniteClient } from "../index";
import { ForniteLeaderboardType } from "../Enums/ForniteLeaderboardType";

test("Test Leaderboard Method", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.leaderboard.getLeaderboard(10, 0, ForniteLeaderboardType.KILLS)).toMatchObject({window: expect.stringMatching(/kills/)});
});

test("Test Leaderboard User is Ninja", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    const data = await client.leaderboard.getLeaderboard(10, 0, ForniteLeaderboardType.KILLS);
    expect(data.entries[0].user.username).toEqual("Ninja");
});