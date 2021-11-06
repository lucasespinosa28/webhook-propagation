# 👷 webhook-propagation

this a Cloudflare workers that receiver webhook from Parsiq trigger to store @TO address into a user date table

[`app to show transactions`](https://github.com/lucasespinosa28/Transaction-propagation-parsiq) 

## how to run
1. `npx wrangler dev`
2. `npx ngrok http 8787`
3. in Parsiq transport, create a new transport webhook with the Ngrok URL,`http://0aed-2804-86c-2024-5200-b833-5c82-815f-d4d9.ngrok.io/webhook/{trigger api key}/{user data api key}`
