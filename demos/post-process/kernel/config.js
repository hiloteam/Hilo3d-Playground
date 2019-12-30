export default async () => {
  const [javascript, html, css] = await Promise.all([
    import('!raw-loader!./index.js'),
    import('!raw-loader!~/index-init-stage.html'),
    import('!raw-loader!~/style.css'),
  ]);

  return {
    javascript,
    html,
    css,
  }
}