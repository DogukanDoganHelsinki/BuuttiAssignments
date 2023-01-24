export const createProductTable = `
    CREATE TABLE IF NOT EXISTS "products" (
	    "id" VARCHAR(36) NOT NULL,
	    "name" VARCHAR(100) NOT NULL,
	    "price" INTEGER NOT NULL,
	    PRIMARY KEY ("id")
    );`

export const insertProduct = 'INSERT INTO "products" ("id","name","price") VALUES ($1, $2, $3) RETURNING id;'
export const updateProduct = 'UPDATE "products" SET name=$1, price=$2 WHERE id=$3;'
export const findAll = 'SELECT * FROM "products";'
export const findOne = 'SELECT * FROM "products" WHERE id = $1;'
export const deleteById = 'DELETE FROM "products" WHERE id = $1;'