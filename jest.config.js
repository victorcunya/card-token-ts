module.exports = {
    collectCoverage: true,
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["app/**/*.ts"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/test/",
        "/dist/"
    ],
    moduleNameMapper: {
        "^@controller(.*)$": "<rootDir>/app/controller$1",
        "^@extensions(.*)$": "<rootDir>/app/extensions$1",
        "^@model(.*)$": "<rootDir>/app/model$1",
        "^@repository(.*)$": "<rootDir>/app/repository$1",
        "^@service(.*)$": "<rootDir>/app/service$1",
        "^@helper(.*)$": "<rootDir>/app/helper$1",
    }
};
