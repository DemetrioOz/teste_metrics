import { Api } from "./api";

jest.setTimeout(10 * 3500000);

describe("Metricas", () => {
  beforeAll(async () => {});

  beforeEach(async () => {});

  afterEach(async () => {});

  afterAll(async () => {});

  test("Verifica metricas", async () => {
    const api = new Api();
    const data = await api.getUsers();
    console.log(data);
  });
});
