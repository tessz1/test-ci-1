import { healthingTotal } from "./index.js";

test.each([
    [50, 'healthy'],
    [30, 'wounded'],
    [10, 'critical']
])(
    'check health status',
    (health, expectedStatus) => {
        const result = healthingTotal([health]);
        expect(result).toContain(expectedStatus);
    } 
);
