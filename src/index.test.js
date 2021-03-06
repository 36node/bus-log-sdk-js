import SDK from "./index";

const sdk = new SDK({ base: "http://localhost:3000" });

describe("## SDK vehicle", () => {
  it("must provide vehicleId", () => {
    const listRecords = () => sdk.vehicle.listRecords();
    expect(listRecords).toThrow("vehicleId is required for listRecords");
  });

  it("should list records", async () => {
    const result = await sdk.vehicle.listRecords({
      vehicleId: "xxxx",
      query: { limit: 10 },
    });
    expect(result.body.length).toBe(10);
  });
});
