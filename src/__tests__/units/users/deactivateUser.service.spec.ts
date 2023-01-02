import { UsersServices } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { userAdm } from "../../../mocks";
import { DataSource } from "typeorm";

describe("Tests for user service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to deactive a user", async () => {
    const user = await new UsersServices().create(userAdm);

    const result = await new UsersServices().deactivate(user.id);

    expect(result).toBeUndefined();
  });
});
