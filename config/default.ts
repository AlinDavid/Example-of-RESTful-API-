export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 10,
    accesTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDthJGuQn0WEFR+x5sGxfrwT6o
oLF0930lLX6a93ZZs271MtTSs7YprPaUOOkaKxr1o1MhNfjQdu/5oa1Hq5ZQO4GN
0nSTBSqCfnkGdLzMfjneg0N1RMr59d0Qz1CrffJQV06HshUXu3XA+34bYw0lQujq
mbiyp0xrR9iLdslhEQIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCDthJGuQn0WEFR+x5sGxfrwT6ooLF0930lLX6a93ZZs271MtTS
s7YprPaUOOkaKxr1o1MhNfjQdu/5oa1Hq5ZQO4GN0nSTBSqCfnkGdLzMfjneg0N1
RMr59d0Qz1CrffJQV06HshUXu3XA+34bYw0lQujqmbiyp0xrR9iLdslhEQIDAQAB
AoGAPINENlYBas+5gw7a1VRFUz1/qj3aCiFCz/fs+QnEyEWWLvVhrkR+5vredw8G
mc1AH6cgJFwFqtFaQ9iyIgGFl0BEVrMCEvwiPEa9QIIKE/S1LIo4RSVdGvfpQQOl
xX9mml5V60g0iz5Y6aHZjj/9Uf4Y1pq1QnfKOT0TzIv5oRkCQQDXL8tiASwPfvAr
9qrUIm1ApLns7oX3AJUGJ139ddvh3caqs0RCAwdw+kGAJAxt1KFplWEysun0cBEb
zFaN5eW7AkEAnLEyUPPEkQ/xz21LxLK9QDEP2NzfaG8pzcAQMyWRuJQfhnr5uRat
LqUf7Zf8wAjv5jm8NxatIDFQZoihZjEhowJBAK6HIyvPy46d4+mkXJVFftrpP6r9
IkZdgIDHOSIzjy04FMOqNfhcQJLPRoTJuBL0XB4oe/cEyV/p7NZg+uqHxbUCQHrZ
Wm+pjzWEYLuWH09qK4KGdLw7/1Rrw0SzDoBrNiKWz1iqVdvNcZ4ejDfFb75Hw36n
SW+PcdDJmRWqjZAHeS0CQDF8PcmXq7uq7VmnunJdfMp2b/HUDh4VRFpbuIzZH8jj
pIts4IhESahUwESXKTqC7Fekm6Z6JricMd5CZU+Y+rc=
-----END RSA PRIVATE KEY-----`
};