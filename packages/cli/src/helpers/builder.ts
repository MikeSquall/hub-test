import Bundler from 'parcel-bundler';
import rimraf from 'rimraf';
import { messages } from './const';

export default (builderOptions: { entryFile: string; output: string }) => {
  console.info(messages.appIsBundling);

  const { entryFile, output } = builderOptions;

  rimraf(output, () => {
    const options = {
      outDir: output,
      publicUrl: './',
      watch: false,
      cache: false,
      contentHash: false,
      minify: true,
      sourceMaps: false,
      logLevel: 3 as 3,
      detailedReport: true,
    };

    const bundler = new Bundler(entryFile, options);

    bundler.on('bundled', () => {
      console.info(messages.appIsBundled);
    });

    bundler.on('buildError', (error: Error) => {
      console.info(messages.appHasBundleError, error);
    });

    bundler.bundle();
  });
};
