Build
```
docker build --build-arg PORT=3000 --build-arg SECRET_USER=secretuser --build-arg SECRET_HASH=$argon2id$v=19$m=65536,t=3,p=4$UW1dmvGaLbyPcQvbjT8r+Q$/xwt1zdncTLNVU8mqy3FUePCkhXivMfxr9uyM8cDxrg -t notice-board:2.0 .
```

Run
```
docker run -p 3000:3000 notice-board:2.0
```