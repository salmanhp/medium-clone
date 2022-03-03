import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered "public", but you can use envirment variables
     * if you want differ between local and production.
     * 
     * https://nextjs.org/docs/basic-features/environment-variables
     * **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    /**
     * set useCdn to 'false' if your application requir the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     * **/
    useCdn: process.env.NODE_ENV === "production"
}

// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset
 * reference data in your document.
 * Reade more: https://www.sanity.io/docs/image-url
**/
export const urlFor = (source) => imageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);