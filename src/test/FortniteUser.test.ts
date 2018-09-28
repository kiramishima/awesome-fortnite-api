import { ForniteClient } from "../index";

test("Test Get ID", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.user.id("kiramishima")).toEqual("abb9037918d2427eaeee38dd328c1256");
});

test("Test Get User Platforms Was Played Fortnite", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.user.getUserPlatforms("kiramishima")).toEqual(["pc", "xb1"]);
});
