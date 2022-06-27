interface Config {
    baseUrl: string;
    port: number;
    ordenUrl: string;
}

const generateConfig = (): Config => ({
    baseUrl: "http://localhost",
    ordenUrl: '/orden',
    port: 8080
})

export default generateConfig();