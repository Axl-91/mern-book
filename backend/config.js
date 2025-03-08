import "dotenv/config"

export const PORT = process.env.PORT || "8000";
export const DB_URL = process.env.MONGO_DB_URL || "";
