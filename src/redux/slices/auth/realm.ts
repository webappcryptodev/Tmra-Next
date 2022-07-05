import * as Realm from 'realm-web';
import config from '@configuration';

export const app: Realm.App = new Realm.App({ id: config.realm.appId });
