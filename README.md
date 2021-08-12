

# Timisdev


# Run

1. Run docker-compose up -d
2. Create a user: curl -d '{"email":"r@timis.dev", "password":"12345678"}' -H "Content-Type: application/json" -X POST http://localhost:4001/auth/register