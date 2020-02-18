import API from '../api'

const db = API.firestore();
const messagesApi = db.collection("messages");

const messages = [
    { message: "Hello", createdAt: new Date(), userId: "pMKR3dqINHZYCCs6I5UDZXziOqI3", sentBy: "Ian", channelName: 'general' },
    { message: "Morning!", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "What's the plan today?", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Read emails...", createdAt: new Date(), userId: "pMKR3dqINHZYCCs6I5UDZXziOqI3", sentBy: "Ian", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
    { message: "Roger", createdAt: new Date(), userId: "oc3uaqD03KQG3WAURPuFJPVTwjA3", sentBy: "Daniel", channelName: 'general' },
];

const getMessagesInChannel = (channel) => messages.filter(message => message.channelName === channel);
const getMessagesByUser = (userId) => messages.filter(message => message.userId === userId)
const getLastNMessages = (n) => messages.slice(1).slice(-n)

export default {
    getMessagesInChannel, getMessagesByUser, getLastNMessages
}