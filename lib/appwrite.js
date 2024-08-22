import { Client, Account, ID } from 'react-native-appwrite';
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

export const createUser = async (email, password, name) => {
    try {
        const response = await account.create(ID.unique(), email, password, name);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}