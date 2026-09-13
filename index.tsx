import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

type Tab = 'Sot' | 'Mësime' | 'Fjalor' | 'Profili';
const levels = [
  { id: 'A1', label: 'Fillestar', progress: 68, color: '#F3B340' },
  { id: 'A2', label: 'Bazë', progress: 24, color: '#E8784D' },
  { id: 'B1', label: 'Mesatar', progress: 0, color: '#588C7E' },
  { id: 'B2', label: 'Mesatar+', progress: 0, color: '#4C6FAE' },
  { id: 'C1', label: 'Avancuar', progress: 0, color: '#8066A8' },
  { id: 'C2', label: 'Mjeshtëri', progress: 0, color: '#C05D7A' },
];
const words = [
  ['Guten Morgen', 'Mirëmëngjes'], ['Danke', 'Faleminderit'],
  ['Wie geht es dir?', 'Si je?'], ['Auf Wiedersehen', 'Mirupafshim'],
];

export default function Home() {
  const [tab, setTab] = useState<Tab>('Sot');
  const [lesson, setLesson] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const speak = (text: string) => Speech.speak(text, { language: 'de-DE', rate: .82 });

  if (lesson) return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.page}>
    <Pressable onPress={() => {setLesson(false); setAnswer(null)}} style={s.back}><Ionicons name="arrow-back" size={22}/><Text>Kthehu</Text></Pressable>
    <View style={s.lessonHead}><Text style={s.eyebrow}>MËSIMI 1 · A1</Text><Text style={s.title}>Përshëndetjet</Text><Text style={s.sub}>Fjalët e para për një bisedë në gjermanisht.</Text></View>
    {words.map(([de, sq]) => <Pressable key={de} style={s.word} onPress={() => speak(de)}>
      <View><Text style={s.german}>{de}</Text><Text style={s.albanian}>{sq}</Text></View><View style={s.sound}><Ionicons name="volume-high" size={20} color="#B4313B"/></View>
    </Pressable>)}
    <Text style={s.quizTitle}>Pyetje e shpejtë</Text><Text style={s.question}>Si thuhet “Faleminderit”?</Text>
    {['Bitte','Danke','Hallo'].map(x => <Pressable key={x} onPress={() => setAnswer(x)} style={[s.option, answer===x && (x==='Danke'?s.correct:s.wrong)]}><Text style={s.optionText}>{x}</Text>{answer===x&&<Ionicons name={x==='Danke'?'checkmark-circle':'close-circle'} size={22} color={x==='Danke'?'#287A5B':'#B4313B'}/>}</Pressable>)}
    {answer && <View style={s.feedback}><Text style={s.feedbackText}>{answer==='Danke'?'Shumë mirë! +10 pikë':'Provo përsëri — përgjigjja është “Danke”.'}</Text></View>}
  </ScrollView></SafeAreaView>;

  return <SafeAreaView style={s.safe}><View style={s.container}><ScrollView contentContainerStyle={s.page} showsVerticalScrollIndicator={false}>
    <View style={s.top}><View><Text style={s.hello}>Guten Morgen 👋</Text><Text style={s.name}>Gati për një hap të ri?</Text></View><View style={s.avatar}><Text style={s.avatarText}>A</Text></View></View>
    <View style={s.streak}><View><Text style={s.streakBig}>🔥 7</Text><Text style={s.streakLabel}>ditë radhazi</Text></View><View style={s.line}/><View><Text style={s.streakBig}>⭐ 340</Text><Text style={s.streakLabel}>pikë gjithsej</Text></View></View>
    <View style={s.sectionRow}><Text style={s.section}>Mësimi i sotëm</Text><Text style={s.muted}>8 min</Text></View>
    <Pressable style={s.hero} onPress={() => setLesson(true)}><Text style={s.heroTag}>A1 · THEMELI</Text><Text style={s.heroTitle}>Përshëndetjet</Text><Text style={s.heroText}>Mëso si të përshëndesësh dhe të prezantohesh.</Text><View style={s.start}><Text style={s.startText}>Fillo mësimin</Text><Ionicons name="arrow-forward" size={18} color="white"/></View><View style={s.flag}><View style={{backgroundColor:'#1D1D1B',flex:1}}/><View style={{backgroundColor:'#C53531',flex:1}}/><View style={{backgroundColor:'#E9B93F',flex:1}}/></View></Pressable>
    <Text style={s.section}>Rruga jote</Text>
    <View style={s.grid}>{levels.map(l=><View key={l.id} style={s.level}><View style={[s.levelBadge,{backgroundColor:l.color}]}><Text style={s.levelId}>{l.id}</Text></View><Text style={s.levelLabel}>{l.label}</Text><View style={s.progress}><View style={[s.progressFill,{width:`${l.progress}%`,backgroundColor:l.color}]}/></View><Text style={s.percent}>{l.progress?`${l.progress}%`:'I kyçur'}</Text></View>)}</View>
    <Text style={s.section}>Fjala e ditës</Text><Pressable style={s.daily} onPress={()=>speak('Schritt für Schritt')}><View><Text style={s.german}>Schritt für Schritt</Text><Text style={s.albanian}>Hap pas hapi</Text></View><Ionicons name="volume-high" size={24} color="#B4313B"/></Pressable>
  </ScrollView>
  <View style={s.nav}>{(['Sot','Mësime','Fjalor','Profili'] as Tab[]).map((x,i)=><Pressable key={x} style={s.navItem} onPress={()=>setTab(x)}><Ionicons name={['home','book','search','person'][i] as any} size={22} color={tab===x?'#B4313B':'#9A9690'}/><Text style={[s.navText,tab===x&&s.navActive]}>{x}</Text></Pressable>)}</View>
  </View></SafeAreaView>;
}

