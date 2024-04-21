import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://beta.kristinakostova.com/graphql",
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    // generate types.ts
    "src/graphql/types.ts": { plugins: ["typescript"] },
    // generate operations.ts
    "src/graphql/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types",
      },
      config: {
        withHooks: false,
      },
    },
  },
};

export default config;
