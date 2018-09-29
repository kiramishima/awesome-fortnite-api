import { ForniteClient } from "../index";
import { FortniteSeason } from "../Enums/FortniteSeason";
import { FortniteLanguage } from "../Enums/FortniteLanguage";

test("Test Get Challenge", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.challenges.getChallenges(FortniteSeason.CURRENT, FortniteLanguage.EN)).toMatchObject({language: expect.stringMatching(/en/)});
});

test("Check have property season", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.challenges.getChallenges(FortniteSeason.CURRENT, FortniteLanguage.EN)).toHaveProperty("season");
});

test("Check have property season with value 6", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.challenges.getChallenges(FortniteSeason.CURRENT, FortniteLanguage.EN)).toHaveProperty("season", 6);
});