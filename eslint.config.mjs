import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/r/**",
      "public/spec.html",
    ],
  },
];

export default config;
