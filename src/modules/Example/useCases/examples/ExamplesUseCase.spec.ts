import { ExamplesRepositoryInMemory } from "@modules/Example/repositories/in-memory/ExamplesRepositoryInMemory";

import { ExamplesUseCase } from "./ExamplesUseCase";

let examplesRepository: ExamplesRepositoryInMemory;
let examplesUseCase: ExamplesUseCase;

describe("Example tests", () => {
  beforeEach(() => {
    examplesRepository = new ExamplesRepositoryInMemory();
    examplesUseCase = new ExamplesUseCase(examplesRepository);
  });

  it("example step test", async () => {
    const bodyExample = {
      columnExample: "teste",
    };

    await examplesUseCase.execute(bodyExample);
  });
});
