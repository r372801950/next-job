import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { codeInspectorPlugin } from "code-inspector-plugin";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: "webpack" }));
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
