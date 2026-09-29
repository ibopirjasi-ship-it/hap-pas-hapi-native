import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, AppState, BackHandler, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

const HOME = 'https://www.hap-pas-hapi.com/';
const siteHosts = new Set(['www.hap-pas-hapi.com', 'hap-pas-hapi.com', 'hap-pas-hapi-gjermanisht.ibotiran.chatgpt.site']);

function isSiteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && siteHosts.has(url.hostname);
  } catch { return false; }
}

export default function Home() {
  const web = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [error, setError] = useState(false);
  const openedExternal = useRef(false);
  useEffect(() => {
    const back = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack) { web.current?.goBack(); return true; }
      return false;
    });
    const active = AppState.addEventListener('change', state => {
      if (state === 'active' && openedExternal.current) {
        openedExternal.current = false;
        web.current?.reload();
      }
    });
    return () => { back.remove(); active.remove(); };
  }, [canGoBack]);

  return <View style={styles.page}>
    <StatusBar barStyle="light-content" backgroundColor="#071a2a" />
    <WebView
      ref={web}
      source={{ uri: HOME }}
      style={styles.web}
      originWhitelist={['https://*']}
      javaScriptEnabled
      domStorageEnabled
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction
      startInLoadingState
      renderLoading={() => <View style={styles.loading}><ActivityIndicator size="large" color="#20e5ec" /></View>}
      onNavigationStateChange={state => setCanGoBack(state.canGoBack)}
      onShouldStartLoadWithRequest={request => {
        if (isSiteUrl(request.url) || request.url === 'about:blank') return true;
        openedExternal.current = true;
        Linking.openURL(request.url).catch(() => { openedExternal.current = false; });
        return false;
      }}
      onError={() => setError(true)}
      onLoad={() => setError(false)}
    />
    {error && <View style={styles.error}><Text style={styles.message}>Lidhja me faqen nuk u hap.</Text><TouchableOpacity onPress={() => { setError(false); web.current?.reload(); }} style={styles.button}><Text style={styles.buttonText}>Provo sërish</Text></TouchableOpacity></View>}
  </View>;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#071a2a' },
  web: { flex: 1, backgroundColor: '#071a2a' },
  loading: { flex: 1, backgroundColor: '#071a2a', justifyContent: 'center', alignItems: 'center' },
  error: { ...StyleSheet.absoluteFillObject, backgroundColor: '#071a2a', alignItems: 'center', justifyContent: 'center', gap: 20 },
  message: { color: '#fff', fontSize: 18, fontWeight: '700' },
  button: { backgroundColor: '#20e5ec', paddingHorizontal: 22, paddingVertical: 13, borderRadius: 14 },
  buttonText: { color: '#073246', fontWeight: '800' },
});
