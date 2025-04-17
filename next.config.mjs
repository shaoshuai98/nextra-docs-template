const nextra = await import('nextra');

const withNextra = await nextra.default({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra();