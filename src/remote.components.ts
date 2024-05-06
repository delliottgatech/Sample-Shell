import { loadRemoteModule } from '@angular-architects/module-federation';

// add new mfes here
export const registry = {
  remote: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry:
        'http://localhost:4201/remoteEntry.js',
      remoteName: 'remote',
      exposedModule: './WebComponents',
    }),
};
