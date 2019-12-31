export const getCommonConfig = async () => {
    const [htmlCode, cssCode] = await Promise.all([
        import ('!raw-loader!~/index.html'),
        import ('!raw-loader!~/style.css'),
    ]);

    return {
        html: {
            code: htmlCode,
            transformer: 'html',
            visible: true
        },
        css: {
            code: cssCode,
            transformer: 'css',
            visible: false
        },
        foldBoxes:['html'],
        packages: {
            js: [
                './js/stats.js',
                './js/OrbitControls.js',
                './js/postProcess.js'
            ]
        }
    }
};

export const getInitStageConfig = async () => {
    const commonConfig = await getCommonConfig();
    commonConfig.packages.js.push('./js/init.js');
    return commonConfig;
};