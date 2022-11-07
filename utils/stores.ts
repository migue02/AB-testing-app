import AppLink, { AppLinkOptions } from 'react-native-app-link';
import { APP_URL, LinkOptions } from './constants';

/**
 * Opens link if app is present. If not, it opens an app store to prompt the user to download it.
 * 
 * @param url - A url in the specified app's deep linking format that points to the content you want to open.
 * @param config - A set of fallback urls if the app requested does not exist locally.
 */
function openInStore(url: string, config: AppLinkOptions) {
    AppLink.maybeOpenURL(url, config).then(() => {
        // do stuff
    }).catch((err) => {
        // handle error
    });
}

export const openRacketPalInStore = () => openInStore(APP_URL, LinkOptions);