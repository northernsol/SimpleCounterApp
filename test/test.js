const { assert } = require("chai");

describe("CounterApp", function () {
  let counterAppFactory, counterApp;

  beforeEach(async function () {
    counterAppFactory = await ethers.getContractFactory("CounterApp");
    counterApp = await counterAppFactory.deploy();
  });

  it("the count should start from 0", async function () {
    const expectedValue = "0";
    const actualValue = await counterApp.get();
    assert.equal(expectedValue, actualValue);
  });

  it("should increment by 1", async function () {
    const expectedValue = "1";
    const transactionResponse = await counterApp.inc();
    await transactionResponse.wait(1);
    const actualValue = await counterApp.get();
    assert.equal(expectedValue, actualValue);
  });

  it("should decrement by 1", async function () {
    await counterApp.inc();
    await counterApp.inc();
    const transactionResponse = await counterApp.dec();
    await transactionResponse.wait(1);
    const actualValue = await counterApp.get();
    assert.equal("1", actualValue);
  });
});
