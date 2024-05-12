import ngrok from "@ngrok/ngrok";
import dotenv from "dotenv"

(async function () {
  dotenv.config({ path: ['.env.local', '.env'] })
  
  const host = process.env.NGROK_HOST ?? "localhost";
  const port = process.env.NGROK_PORT ?? "8080";
  const domain = process.env.NGROK_DOMAIN;
  const addr = `${host}:${port}`

  const builder = new ngrok.SessionBuilder()
  builder.authtokenFromEnv()
    .clientInfo('ngrok-http-full', '1.2.3')
    .handleStopCommand(() => {
      console.log('Stop command')
    })
    .handleRestartCommand(() => {
      console.log('Restart command')
    })
    .handleHeartbeat((latency) => {
      console.log("heartbeat, latency:", latency, "milliseconds");
    })

  const session = await builder.connect()
  const listener = await session.httpEndpoint()
    .domain(domain)
    .listen()
  
  listener.forward(addr)
  
  console.info("Ingress established at:", listener.url());
})().catch(e => console.error('Error occured', e))