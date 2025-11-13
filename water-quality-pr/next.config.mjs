const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', 
  basePath: isProd ? '/water-qualituy-pr' : '',
  assetPrefix: isProd ? '/water-qualituy-pr/' : '',  
};

export default nextConfig;