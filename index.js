import { Router } from 'itty-router'

const router = Router()

router.post("/webhook/:bearer/:userdata", async ( request ) => {
  let userdata = request.params.userdata
  let bearer = request.params.bearer
  let fields = {
    "asn": request.cf.asn,
    "colo": request.cf.colo,
    "body": request.body,
    "json": request.json,
   }

  fields["json"] = await request.json()
  console.log(fields)
  const array = [{address: fields.json.to}]
  console.log(fields.json.to)
  const url = `https://staging-api.parsiq.net/v1/data/${userdata}`
  const init = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${bearer}`
    },
    body:  JSON.stringify(array)
  };
  const results = await fetch(url, init);
  fields["data"] = results
  const returnData = JSON.stringify(fields, null, 2);
  return new Response(returnData, {
    headers: {
      "Content-Type": "application/json"
    }
  })
})

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
