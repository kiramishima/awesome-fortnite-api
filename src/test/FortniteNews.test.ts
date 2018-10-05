import { ForniteClient } from "../index";
import { FortniteSeason } from "../Enums/FortniteSeason";
import { FortniteLanguage } from "../Enums/FortniteLanguage";

test("Test Get News", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.news.getNews()).toMatchObject({type: expect.stringMatching(/battleroyale/)});
});