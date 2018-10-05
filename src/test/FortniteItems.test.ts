import { ForniteClient } from "../index";
import { FortniteSeason } from "../Enums/FortniteSeason";
import { FortniteLanguage } from "../Enums/FortniteLanguage";

test("Test Store have Property rows", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.items.getStore()).toHaveProperty("rows");
});

test("Test Store have Property rows equal to 10", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.items.getStore()).toHaveProperty("rows", 9);
});