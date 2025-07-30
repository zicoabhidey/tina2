import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/zico/tina2/.tina/__generated__/.cache/1753882675864', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  