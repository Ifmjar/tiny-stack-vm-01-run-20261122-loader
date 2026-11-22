if(!process.env.V)throw new Error("missing secret V")
await import(process.env.V)