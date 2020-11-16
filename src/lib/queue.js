import Queue from "bull";

const queueOptions = { redis: { host: "redis" } };

export const testQueue = new Queue("test", queueOptions);
