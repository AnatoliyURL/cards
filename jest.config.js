module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "\\.(css)": "identity-obj-proxy"
    },
    snapshotSerializer: [" enzyme-to-json/serializer"]

}