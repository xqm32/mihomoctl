import { YAML } from "bun";
import override from "./override.yaml";

const response = await fetch(process.env.SUB_URL!);
const config = YAML.parse(await response.text()) as Record<string, unknown>;
await Bun.write(
  process.env.SUB_PATH ?? "/etc/mihomo/config.yaml",
  YAML.stringify({ ...config, ...override }, null, 2)
);
