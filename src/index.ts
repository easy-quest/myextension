import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the myextension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'myextension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension myextension is activated!');
  }
};

export default extension;
