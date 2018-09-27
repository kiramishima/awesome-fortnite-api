import { ForniteClient } from "../src/index";

test("Basic Get ID", async () => {
    let client = new ForniteClient();
    client.setKey(process.env.FORTNITE_APIKEY);
    client.user.id("kiramishima")
});