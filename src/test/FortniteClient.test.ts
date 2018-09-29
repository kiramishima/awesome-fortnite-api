import { ForniteClient } from "../index";

test("Test Get Status", async () => {
    const client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    expect(await client.checkStatus()).toEqual("UP");
});