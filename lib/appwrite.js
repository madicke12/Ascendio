import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();





export const appwriteconfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform:'com.kounama.aora',
    projectId:'66c7a5ac003d86bf389b',
    databaseId:'66c7a71a00286210a5cb',
    userCollectionId:'66c7a7370001dcd3cbb0',
    videoCollectionId:'66c7a75f003e672e0389',
    storageId:'66c7a7b0002c3',
}


client
    .setEndpoint(appwriteconfig.endpoint ) // Your Appwrite Endpoint
    .setProject(appwriteconfig.projectId) // Your project ID
    .setPlatform(appwriteconfig.platform) // Your application ID or bundle ID.
;



const account = new Account(client);
const avatar= new Avatars(client);
const storage = new Databases(client);

export const createUser = async (email, password, name) => {
    try {
        const response = await account.create(ID.unique(), email, password, name);
        if(!response) throw new Error('User not created');
        const avatarUrl = avatar.getInitials(usernamee)
        await SignIn(email, password);
        const newUser= await storage.createDocument(appwriteconfig.databaseId, appwriteconfig.userCollectionId, {
            accoundId: response.$id,
            username :name,
            email,
            avatar: avatarUrl
        })
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export const Signin = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
       throw new Error(error);
    }
}