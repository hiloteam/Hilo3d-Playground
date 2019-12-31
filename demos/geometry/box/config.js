import {
    getCommonConfig,
    getInitStageConfig
} from '~/getConfig';

export default async () => {
    const [javascript, commonConfig] = await Promise.all([
        import ('!raw-loader!./index.js'),
        getInitStageConfig()
    ]);

    return Object.assign({
        javascript: javascript
    }, commonConfig);
};