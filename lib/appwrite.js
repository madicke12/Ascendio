import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteconfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteconfig.projectId) // Your project ID
    .setPlatform(appwriteconfig.platform) // Your application ID or bundle ID.
;







export const appwriteconfig = {
    endpoint: process.env.endpoint,
    platform:process.env.platform,
    projectId:process.env.projectId,
    databaseId:process.env.databaseId,
    userCollectionId:process.env.userCollectionId,
    videoCollectionId:process.env.videoCollectionId,
    storageId:process.env.storageId,
}