const s=StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F8F5EF'},container:{flex:1},page:{padding:22,paddingBottom:110},
  top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:8,marginBottom:22},hello:{fontSize:13,color:'#716C65',fontWeight:'600'},name:{fontSize:23,fontWeight:'800',color:'#24221F',marginTop:3},avatar:{width:44,height:44,borderRadius:22,backgroundColor:'#24221F',alignItems:'center',justifyContent:'center'},avatarText:{color:'white',fontWeight:'800',fontSize:17},
  streak:{backgroundColor:'#FFF',borderRadius:18,padding:17,flexDirection:'row',justifyContent:'space-around',shadowColor:'#3E3224',shadowOpacity:.06,shadowRadius:14,elevation:2,marginBottom:26},streakBig:{fontSize:19,fontWeight:'800',textAlign:'center'},streakLabel:{fontSize:12,color:'#77716B',marginTop:3},line:{width:1,backgroundColor:'#ECE7DE'},
  sectionRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},section:{fontSize:19,fontWeight:'800',color:'#292622',marginTop:4,marginBottom:12},muted:{color:'#8D8882',fontSize:12},
  hero:{backgroundColor:'#B4313B',borderRadius:23,padding:22,overflow:'hidden',marginBottom:27},heroTag:{color:'#F2C3C7',fontSize:11,fontWeight:'800',letterSpacing:1},heroTitle:{color:'white',fontSize:28,fontWeight:'900',marginTop:7},heroText:{color:'#F8DDE0',fontSize:14,lineHeight:20,width:'72%',marginTop:5},start:{alignSelf:'flex-start',flexDirection:'row',gap:8,alignItems:'center',backgroundColor:'#25221F',paddingVertical:11,paddingHorizontal:15,borderRadius:12,marginTop:18},startText:{color:'white',fontWeight:'700'},flag:{position:'absolute',right:19,top:18,width:38,height:54,borderRadius:7,overflow:'hidden',transform:[{rotate:'8deg'}]},
  grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginBottom:25},level:{backgroundColor:'#FFF',width:'48%',borderRadius:16,padding:14,marginBottom:12},levelBadge:{width:42,height:42,borderRadius:13,alignItems:'center',justifyContent:'center'},levelId:{color:'white',fontWeight:'900'},levelLabel:{fontWeight:'700',marginTop:9},progress:{height:5,borderRadius:3,backgroundColor:'#EEEAE3',marginTop:10,overflow:'hidden'},progressFill:{height:'100%',borderRadius:3},percent:{fontSize:10,color:'#8D8882',marginTop:5},daily:{backgroundColor:'#FFF',borderRadius:17,padding:18,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},german:{fontSize:17,fontWeight:'800',color:'#292622'},albanian:{fontSize:13,color:'#77716B',marginTop:3},
  nav:{position:'absolute',bottom:0,left:0,right:0,height:82,backgroundColor:'white',borderTopColor:'#EEE9E1',borderTopWidth:1,flexDirection:'row',justifyContent:'space-around',paddingTop:10},navItem:{alignItems:'center',gap:3,minWidth:60},navText:{fontSize:11,color:'#9A9690'},navActive:{color:'#B4313B',fontWeight:'800'},
  back:{flexDirection:'row',alignItems:'center',gap:8,marginTop:8,marginBottom:22},lessonHead:{marginBottom:22},eyebrow:{fontSize:11,color:'#B4313B',fontWeight:'800',letterSpacing:1},title:{fontSize:32,fontWeight:'900',color:'#24221F',marginTop:5},sub:{color:'#716C65',fontSize:15,lineHeight:21,marginTop:6},word:{backgroundColor:'white',padding:17,borderRadius:16,marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},sound:{width:40,height:40,borderRadius:20,backgroundColor:'#F9E9EA',alignItems:'center',justifyContent:'center'},quizTitle:{fontSize:12,color:'#B4313B',fontWeight:'800',letterSpacing:1,marginTop:20,marginBottom:8},question:{fontSize:21,fontWeight:'800',marginBottom:13},option:{backgroundColor:'white',borderWidth:1,borderColor:'#E9E4DC',padding:16,borderRadius:14,marginBottom:9,flexDirection:'row',justifyContent:'space-between'},optionText:{fontWeight:'700',fontSize:16},correct:{borderColor:'#287A5B',backgroundColor:'#EAF5F0'},wrong:{borderColor:'#B4313B',backgroundColor:'#F9E9EA'},feedback:{backgroundColor:'#272420',padding:16,borderRadius:14,marginTop:6},feedbackText:{color:'white',fontWeight:'700'}
});
