import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages, submitMessage } from '../data/messages';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>();

  useIonViewWillEnter(async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  });

  const refresh = async (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const submitData = async () => {
    console.log('text', text)
    await submitMessage(text);
    const msgs = await getMessages();
    setMessages(msgs);
    setText("")
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <IonItem className="ion-padding">
            <IonLabel position="floating">Input Todo here</IonLabel>
            <IonInput value={text}  onIonChange={e => setText(e.detail.value!)}></IonInput>
            <IonButton slot="end" onClick={submitData}>
              Submit
            </IonButton>
          </IonItem>

          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
