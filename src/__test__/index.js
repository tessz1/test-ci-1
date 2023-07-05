export function healthingTotal(healthValues) {
    const results = healthValues.map(health => {
        if (health >= 50) {
            return "healthy";
        } else if (health >= 15) {
            return "wounded";
        } else {
            return "critical";
        }
    });

    return results;
}

