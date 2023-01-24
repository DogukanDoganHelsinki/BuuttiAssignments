export const createProductTable = `
    CREATE TABLE IF NOT EXISTS "products" (
	    "id" VARCHAR(36) NOT NULL,
	    "name" VARCHAR(100) NOT NULL,
	    "price" INTEGER NOT NULL,
	    PRIMARY KEY ("id")
    );`